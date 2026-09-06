"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { calculateTiltFromPointer, calculateBreathingOffset, SPRING_CONFIG } from "./CharacterMotion";

interface PNG25DRendererProps {
  pointerX: number;
  pointerY: number;
  isHovered: boolean;
  className?: string;
}

export function PNG25DRenderer({
  pointerX,
  pointerY,
  isHovered,
  className = "",
}: PNG25DRendererProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [time, setTime] = useState(0);

  // Smooth springs for rotation and position
  const springRotateX = useSpring(0, SPRING_CONFIG);
  const springRotateY = useSpring(0, SPRING_CONFIG);
  const springShiftX = useSpring(0, SPRING_CONFIG);
  const springShiftY = useSpring(0, SPRING_CONFIG);

  // Update physics on pointer changes
  useEffect(() => {
    const tilt = calculateTiltFromPointer(pointerX, pointerY, isHovered ? 7 : 4, isHovered ? 9 : 5);
    springRotateX.set(tilt.rotateX);
    springRotateY.set(tilt.rotateY);
    springShiftX.set(tilt.shiftX);
    springShiftY.set(tilt.shiftY);
  }, [pointerX, pointerY, isHovered, springRotateX, springRotateY, springShiftX, springShiftY]);

  // Natural procedural eye blink loop
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const scheduleNextBlink = () => {
      // Natural human blink every 3.8 to 6.5 seconds
      const nextInterval = 3800 + Math.random() * 2700;
      timeoutId = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleNextBlink();
        }, 160); // 160ms realistic blink closure
      }, nextInterval);
    };

    scheduleNextBlink();
    return () => clearTimeout(timeoutId);
  }, []);

  // Frame ticker for breathing
  useEffect(() => {
    let animFrame: number;
    let start = performance.now();
    const tick = (now: number) => {
      setTime(now - start);
      animFrame = requestAnimationFrame(tick);
    };
    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const breathing = calculateBreathingOffset(time);

  return (
    <div
      className={`relative w-full h-full flex items-end justify-center perspective-[1200px] select-none ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          x: springShiftX,
          y: breathing.y,
          scale: breathing.scale,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[460px] h-[520px] sm:h-[580px] md:h-[620px] flex items-end justify-center pointer-events-none"
      >
        {/* Layer 1: 4K Master Character Base (Style 01 4K Transparent) */}
        <div className="relative w-full h-full">
          <Image
            src="/images/avatar/style_01_4k_transparent.png"
            alt="Mastan Vali — 3D Character Experience"
            fill
            sizes="(max-width: 768px) 340px, (max-width: 1200px) 460px, 520px"
            priority
            className={`object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] transition-opacity duration-100 ${
              isBlinking ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Layer 2: Natural Closed-Eyes Blink Texture Overlay */}
          <Image
            src="/images/avatar/style_01_eyes_closed.png"
            alt="Blink state"
            fill
            sizes="(max-width: 768px) 340px, (max-width: 1200px) 460px, 520px"
            className={`object-contain object-bottom pointer-events-none transition-opacity duration-75 ${
              isBlinking ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
}

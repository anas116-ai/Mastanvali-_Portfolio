"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CursorTelemetry() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on non-touch desktop devices
    if (window.matchMedia("(pointer: coarse)").matches || prefersReduced) {
      return;
    }
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.hasAttribute("data-interactive")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, prefersReduced]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Targeting Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`absolute rounded-full border border-[var(--color-accent)] transition-all duration-200 ${
          hovered
            ? "w-14 h-14 bg-[var(--color-accent)]/10 scale-125 border-opacity-80"
            : "w-8 h-8 border-opacity-40"
        }`}
      >
        {/* Crosshair ticks */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-[var(--color-accent)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0.5 h-1.5 bg-[var(--color-accent)]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-0.5 w-1.5 bg-[var(--color-accent)]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-0.5 w-1.5 bg-[var(--color-accent)]" />
      </motion.div>

      {/* Center Target Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`absolute rounded-full bg-[var(--color-accent)] transition-transform duration-100 ${
          hovered ? "w-2 h-2 scale-150" : "w-1 h-1"
        }`}
      />

      {/* Coordinate Telemetry Tag */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "18px",
          translateY: "18px",
        }}
        className="absolute font-mono text-[9px] text-[var(--color-accent)]/70 tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded border border-[var(--color-accent)]/20 backdrop-blur-sm pointer-events-none select-none"
      >
        {coords.x}:{coords.y} // SYS:ONLINE
      </motion.div>
    </div>
  );
}

"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface CharacterShadowProps {
  accentColor?: string;
  verticalMotion?: MotionValue<number>;
  scaleFactor?: number;
  className?: string;
}

export function CharacterShadow({
  accentColor = "#14B8A6",
  verticalMotion,
  scaleFactor = 1.0,
  className = "",
}: CharacterShadowProps) {
  // If vertical motion is provided, dynamically modulate shadow spread & opacity
  const shadowOpacity = verticalMotion
    ? useTransform(verticalMotion, [-15, 0, 15], [0.65, 0.9, 0.95])
    : 0.88;

  const shadowScaleX = verticalMotion
    ? useTransform(verticalMotion, [-15, 0, 15], [0.92 * scaleFactor, 1.0 * scaleFactor, 1.06 * scaleFactor])
    : scaleFactor;

  return (
    <div
      className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none z-0 ${className}`}
      style={{ width: `${Math.round(260 * scaleFactor)}px` }}
    >
      {/* 1. Volumetric Floor Environment Fill (Subtle Cyan Bounce Light) */}
      <div
        className="absolute -bottom-1 w-[260px] h-[45px] rounded-full blur-xl opacity-35 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse, ${accentColor} 0%, rgba(8, 19, 29, 0.4) 50%, transparent 80%)`,
        }}
      />

      {/* 2. Soft Ambient Occlusion Footprint Spread */}
      <motion.div
        style={{
          opacity: shadowOpacity,
          scaleX: shadowScaleX,
        }}
        className="w-[200px] h-[24px] rounded-full bg-black/80 blur-md"
      />

      {/* 3. Razor-Sharp Physical Shoe Contact Occlusion (Pinpoints Shoes to Ground) */}
      <div className="absolute bottom-1 w-[140px] h-[8px] rounded-full bg-black/98 blur-[1.5px]" />
    </div>
  );
}

"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface CharacterShadowProps {
  motionY?: MotionValue<number>;
  pointerX?: number;
  className?: string;
}

export function CharacterShadow({
  pointerX = 0,
  className = "",
}: CharacterShadowProps) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[72%] max-w-[380px] h-[36px] ${className}`}
      aria-hidden="true"
    >
      {/* Primary Contact Ambient Occlusion Core */}
      <motion.div
        animate={{
          scaleX: [1, 0.94, 1],
          opacity: [0.85, 0.72, 0.85],
          x: pointerX * 12,
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 mx-auto w-[65%] h-[16px] rounded-[100%] bg-black/90 blur-[6px]"
      />

      {/* Secondary Soft Penumbra Radial Shadow */}
      <motion.div
        animate={{
          scaleX: [1, 0.96, 1],
          opacity: [0.55, 0.42, 0.55],
          x: pointerX * 8,
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 mx-auto w-full h-[28px] rounded-[100%] bg-black/60 blur-[18px]"
      />

      {/* Tertiary Diffuse Environmental Drop */}
      <div className="absolute -bottom-2 inset-x-0 mx-auto w-[110%] h-[20px] rounded-[100%] bg-[#080C14] blur-[12px] opacity-80" />
    </div>
  );
}

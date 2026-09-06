"use client";

import React from "react";
import { motion } from "framer-motion";

interface CharacterLightingProps {
  pointerX?: number;
  pointerY?: number;
}

export function CharacterLighting({
  pointerX = 0,
  pointerY = 0,
}: CharacterLightingProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10" aria-hidden="true">
      {/* 1. Subtle Atmospheric Rim Light (Backlight) */}
      <div
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[90%] h-[75%] rounded-full blur-[70px] opacity-25"
        style={{
          background: "radial-gradient(ellipse at center, rgba(20, 184, 166, 0.35) 0%, rgba(20, 184, 166, 0.15) 45%, transparent 75%)",
        }}
      />

      {/* 2. Realistic Localized Laptop Screen Glow */}
      {/* Radiates from the center-bottom where the laptop is held */}
      <motion.div
        animate={{
          opacity: [0.35, 0.48, 0.38, 0.52, 0.4],
          scale: [1, 1.04, 0.98, 1.05, 1],
        }}
        transition={{
          duration: 5.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[28%] left-[48%] -translate-x-1/2 w-[160px] h-[90px] rounded-full blur-[26px]"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.6) 0%, rgba(20, 184, 166, 0.25) 55%, transparent 80%)",
        }}
      />

      {/* 3. Subtle Warm Ambient Counter-fill (Reflecting Mastan's warm palette) */}
      <div
        className="absolute bottom-[10%] -left-[10%] w-[180px] h-[180px] rounded-full blur-[60px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(244, 122, 24, 0.4) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

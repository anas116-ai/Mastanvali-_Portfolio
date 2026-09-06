"use client";

import { motion } from "framer-motion";

interface CharacterLightingProps {
  accentColor?: string;
  secondaryAccent?: string;
  isNearCursor?: boolean;
  className?: string;
}

export function CharacterLighting({
  accentColor = "#14B8A6",
  secondaryAccent = "#F47A18",
  isNearCursor = false,
  className = "",
}: CharacterLightingProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 select-none overflow-visible z-0 ${className}`}>
      {/* 1. Primary Left Oceanic Cyan Rim Light */}
      <div
        className="absolute -top-10 -left-12 w-[180px] h-[340px] rounded-full blur-3xl opacity-20 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 75%)`,
        }}
      />

      {/* 2. Secondary Right Solar Amber Warm Studio Accent Light */}
      <div
        className="absolute top-1/4 -right-10 w-[160px] h-[280px] rounded-full blur-3xl opacity-15 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle, ${secondaryAccent} 0%, transparent 75%)`,
        }}
      />

      {/* 3. Selective Laptop Ambient Screen Glow (Subtle & Restrained) */}
      <motion.div
        animate={{
          opacity: isNearCursor ? 0.38 : 0.22,
          scale: isNearCursor ? 1.05 : 1.0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-[42%] left-[46%] -translate-x-1/2 -translate-y-1/2 w-[130px] h-[90px] rounded-full blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${accentColor} 0%, rgba(20, 184, 166, 0.3) 45%, transparent 80%)`,
        }}
      />
    </div>
  );
}

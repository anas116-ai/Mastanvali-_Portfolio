"use client";

import { useVariant } from "@/context/VariantContext";
import { motion, AnimatePresence } from "framer-motion";

export function FluidArtBackdrop() {
  const { config, currentVariant } = useVariant();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVariant}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full"
        >
          {/* Base Foundation (Rich Luminous Deep Azure / Navy instead of pitch black) */}
          <div 
            className="absolute inset-0 h-full w-full transition-colors duration-700"
            style={{ backgroundColor: config.baseBgColor }}
          />

          {/* Primary High-Resolution Fluid Art Canvas (High Vibrancy & Luminosity) */}
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center bg-fixed transition-all duration-700"
            style={{
              backgroundImage: `url(${config.imageSrc})`,
              mixBlendMode: config.blendMode as any,
              opacity: config.blendOpacity,
              filter: config.filter,
            }}
          />

          {/* Secondary Atmospheric Glow (Vibrant Azure & Gold Radiance) */}
          <div
            className="absolute inset-0 h-full w-full opacity-45 mix-blend-screen transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse at 25% 20%, ${config.primaryAccent}45 0%, transparent 65%), radial-gradient(ellipse at 75% 75%, ${config.secondaryAccent}40 0%, transparent 65%)`,
            }}
          />

          {/* Soft Fluid Vignette (Gentle and Non-Intrusive, No Heavy Black) */}
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              background: `radial-gradient(ellipse at 50% 40%, transparent 40%, ${config.baseBgColor}50 75%, ${config.baseBgColor}90 100%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

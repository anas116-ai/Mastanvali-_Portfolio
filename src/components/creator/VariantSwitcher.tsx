"use client";

import { useVariant, variantConfigs, VariantType } from "@/context/VariantContext";
import { Check, Palette } from "lucide-react";
import { motion } from "framer-motion";

export function VariantSwitcher() {
  const { currentVariant, setVariant, config } = useVariant();

  const variants: { id: VariantType; label: string; preview: string; tone: string }[] = [
    {
      id: "variant1",
      label: "Option 1 · Azure & Gold",
      preview: "/images/textures/fluid_art_1.jpg",
      tone: "#81D4FA",
    },
    {
      id: "variant2",
      label: "Option 2 · Cosmic Abyss",
      preview: "/images/textures/fluid_art_2.jpg",
      tone: "#ff5252",
    },
    {
      id: "variant3",
      label: "Option 3 · Pastel Dream",
      preview: "/images/textures/fluid_art_3.jpg",
      tone: "#fb923c",
    },
  ];

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center select-none pointer-events-auto max-w-[95vw]">
      <div 
        className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full border shadow-2xl backdrop-blur-2xl transition-colors duration-500"
        style={{
          backgroundColor: "rgba(8, 11, 20, 0.94)",
          borderColor: `${config.primaryAccent}40`,
          boxShadow: `0 10px 40px -5px rgba(0,0,0,0.9), 0 0 25px ${config.primaryGlow}`,
        }}
      >
        {/* Switcher Title / Label Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono font-bold text-[#E3F2FD]">
          <Palette size={13} style={{ color: config.primaryAccent }} />
          <span>FLUID ART THEMES:</span>
        </div>

        {/* 3 Option Buttons */}
        {variants.map((v) => {
          const isActive = currentVariant === v.id;
          return (
            <button
              key={v.id}
              onClick={() => setVariant(v.id)}
              className={`relative flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-300 ${
                isActive
                  ? "text-[#070709]"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeVariantPill"
                  className="absolute inset-0 rounded-full z-0"
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 50%, #E2E8F0 100%)",
                    boxShadow: `0 0 20px ${config.primaryGlow}`,
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}

              {/* Circular fluid art thumbnail */}
              <span
                className="relative z-10 w-4 h-4 rounded-full border border-black/40 bg-cover bg-center shrink-0 shadow-sm"
                style={{ backgroundImage: `url(${v.preview})` }}
              />

              <span className="relative z-10 hidden md:inline">{v.label}</span>
              <span className="relative z-10 md:hidden">{v.id.replace("variant", "Option ")}</span>

              {isActive && <Check size={12} className="relative z-10 text-[#070709] stroke-[3]" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

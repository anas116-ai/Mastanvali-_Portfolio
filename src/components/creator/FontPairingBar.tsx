"use client";

import React from "react";
import { useFontPairing, PAIRING_PRESETS } from "./FontPairingProvider";
import { Check, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";

export function FontPairingBar() {
  const { activePreset, setPreset } = useFontPairing();

  return (
    <aside
      aria-label="Typography Pairing Preview Bar"
      className="sticky top-0 z-50 w-full bg-[#070B14]/95 backdrop-blur-2xl border-b border-white/15 px-4 py-2.5 shadow-2xl transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
        {/* Left: Status & Active Indicator */}
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded bg-[#F47A18]/20 text-[#F47A18] border border-[#F47A18]/30">
            <Palette size={14} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#F3F1E8] uppercase tracking-wider">
                TYPOGRAPHY PAIRING PREVIEW:
              </span>
              <span className="px-2 py-0.5 rounded bg-[#F47A18]/20 text-[#F47A18] border border-[#F47A18]/40 font-bold">
                {activePreset.label}
              </span>
            </div>
            <span className="text-[11px] text-[#B8C4CC]">
              Header: <strong className="text-[#F3F1E8]">{activePreset.headerName}</strong> &bull; Subheader:{" "}
              <strong className="text-[#F3F1E8]">{activePreset.subheaderName}</strong>
            </span>
          </div>
        </div>

        {/* Center: 8 Quick Preset Selector Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {PAIRING_PRESETS.map((preset) => {
            const isSelected = activePreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setPreset(preset.id)}
                className={`px-3 py-1.5 rounded-md border text-[11px] font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#F47A18] text-[#080C14] border-[#F47A18] font-bold shadow-[0_0_12px_rgba(244,122,24,0.45)] scale-105"
                    : "bg-[#0E131E] border-white/10 text-[#B8C4CC] hover:border-white/30 hover:text-[#F3F1E8]"
                }`}
                title={`Header: ${preset.headerName} | Subheader: ${preset.subheaderName}`}
              >
                {isSelected && <Check size={11} className="stroke-[3]" />}
                <span>{preset.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Link to Deep Comparison Lab */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <Link
            href="/font-preview"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#14B8A6] hover:underline whitespace-nowrap"
          >
            <span>Deep Studio</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </aside>
  );
}

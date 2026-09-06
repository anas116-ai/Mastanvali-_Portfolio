"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FlawlessStyleItem {
  id: string;
  number: string;
  name: string;
  category: string;
  clothing: string;
  imageSrc: string;
  accent: string;
}

const flawlessStyles: FlawlessStyleItem[] = [
  {
    id: "style-01",
    number: "STYLE 01",
    name: "Shirt Over Blazer (Open-Collar Dress Shirt + Tailored Blazer)",
    category: "Shirt with Blazer",
    clothing: "Open spread-collar dress shirt under an unbuttoned midnight navy tailored wool blazer. 0% background spill.",
    imageSrc: "/images/avatar/flawless_blazer_styles/style_01_open_shirt_navy_blazer.png",
    accent: "#38bdf8",
  },
  {
    id: "style-02",
    number: "STYLE 02",
    name: "T-Shirt Over Blazer (Matte Black Tech T-Shirt + Tailored Blazer)",
    category: "T-Shirt with Blazer",
    clothing: "Clean matte-black tech crewneck t-shirt under a structured midnight navy blazer. Modern tech executive look.",
    imageSrc: "/images/avatar/flawless_blazer_styles/style_02_tshirt_with_navy_blazer.png",
    accent: "#f47a18",
  },
  {
    id: "style-03",
    number: "STYLE 03",
    name: "All-Black Tech Executive (Obsidian T-Shirt + Charcoal Blazer)",
    category: "T-Shirt with Blazer",
    clothing: "Obsidian black crewneck t-shirt under a deep charcoal tailored sports jacket. Sleek, high-contrast, zero fringe.",
    imageSrc: "/images/avatar/flawless_blazer_styles/style_03_black_tshirt_charcoal_blazer.png",
    accent: "#a78bfa",
  },
  {
    id: "style-04",
    number: "STYLE 04",
    name: "Minimalist Keynote (Black Turtleneck + Tailored Overcoat)",
    category: "Turtleneck + Overcoat",
    clothing: "Fine-gauge black merino turtleneck under a structured minimalist dark overcoat with optical frames.",
    imageSrc: "/images/avatar/flawless_blazer_styles/style_04_black_turtleneck_tailored_overcoat.png",
    accent: "#14B8A6",
  },
  {
    id: "style-05",
    number: "STYLE 05",
    name: "The Iconic 4K Vibe Coder (Matte Black Tech Crewneck + Laptop)",
    category: "Modern Tech Developer",
    clothing: "Ultra-high-definition 4K master character in matte-charcoal developer crewneck with matte black laptop workstation.",
    imageSrc: "/images/avatar/flawless_blazer_styles/style_05_4k_developer_crewneck_laptop.png",
    accent: "#06b6d4",
  },
  {
    id: "style-06",
    number: "COBALT + BROWN PANT",
    name: "Cobalt Blue Tech Crewneck + Tobacco Brown Pants",
    category: "Italian Sprezzatura (Blu e Marrone)",
    clothing: "Deep cobalt blue knitwear paired with rich tobacco brown pants. High-contrast, sophisticated warm-meets-cool harmony.",
    imageSrc: "/images/avatar/test_cobalt_tobacco_brown.png",
    accent: "#b45309",
  },
  {
    id: "style-07",
    number: "COBALT + OBSIDIAN PANT",
    name: "Cobalt Blue Tech Crewneck + Obsidian Dark Pants",
    category: "Modern Tech Monolith",
    clothing: "Deep cobalt blue knitwear paired with deep obsidian black pants.",
    imageSrc: "/images/avatar/transparent_collection/style_21_cobalt_tech_crewneck.png",
    accent: "#2563eb",
  },
];

export default function AvatarPreviewPage() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#060a14] text-[#f1f5f9] p-6 sm:p-12 font-sans selection:bg-[#f47a18]/30">
      {/* Top Header */}
      <div className="max-w-6xl mx-auto border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>Flawless Smart-Casual &bull; 0% Background Color Spill</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Shirt with Blazer &bull; T-Shirt with Blazer Collection
          </h1>
          <p className="text-sm sm:text-base text-white/60 mt-1 max-w-3xl font-light">
            Exact same 3D Mastan Vali character with <strong>zero background bleed, zero edge halos, and 100% crisp fabric shading</strong>. Featuring modern smart-casual dressing (T-Shirt + Blazer, Open Shirt + Blazer, Charcoal Executive).
          </p>
        </div>

        {selectedStyle && (
          <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/50 text-emerald-300 font-mono text-xs flex items-center gap-2 animate-pulse">
            <span>Selected: <strong>{selectedStyle}</strong></span>
          </div>
        )}
      </div>

      {/* Grid of 5 Flawless Smart-Casual Styles */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {flawlessStyles.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedStyle(item.number)}
            className={`group rounded-2xl border bg-[#090e1c] overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              selectedStyle === item.number
                ? "border-emerald-400 shadow-[0_0_35px_rgba(52,211,153,0.4)] scale-[1.03]"
                : "border-white/10 hover:border-[#38bdf8]/60 hover:shadow-2xl"
            }`}
          >
            {/* Image Box on Clean Luxury Dark Gradient */}
            <div className="relative w-full aspect-square bg-gradient-to-b from-[#0e1628] to-[#070b16] overflow-hidden flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>

              {/* Number Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#f47a18] text-slate-950 text-xs font-mono font-black shadow-lg">
                {item.number}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white shadow-md">
                {item.category}
              </div>

              {/* Quality Guarantee */}
              <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-mono font-bold">
                0% SPILL &check;
              </div>
            </div>

            {/* Details */}
            <div className="p-5 space-y-2.5 border-t border-white/10 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-snug">
                  {item.name}
                </h2>
                <p className="text-xs text-white/60 font-light leading-relaxed mt-1.5">
                  {item.clothing}
                </p>
              </div>

              {/* Select Button */}
              <button
                type="button"
                className={`w-full mt-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                  selectedStyle === item.number
                    ? "bg-emerald-400 text-slate-950 shadow-md"
                    : "bg-white/5 hover:bg-[#38bdf8] text-white hover:text-slate-950 border border-white/10"
                }`}
              >
                {selectedStyle === item.number ? "✓ Selected (Reply in Chat)" : `Select ${item.number}`}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

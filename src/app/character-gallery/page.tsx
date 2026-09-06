"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Laptop, Shield, Bot, Flame } from "lucide-react";

const pixarOptions = [
  {
    id: "01",
    title: "01. Haute-Tech Tailored Blazer & Laptop with Code",
    desc: "Tailored Midnight Navy blazer + Vibrant Cyan inner tee + Charcoal trousers + Designer white/cyan sneakers. Typing on open laptop with floating glowing holographic code particles.",
    image: "/images/avatar/pixar_style_01_tech_laptop.jpg",
    category: "Developer Architect",
    badge: "Most Recommended",
  },
  {
    id: "02",
    title: "02. Silicon Valley Tech Hoodie & Wink",
    desc: "Midnight navy zip-up hoodie + Teal tee + Slim jeans + Designer sneakers. Laptop tucked under arm with friendly winking smile.",
    image: "/images/avatar/pixar_style_02_tech_hoodie.jpg",
    category: "Vibe Coder Casual",
    badge: "Smart Casual",
  },
  {
    id: "03",
    title: "03. Executive Tech Turtleneck (Power Folded Arms)",
    desc: "Navy turtleneck + Textured charcoal tailored blazer + Dark trousers + Leather chelsea boots. Authoritative, confident senior stance.",
    image: "/images/avatar/pixar_style_03_turtleneck.jpg",
    category: "Executive Tech",
    badge: "Executive",
  },
  {
    id: "04",
    title: "04. AI Data Pipeline & Floating Holographic HUD",
    desc: "Navy bomber + Cyan tee. Standing interacting with glowing 3D neural network HUDs and dynamic data pipeline architecture in mid-air.",
    image: "/images/avatar/pixar_style_04_ai_hologram.jpg",
    category: "AI & Data Engineer",
    badge: "Futuristic",
  },
  {
    id: "05",
    title: "05. Seated on Glowing Neon-Cyan Tech Cube",
    desc: "Charcoal tech jacket + Cyan tee. Seated comfortably on a glowing geometric circuit pedestal with open laptop on lap.",
    image: "/images/avatar/pixar_style_05_seated_cube.jpg",
    category: "3D Spatial Interactive",
    badge: "Unique 3D",
  },
  {
    id: "06",
    title: "06. Friendly Welcoming Wave Greeting",
    desc: "Navy lightweight jacket + Cyan crewneck + Dark trousers. Welcoming right-hand waving greeting pose to greet website visitors.",
    image: "/images/avatar/pixar_style_06_waving_greeting.jpg",
    category: "Interactive Greeting",
    badge: "Friendly",
  },
  {
    id: "07",
    title: "07. Solutions Architect with Glowing Tablet",
    desc: "Navy blazer + Amber-orange circuit graphic tee. Holding translucent digital glass tablet showing live analytics charts.",
    image: "/images/avatar/pixar_style_07_smart_tablet.jpg",
    category: "Solutions Architect",
    badge: "Data Metrics",
  },
  {
    id: "08",
    title: "08. Modern Tech Bomber (Hand-in-Pocket)",
    desc: "Charcoal bomber + Cyan tee + Navy trousers. Relaxed, confident standing pose with hand in pocket.",
    image: "/images/avatar/pixar_style_08_bomber_standing.jpg",
    category: "Modern Casual",
    badge: "Confident",
  },
  {
    id: "09",
    title: "09. Urban Streetwear Matte Puffer Jacket",
    desc: "Matte charcoal-navy puffer jacket + Cargo joggers + Tech sneakers. Conversational hand gesture.",
    image: "/images/avatar/pixar_style_09_puffer_jacket.jpg",
    category: "Streetwear Tech",
    badge: "Urban",
  },
  {
    id: "10",
    title: "10. Creative Dev with Denim & Steaming Coffee",
    desc: "Indigo denim jacket + Teal graphic circuit tee + Dark jeans. Holding steaming reusable coffee tumbler.",
    image: "/images/avatar/pixar_style_10_denim_coffee.jpg",
    category: "Creative Builder",
    badge: "Coffee & Code",
  },
  {
    id: "11",
    title: "11. High-Energy Thumbs Up Success Pose",
    desc: "Two-tone navy/charcoal sport jacket + Cyan tee. Cheerful thumbs up with glowing circuit background elements.",
    image: "/images/avatar/pixar_style_11_thumbs_up.jpg",
    category: "Success Vibe",
    badge: "High Energy",
  },
  {
    id: "12",
    title: "12. Dual Cyan & Orange Data Streams with Laptop",
    desc: "Charcoal bomber + Cyan tee. Dual cyan/orange holographic data stream particles floating above open laptop.",
    image: "/images/avatar/pixar_style_12_dual_stream_laptop.jpg",
    category: "Data Stream",
    badge: "Dual Accent",
  },
];

export default function CharacterGalleryPage() {
  const [selectedId, setSelectedId] = useState("01");

  return (
    <div className="min-h-screen bg-[#050914] text-[#F3F1E8] p-6 sm:p-10 md:p-14 font-[family-name:var(--font-outfit)]">
      {/* Header */}
      <div className="max-w-7xl mx-auto space-y-6 mb-12">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#B8C4CC] hover:text-[#14B8A6] px-4 py-2 rounded-full bg-white/[0.04] border border-[rgba(100,210,225,0.16)] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/20">
            12 FULL-BODY DISNEY PIXAR STYLES
          </span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F3F1E8]">
            Select Your 3D Disney Pixar Character
          </h1>
          <p className="text-[#B8C4CC] max-w-3xl text-sm sm:text-base leading-relaxed mt-2 font-[family-name:var(--font-plus-jakarta)]">
            All 12 full-body (head-to-toe) character styles rendered in 3D Disney Pixar animation style with outfits and lighting tailored to your portfolio's <strong className="text-[#14B8A6]">Midnight Navy, Oceanic Cyan (#14B8A6), and Warm Orange (#F47A18)</strong> color palette. Click on any style to inspect it!
          </p>
        </div>
      </div>

      {/* Grid of 12 Styles */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pixarOptions.map((opt) => {
          const isSelected = selectedId === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => setSelectedId(opt.id)}
              className={`group relative rounded-3xl overflow-hidden border p-4 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "bg-[#0B1B28] border-[#14B8A6] shadow-[0_0_35px_rgba(20, 184, 166, 0.35)] scale-[1.02]"
                  : "bg-[#08131D]/85 border-[rgba(100,210,225,0.14)] hover:border-[rgba(100,210,225,0.35)] hover:bg-[#0B1B28]"
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black/80 mb-4 border border-[rgba(100,210,225,0.1)]">
                <img
                  src={opt.image}
                  alt={opt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#14B8A6] font-bold">
                  {opt.badge}
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-1.5 flex-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#14B8A6] font-semibold">
                  {opt.category}
                </div>
                <h3 className="font-bold text-sm text-[#F3F1E8] leading-snug">
                  {opt.title}
                </h3>
                <p className="text-xs text-[#B8C4CC] leading-relaxed font-light font-[family-name:var(--font-plus-jakarta)] line-clamp-3">
                  {opt.desc}
                </p>
              </div>

              {/* Select Button */}
              <div className="mt-4 pt-3 border-t border-[rgba(100,210,225,0.12)] flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#F3F1E8]">
                  Style {opt.id}
                </span>
                <button
                  className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isSelected
                      ? "bg-[#14B8A6] text-[#050914] shadow-md"
                      : "bg-white/[0.06] text-[#B8C4CC] group-hover:bg-[#14B8A6]/20 group-hover:text-[#14B8A6]"
                  }`}
                >
                  {isSelected && <Check size={13} className="stroke-[3]" />}
                  <span>{isSelected ? "Selected" : "Choose Style"}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

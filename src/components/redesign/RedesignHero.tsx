"use client";

import React from "react";
import { motion } from "framer-motion";
import { CharacterController } from "./character/CharacterController";
import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";

export function RedesignHero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] sm:min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#050505] px-5 sm:px-8 md:px-12 lg:px-16 pt-24 pb-16 select-none"
    >
      {/* --- ATMOSPHERIC LIGHT ARCHITECTURE --- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Ambient Teal Backlight (Right Hemisphere) */}
        <div
          className="absolute -top-24 right-[-5%] h-[680px] w-[750px] rounded-full blur-[180px] opacity-15"
          style={{
            background: "radial-gradient(circle, #14B8A6 0%, #042F2E 50%, transparent 75%)",
          }}
        />

        {/* Restrained Solar Amber Atmospheric Glow (Left Background) */}
        <div
          className="absolute top-[30%] -left-[10%] h-[550px] w-[600px] rounded-full blur-[170px] opacity-10"
          style={{
            background: "radial-gradient(circle, #F47A18 0%, #451A03 50%, transparent 75%)",
          }}
        />

        {/* Studio Floor Soft Falloff */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      {/* --- ASYMMETRIC CINEMATIC COMPOSITION --- */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10 my-auto">
        {/* Left 7 Columns: Editorial Typographic Anchor */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-xs sm:text-sm font-mono tracking-[0.25em] text-[#A8B8C4] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
            <span>SOFTWARE ENGINEER &bull; ENTERPRISE DATA &bull; AI SYSTEMS</span>
          </motion.div>

          {/* Master Name: Unmistakable Visual Authority */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1"
          >
            <h1 className="font-warpaint text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[8rem] uppercase text-[#F3F1E8] tracking-[0.06em] leading-[0.85] select-none drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
              MASTAN VALI
            </h1>
          </motion.div>

          {/* Positioning Line: Two Clear Focus Disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-josefin)] flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base md:text-lg font-semibold tracking-wider text-[#E2E8F0] uppercase"
          >
            <span className="text-[#F3F1E8]">SAP BODS &bull; DATA ENGINEERING</span>
            <span className="text-white/25">/</span>
            <span className="text-[#14B8A6]">AI SYSTEMS &bull; PRODUCT BUILDING</span>
          </motion.div>

          {/* Grounded Narrative Copy (No Buzzwords, Pure Truth) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pl-5 border-l border-[#14B8A6]/40 space-y-2 max-w-2xl"
          >
            <p className="text-[#E2E8F0] text-sm sm:text-base md:text-[1.05rem] font-normal leading-relaxed font-[family-name:var(--font-sans)]">
              Enterprise data background handling ETL pipelines and production support at <strong className="text-white font-medium">VHS Consulting (Client: TCS / Grainger)</strong> with 99.98% SLA discipline.
            </p>
            <p className="text-[#A8B8C4] text-xs sm:text-sm md:text-base font-light leading-relaxed font-[family-name:var(--font-sans)]">
              Now channeling that rigorous system thinking into software products: autonomous multi-agent orchestration (<span className="text-[#F3F1E8] font-medium">AnsiQ</span>), offline-first distribution ERP (<span className="text-[#F3F1E8] font-medium">AnPharmacy</span>), and full-stack AI web applications.
            </p>
          </motion.div>

          {/* Tactile Actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#F3F1E8] text-[#050505] hover:bg-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-[#14B8A6]/20 transition-all duration-200"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown size={14} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-[#F3F1E8] border border-white/10 font-mono text-xs font-medium uppercase tracking-wider transition-all duration-200"
            >
              <span>CONTACT ME</span>
            </a>

            <div className="flex items-center gap-2 pl-2 text-xs font-mono text-[#A8B8C4]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Relocation &bull; Immediate</span>
            </div>
          </motion.div>
        </div>

        {/* Right 5 Columns: 2.5D Cinematic Character Subject */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative min-h-[460px] sm:min-h-[520px] md:min-h-[580px]">
          <CharacterController />
        </div>
      </div>
    </section>
  );
}

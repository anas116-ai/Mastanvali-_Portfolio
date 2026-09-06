"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { ArrowDown, Github, Terminal, Sparkles, Database, Bot, ArrowUpRight, Award, ShieldCheck, Code } from "lucide-react";

export function SpatialHero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-20">
      {/* Corner HUD Telemetry Reticles */}
      <div className="absolute top-24 left-8 font-mono text-[10px] text-cyan-400/40 hidden md:block select-none">
        [SPATIAL_SECTOR // 001_ALPHA]
      </div>
      <div className="absolute top-24 right-8 font-mono text-[10px] text-purple-400/40 hidden md:block select-none">
        [SYS_STATUS // 3D_MATRIX_ONLINE]
      </div>
      <div className="absolute bottom-12 left-8 font-mono text-[10px] text-slate-600 hidden md:block select-none">
        LAT: 16.3067° N // LNG: 80.4365° E
      </div>
      <div className="absolute bottom-12 right-8 font-mono text-[10px] text-emerald-400/40 hidden md:block select-none">
        [DATAFLOW // 0.00% DRIFT]
      </div>

      <div className="container-portfolio relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl w-full flex flex-col items-center"
        >
          {/* Availability Capsule */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-glow border-[var(--color-accent)]/30 mb-8 shadow-[0_0_25px_rgba(0,240,255,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-neon-green)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-neon-green)]" />
            </span>
            <span className="font-mono text-[11px] font-bold tracking-widest text-slate-200 uppercase">
              SAP BODS ARCHITECT &bull; AI VIBE CODER
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-display-giant text-white font-extrabold tracking-tighter mb-4 text-glow-cyan"
          >
            SHAIK MASTAN VALI
          </motion.h1>

          {/* Tri-Identity Holographic System */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 my-6 font-mono text-xs md:text-sm tracking-wider uppercase"
          >
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 border border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <Database size={15} className="text-[var(--color-accent)] animate-pulse" />
              <span className="font-bold">ENTERPRISE DATA & SAP</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(20, 184, 166, 0.15)]">
              <Bot size={15} className="text-purple-400" />
              <span className="font-bold">AI MULTI-AGENT SWARMS</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 border border-emerald-500/30 text-emerald-300 shadow-[0_0_15px_rgba(0,255,157,0.15)]">
              <Sparkles size={15} className="text-[var(--color-neon-green)]" />
              <span className="font-bold">DESKTOP & WEB BUILDER</span>
            </div>
          </motion.div>

          {/* Positioning Description */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-2xl text-slate-300 max-w-3xl mb-10 font-light leading-relaxed tracking-wide"
          >
            Engineering <span className="text-white font-semibold underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">enterprise ETL data pipelines</span> with zero data loss, and building <span className="text-white font-semibold underline decoration-purple-400 decoration-2 underline-offset-4">autonomous AI software systems</span>.
          </motion.p>

          {/* Stats 3-Column Grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl w-full mb-12 p-4 rounded-2xl glass-panel border-white/10"
          >
            <div className="text-center">
              <div className="font-mono text-xl md:text-3xl font-extrabold text-white">
                1+ <span className="text-[var(--color-accent)] text-base font-normal">Yrs</span>
              </div>
              <div className="font-mono text-[10px] md:text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Enterprise Data
              </div>
            </div>

            <div className="text-center border-x border-white/10">
              <div className="font-mono text-xl md:text-3xl font-extrabold text-purple-400">
                7+ <span className="text-white text-base font-normal">Repos</span>
              </div>
              <div className="font-mono text-[10px] md:text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Shipped Systems
              </div>
            </div>

            <div className="text-center">
              <div className="font-mono text-xl md:text-3xl font-extrabold text-[var(--color-neon-green)]">
                100%
              </div>
              <div className="font-mono text-[10px] md:text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Verified Code
              </div>
            </div>
          </motion.div>

          {/* Interactive CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#work"
              className="relative group overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-accent)] via-cyan-400 to-blue-500 text-black font-extrabold text-sm tracking-wider uppercase transition-all shadow-[0_0_35px_rgba(0,240,255,0.4)] hover:shadow-[0_0_60px_rgba(0,240,255,0.7)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Terminal size={16} />
                EXPLORE FLAGSHIP WORK
                <ArrowUpRight size={15} />
              </span>
              <div className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl glass-panel text-white font-bold text-sm tracking-wider uppercase border-white/15 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all flex items-center gap-2.5 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <Github size={16} className="text-slate-300 group-hover:text-[var(--color-accent)] transition-colors" />
              <span>GITHUB REPOSITORIES</span>
            </a>
          </motion.div>

          {/* Tech Chips */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2 max-w-3xl opacity-85"
          >
            {[
              "SAP BODS 4.3",
              "SAP HANA & BW",
              "SQL Server / T-SQL",
              "Multi-Agent Orchestration",
              "Python & FastAPI",
              "Electron Desktop ERP",
              "Next.js 15 & TypeScript",
              "Offline SQLite & OCR",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 font-mono text-[10px] text-slate-300 rounded-md bg-white/[0.04] border border-white/10"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 z-10 pointer-events-none"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400/70">
          SCROLL TO INITIALIZE MATRIX
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-[var(--color-accent)] animate-bounce" />
      </motion.div>
    </section>
  );
}

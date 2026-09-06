"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { ArrowDown, Github, Terminal, Sparkles, Database, Bot } from "lucide-react";
import { SceneFallback } from "./SceneFallback";

const CyberCoreScene = dynamic(
  () =>
    import("@/components/scene/CyberCoreScene").then(
      (mod) => mod.CyberCoreScene
    ),
  {
    ssr: false,
    loading: () => <SceneFallback />,
  }
);

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-[#030305] pt-24 pb-16">
      {/* 3D WebGL Cyber Core Reactor with SSR: false */}
      <CyberCoreScene />

      {/* Cyber Grid Background Matrix */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Main HUD Hero Content */}
      <div className="container-portfolio relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl w-full flex flex-col items-center"
        >
          {/* Top Status Capsule */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border-[var(--color-accent)]/30 mb-8 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-neon-green)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-neon-green)]" />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-widest text-slate-300 uppercase">
              ENTERPRISE DATA ARCHITECT &bull; AI VIBE CODER
            </span>
          </motion.div>

          {/* Massive Kinetic Hero Title */}
          <motion.h1
            variants={fadeUp}
            className="text-display-giant text-white font-extrabold tracking-tighter mb-4 text-glow-cyan"
          >
            SHAIK MASTAN VALI
          </motion.h1>

          {/* Cybernetic Tri-Identity Positioning */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 my-6 font-mono text-xs md:text-sm tracking-wider uppercase"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300">
              <Database size={14} className="text-[var(--color-accent)]" />
              <span>SAP BODS / ETL</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-purple-300">
              <Bot size={14} className="text-purple-400" />
              <span>AI AGENT ORCHESTRATION</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-emerald-300">
              <Sparkles size={14} className="text-[var(--color-neon-green)]" />
              <span>REAL-WORLD BUILDER</span>
            </div>
          </motion.div>

          {/* Supporting Statement */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-2xl text-slate-300 max-w-3xl mb-12 font-light leading-relaxed tracking-wide"
          >
            Bridging the gap between{" "}
            <span className="text-white font-medium underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
              mission-critical enterprise data pipelines
            </span>{" "}
            and{" "}
            <span className="text-white font-medium underline decoration-[var(--color-neon-purple)] decoration-2 underline-offset-4">
              autonomous AI-assisted software systems
            </span>
            .
          </motion.p>

          {/* Interactive CTAs with Cyber Button Styling */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a
              href="#work"
              className="relative group overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dim)] text-black font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Terminal size={16} />
                EXPLORE MY WORK
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl glass-panel text-white font-bold text-sm tracking-wider uppercase border-white/15 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all flex items-center gap-2.5"
            >
              <Github
                size={16}
                className="text-slate-300 group-hover:text-[var(--color-accent)] transition-colors"
              />
              <span>GITHUB REPOSITORIES</span>
            </a>
          </motion.div>

          {/* Tech Matrix Chips */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2 max-w-2xl opacity-80"
          >
            {[
              "SAP BODS 4.3",
              "SAP HANA / BW",
              "SQL Server",
              "Multi-Agent Orchestration",
              "FastAPI / Python",
              "Electron Desktop",
              "Next.js & TypeScript",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 font-mono text-[10px] text-slate-400 rounded-md bg-white/[0.03] border border-white/10"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Target Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 z-10 pointer-events-none"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
          SCROLL TO INITIALIZE MATRIX
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-[var(--color-accent)] animate-bounce" />
      </motion.div>
    </section>
  );
}

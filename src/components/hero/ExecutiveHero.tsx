"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { ArrowDown, Github, ArrowUpRight, FileText, Sparkles, Zap, Code2 } from "lucide-react";

// Dynamic 3D WebGL Canvas
const RefinedScene3D = dynamic(
  () => import("@/components/scene/RefinedScene3D").then((m) => m.RefinedScene3D),
  { ssr: false }
);

export function ExecutiveHero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16">
      {/* 3D WebGL Canvas Background */}
      <RefinedScene3D />

      {/* Ambient glow spots */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-portfolio relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full flex flex-col items-center"
        >
          {/* Availability Pill â enhanced with glow */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(20, 184, 166, 0.08)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(20, 184, 166, 0.6)]" />
            </span>
            <span className="text-xs font-medium text-slate-300 tracking-wide">
              Available for Opportunities &bull; Immediate Joiner
            </span>
          </motion.div>

          {/* Name Display â massive, gradient, text-balance */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 text-balance leading-[0.95]"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #A8B8C4 60%, #475569 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Shaik Mastan
            <br />
            Vali
          </motion.h1>

          {/* Subtitle â cleaner positioning */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 text-lg sm:text-2xl font-medium text-slate-300 mb-8 tracking-tight"
          >
            <span className="flex items-center gap-2">
              <Zap size={18} className="text-emerald-400" />
              SAP BODS Developer
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="flex items-center gap-2">
              <Sparkles size={18} className="text-blue-400" />
              AI Builder
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="flex items-center gap-2">
              <Code2 size={18} className="text-purple-400" />
              Vibe Coder
            </span>
          </motion.div>

          {/* Narrative â refined text */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed font-normal"
          >
            Enterprise data experience with <strong className="text-white font-medium">SAP BODS 4.3</strong>, large-scale ETL pipelines, and SQL. Building production-grade desktop ERPs, multi-agent frameworks, and full-stack software with AI acceleration.
          </motion.p>

          {/* Action CTAs â polished with glow effects */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a
              href="#work"
              className="group px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#121216]/80 hover:bg-[#1c1c22] border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <Github size={16} />
              <span>GitHub Repositories</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/15 text-slate-300 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Stats Strip â enhanced with subtle gradient */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-8 max-w-lg w-full p-5 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] backdrop-blur-md"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                1+ <span className="text-xs font-normal text-slate-500">Yr</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-medium">
                Enterprise Data
              </div>
            </div>

            <div className="text-center border-x border-white/[0.08]">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                7+
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-medium">
                Shipped Repos
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "#14B8A6" }}>
                100%
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-medium">
                Verified Code
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down â animated */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] text-slate-500 tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

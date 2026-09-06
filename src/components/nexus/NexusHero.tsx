"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Database, Bot, Sparkles, ArrowDown, Github, Terminal, ArrowUpRight } from "lucide-react";

export function NexusHero() {
  return (
    <section id="top" className="nexus-episode overflow-hidden">
      <div className="container-portfolio relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl w-full flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="nexus-eyebrow mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
            <span>SAP BODS ARCHITECT &middot; AI VIBE CODER</span>
          </motion.div>

          {/* Giant masked display name */}
          <h1 className="text-[clamp(2.8rem,12vw,9.5rem)] font-space font-bold leading-[0.92] tracking-[-0.035em] text-white">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="block"
              >
                SHAIK
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                className="block bg-gradient-to-r from-[#00f0ff] via-[#14B8A6] to-[#14B8A6] bg-clip-text text-transparent"
              >
                MASTAN VALI
              </motion.span>
            </span>
          </h1>

          {/* Tri-identity */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 my-8 font-mono text-[11px] md:text-sm tracking-wider uppercase"
          >
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/50 border border-cyan-500/30 text-cyan-300">
              <Database size={15} className="text-cyan-400" />
              <span className="font-bold">Enterprise Data &amp; SAP</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">&middot;</span>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/50 border border-purple-500/30 text-purple-300">
              <Bot size={15} className="text-purple-400" />
              <span className="font-bold">AI Multi-Agent Swarms</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">&middot;</span>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/50 border border-emerald-500/30 text-emerald-300">
              <Sparkles size={15} className="text-[#00ff9d]" />
              <span className="font-bold">Desktop &amp; Web Builder</span>
            </div>
          </motion.div>

          {/* Positioning */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-slate-300 max-w-3xl mb-10 font-light leading-relaxed"
          >
            Engineering{" "}
            <span className="text-white font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4">
              enterprise ETL data pipelines
            </span>{" "}
            with zero data loss &mdash; and building{" "}
            <span className="text-white font-semibold underline decoration-purple-400 decoration-2 underline-offset-4">
              autonomous AI software systems
            </span>
            .
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#pipeline"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#14B8A6] to-[#14B8A6] text-black font-bold text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(0,240,255,0.35)] hover:shadow-[0_0_60px_rgba(0,240,255,0.6)] hover:scale-[1.03] transition-all inline-flex items-center gap-2"
            >
              <Terminal size={16} />
              ENTER THE NEXUS
              <ArrowUpRight size={15} />
            </a>
            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl nexus-panel text-white font-bold text-sm tracking-wider uppercase border-white/15 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all inline-flex items-center gap-2.5"
            >
              <Github size={16} className="text-slate-300" />
              GITHUB REPOS
            </a>
          </motion.div>

          {/* Tech chips */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2 max-w-3xl"
          >
            {[
              "SAP BODS 4.3",
              "SAP HANA &amp; BW",
              "SQL Server / T-SQL",
              "Multi-Agent Orchestration",
              "Python &amp; FastAPI",
              "Electron Desktop ERP",
              "Next.js 15 &amp; TypeScript",
              "Offline SQLite &amp; OCR",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 font-mono text-[10px] text-slate-300 rounded-md bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 hover:text-cyan-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl w-full mt-12 p-5 rounded-2xl nexus-panel border-white/10"
          >
            <div className="text-center">
              <div className="font-mono text-xl md:text-3xl font-extrabold text-white">
                1+ <span className="text-cyan-400 text-base font-normal">Yrs</span>
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
              <div className="font-mono text-xl md:text-3xl font-extrabold text-[#00ff9d]">
                100%
              </div>
              <div className="font-mono text-[10px] md:text-xs text-slate-400 mt-1 uppercase tracking-wider">
                Verified Code
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 pointer-events-none z-10"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400/70">
          SCROLL TO TRAVERSE THE NEXUS
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
      </motion.div>
    </section>
  );
}

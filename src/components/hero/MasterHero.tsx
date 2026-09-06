"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import {
  Terminal,
  Volume2,
  VolumeX,
  ArrowUpRight,
  Laptop,
  UserCheck,
  FileText,
  Github,
  Database,
  Bot,
  Sparkles,
} from "lucide-react";

// Dynamic 3D Studio Scene
const Master3DStudioScene = dynamic(
  () => import("@/components/scene/Master3DStudioScene").then((m) => m.Master3DStudioScene),
  { ssr: false }
);

export function MasterHero() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Procedural Web Audio Key Click
  const playMechanicalClick = () => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440 + Math.random() * 200, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      // Audio context fallback
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-20">
      {/* 3D Master Studio Scene */}
      <Master3DStudioScene />

      {/* Floating Audio & Interactive Control */}
      <div className="absolute top-24 right-6 sm:right-12 z-20 flex items-center gap-2 p-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl">
        <div className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-blue-400">
          <UserCheck size={13} className="text-emerald-400" />
          <span className="hidden sm:inline">3D WORKSPACE LIVE</span>
        </div>

        <div className="w-[1px] h-4 bg-white/10 mx-1" />

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-1.5 rounded-full transition-colors flex items-center gap-1.5 text-xs font-mono px-2.5 ${
            soundEnabled ? "text-emerald-400 bg-emerald-500/10" : "text-slate-400 hover:text-white"
          }`}
          title={soundEnabled ? "Mute Audio" : "Enable Audio"}
        >
          {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
          <span className="hidden md:inline">{soundEnabled ? "AUDIO ON" : "AUDIO OFF"}</span>
        </button>
      </div>

      <div className="container-portfolio relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full flex flex-col items-center"
        >
          {/* Live Studio Status Pill */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs font-semibold text-slate-200">
              AVAILABLE FOR OPPORTUNITIES &bull; IMMEDIATE JOINER
            </span>
          </motion.div>

          {/* Master Name Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 gradient-heading"
          >
            Shaik Mastan Vali
          </motion.h1>

          {/* Subtitle Definition */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-sm sm:text-xl font-medium text-slate-300 mb-6 font-mono"
          >
            <span className="text-blue-400 font-bold">SAP BODS ARCHITECT</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-purple-400 font-bold">AI PRODUCT BUILDER</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-emerald-400 font-bold">VIBE CODER</span>
          </motion.div>

          {/* Human Vibe Coder Narrative */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-light"
          >
            Enterprise data experience with <strong className="text-white font-medium">SAP BODS 4.3</strong>, large-scale ETL pipelines, and SQL at <strong className="text-white font-medium">TCS / Grainger</strong>. Building modern full-stack software and autonomous multi-agent systems with AI acceleration.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <a
              href="#playground"
              onClick={playMechanicalClick}
              className="px-7 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105"
            >
              <Terminal size={16} />
              <span>TEST LIVE VIBE PLAYGROUND</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#work"
              onClick={playMechanicalClick}
              className="px-7 py-4 rounded-xl bg-black/60 hover:bg-white/10 border border-white/15 text-white font-bold text-sm transition-all flex items-center gap-2 backdrop-blur-xl"
            >
              <Laptop size={16} className="text-blue-400" />
              <span>EXPLORE SHIPPED SOFTWARE</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>RESUME</span>
            </a>
          </motion.div>

          {/* Vibe Coder Battle-Station Telemetry */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl text-left"
          >
            <div className="p-3 rounded-xl bg-white/[0.02]">
              <div className="text-[10px] font-mono uppercase text-slate-500">Core Discipline</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">Enterprise SAP ETL</div>
              <div className="text-[10px] text-slate-400">VHS Consulting / TCS</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02]">
              <div className="text-[10px] font-mono uppercase text-slate-500">AI Superpower</div>
              <div className="text-xs sm:text-sm font-bold text-purple-400 mt-1">Multi-Agent DAGs</div>
              <div className="text-[10px] text-slate-400">AnsiQ Python Framework</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02]">
              <div className="text-[10px] font-mono uppercase text-slate-500">Shipped Stack</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-1">Electron + SQLite</div>
              <div className="text-[10px] text-slate-400">AnPharmacy ERP</div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02]">
              <div className="text-[10px] font-mono uppercase text-slate-500">Availability</div>
              <div className="text-xs sm:text-sm font-bold text-blue-400 mt-1">Immediate Joiner</div>
              <div className="text-[10px] text-slate-400">Open to Relocation</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { V2CharacterRig } from "../character/V2CharacterRig";
import { Database, Bot, ArrowDown, Terminal } from "lucide-react";

export function V2Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const characterY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050914] text-[#F3F1E8] select-none pt-20 sm:pt-24 pb-10 px-5 sm:px-8 md:px-12 lg:px-16 font-[family-name:var(--font-outfit)]"
    >
      {/* 1. ATMOSPHERIC FLUID MARBLE & DEEP NEBULA BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center opacity-35"
          style={{
            backgroundImage: "url('/images/textures/fluid_art_1.jpg')",
            mixBlendMode: "screen",
            filter: "contrast(115%) saturate(125%) brightness(90%)",
          }}
        />
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(8, 19, 29, 0.4) 0%, rgba(5, 9, 20, 0.88) 65%, #050914 98%)",
          }}
        />
        <div
          className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[650px] w-[1100px] rounded-full blur-[170px] opacity-28"
          style={{
            background: "radial-gradient(circle, #14B8A6 0%, #0B2028 50%, transparent 80%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#050914] via-[#050914]/80 to-transparent" />
      </div>

      {/* Subtle Studio Dot Grid Matrix */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(100,210,225,0.07)_1px,transparent_1px)] [background-size:32px_32px] opacity-35 z-0" />

      {/* 2. MAIN EDITORIAL HERO GRID */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-20 my-auto py-6"
      >
        {/* Left Column (7 Cols): Editorial Identity & Story */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-20">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/25 shadow-sm"
          >
            <Terminal size={12} className="text-[#14B8A6]" />
            <span>[ 00 // AUTONOMOUS AI &amp; DATA ENGINEER ]</span>
          </motion.div>

          {/* Primary Headline with Warpaint.ttf and Single Cohesive Platinum Color */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-1.5"
          >
            <div className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-[0.24em] text-[#14B8A6] uppercase">
              HELLO, I&apos;M
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] uppercase leading-[1.02] text-[#F3F1E8] tracking-[0.04em] drop-shadow-[0_4px_35px_rgba(20, 184, 166, 0.22)] select-none"
              style={{
                fontFamily: "'Warpaint', -apple-system, sans-serif",
              }}
            >
              MASTAN VALI
            </h1>
          </motion.div>

          {/* Dual Identity Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full p-4 sm:p-5 rounded-2xl border border-[rgba(100,210,225,0.16)] bg-[#08131D]/80 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#14B8A6]/12 text-[#14B8A6] border border-[#14B8A6]/30">
                <Database size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#B8C4CC]">Enterprise Domain</div>
                <div className="font-extrabold text-sm sm:text-base text-[#F3F1E8] uppercase tracking-wider">
                  SAP BODS DEVELOPER
                </div>
              </div>
            </div>

            <div className="h-8 w-px bg-[rgba(100,210,225,0.16)] hidden sm:block" />

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F47A18]/12 text-[#F47A18] border border-[#F47A18]/30">
                <Bot size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#B8C4CC]">Modern Craft</div>
                <div className="font-extrabold text-sm sm:text-base text-[#F3F1E8] uppercase tracking-wider">
                  AI VIBE CODER
                </div>
              </div>
            </div>
          </motion.div>

          {/* Verified Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-[#B8C4CC] text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl font-[family-name:var(--font-plus-jakarta)]">
              Enterprise ETL Data Integration at <strong className="text-[#F3F1E8] font-semibold">TCS / Grainger</strong> &bull; Multi-Agent Orchestration Frameworks &amp; Modern High-Performance Software Development.
            </p>
          </motion.div>

          {/* CTAs & Key Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#14B8A6] text-[#050914] font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#38BDF8] shadow-[0_0_24px_rgba(20, 184, 166, 0.35)] transition-all duration-300 hover:scale-105"
            >
              <span>Explore Selected Work</span>
              <ArrowDown size={14} className="stroke-[2.5]" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F3F1E8] bg-[#08131D]/80 hover:bg-[#0B1B28] border-[rgba(100,210,225,0.2)] hover:border-[#14B8A6] transition-all duration-300 shadow-sm"
            >
              <span>Contact Directly</span>
            </a>

            <div className="flex items-center gap-2 pl-2 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
              <span className="font-semibold tracking-wider uppercase text-[#14B8A6]">
                Immediate Joiner &bull; Open to Relocation
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column (5 Cols): Three.js 3D WebGL Mastan Vali Character */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-end relative min-h-[460px] sm:min-h-[520px] md:min-h-[580px]">
          <motion.div
            style={{ y: characterY }}
            className="w-[220px] sm:w-[270px] md:w-[310px] lg:w-[345px] flex justify-center items-end pointer-events-auto"
          >
            <V2CharacterRig />
          </motion.div>
        </div>
      </motion.div>

      {/* 3. EDITORIAL ACCENT STRIP */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#B8C4CC]/70 pt-4 border-t border-[rgba(100,210,225,0.12)] z-30 gap-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
          <span>Warpaint Typography &bull; Three.js 3D WebGL Engine &bull; Style 01 4K</span>
        </div>
        <div className="flex items-center gap-4">
          <span>7+ Verified Repositories</span>
          <span>&bull;</span>
          <span>B.Tech ECE (JNTUK 2019)</span>
        </div>
      </div>
    </section>
  );
}

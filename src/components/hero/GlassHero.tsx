"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, transitionSlow } from "@/lib/motion";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";

const headline = ["SAP", "BODS", "Developer", "·", "AI", "Builder"];

export function GlassHero() {
  return (
    <section className="cursor-blend-zone relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Fixed ambient color blobs (blue / purple / indigo) behind content */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="ambient-glow left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-[120%] bg-blue-600 opacity-30" />
        <div className="ambient-glow right-[-5%] top-[30%] h-[380px] w-[380px] bg-purple-600 opacity-25" />
        <div className="ambient-glow bottom-[-10%] left-1/2 h-[400px] w-[400px] -translate-x-1/3 bg-indigo-600 opacity-30" />
      </div>

      <div className="container-portfolio relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex max-w-5xl flex-col items-center"
        >
          {/* Avatar / monogram with parallax scale */}
          <motion.div
            variants={fadeUp}
            className="mb-8"
            whileInView={{ scale: [0.9, 1] }}
            transition={transitionSlow}
          >
            <div className="glass-card flex h-28 w-28 items-center justify-center rounded-full text-2xl font-bold tracking-widest text-white">
              SMV
            </div>
          </motion.div>

          {/* Availability pill */}
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for Opportunities
          </motion.div>

          {/* Letter-by-letter stagger headline */}
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
            aria-label={headline.join(" ")}
          >
            <span className="sr-only">{headline.join(" ")}</span>
            <span aria-hidden className="flex flex-wrap justify-center gap-x-3">
              {headline.map((word, wi) => (
                <span key={wi} className="flex">
                  {word.split("").map((char, ci) => (
                    <motion.span
                      key={`${wi}-${ci}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + wi * 0.12 + ci * 0.03, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={
                        word === "·"
                          ? "text-gray-500"
                          : "inline-block"
                      }
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            Enterprise data experience with <strong className="text-white">SAP BODS 4.3</strong>,
            ETL pipelines and SQL at TCS / Grainger — now building production apps with AI:
            desktop ERPs, agentic frameworks, full-stack SaaS.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mb-14 flex flex-wrap items-center justify-center gap-3.5"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition-colors"
            >
              Explore my work
              <ArrowUpRight size={15} />
            </a>
            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp}
            className="grid w-full max-w-lg grid-cols-3 gap-6 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-2xl"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                1+ <span className="text-xs font-normal text-gray-400">Yr</span>
              </div>
              <div className="mt-0.5 text-[11px] text-gray-400">Enterprise Data</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-2xl font-bold text-white">7+</div>
              <div className="mt-0.5 text-[11px] text-gray-400">Shipped Repos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">100%</div>
              <div className="mt-0.5 text-[11px] text-gray-400">Verified Code</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs text-gray-400">
        <span>Scroll to explore</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}

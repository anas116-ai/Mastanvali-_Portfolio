"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Sparkles, ArrowDownRight } from "lucide-react";

export function Transition() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-gradient-to-b from-[#030305] via-[#080812] to-[#030305]">
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Floating Laser Wave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-purple-500/15 to-transparent blur-[100px] pointer-events-none" />

      <div className="container-portfolio relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-purple-300">
            <Sparkles size={14} className="text-purple-400 animate-spin" />
            <span>PHASE TRANSITION // DATA $\rightarrow$ INTELLIGENCE</span>
          </div>

          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            From maintaining <span className="text-slate-400 font-light">enterprise legacy pipelines</span>
            <br />
            to <span className="gradient-text-cyan font-extrabold text-glow-cyan">architecting autonomous AI products.</span>
          </h3>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Below is the verified record of original software, multi-agent frameworks, and desktop applications I have built and shipped.
          </p>

          <div className="pt-4 flex justify-center">
            <div className="w-12 h-12 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <ArrowDownRight size={20} className="animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

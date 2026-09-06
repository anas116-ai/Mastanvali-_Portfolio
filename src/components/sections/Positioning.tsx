"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Activity, ShieldCheck, Zap } from "lucide-react";

export function Positioning() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Laser Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-portfolio relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Massive Kinetic Quote */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest">
              <span className="w-2 h-0.5 bg-[var(--color-accent)]" />
              <span>THE ARCHITECTURAL SHIFT</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              I started in <span className="gradient-text-cyan">enterprise data systems</span>.
              <br />
              Now I build with <span className="text-glow-purple text-purple-400">autonomous AI</span>.
            </h2>

            <div className="pl-6 border-l-2 border-[var(--color-accent)]/40 space-y-6 text-slate-300 text-base md:text-lg leading-relaxed font-light">
              <p>
                After working in enterprise data integration with <strong className="text-white font-semibold">SAP BODS 4.3</strong>, large-scale ETL pipelines, and 24/7 mission-critical production support for global Fortune 500 enterprises (TCS / Grainger), I witnessed the sheer complexity of legacy enterprise data flows.
              </p>
              <p>
                I translated that disciplined understanding of <strong className="text-white font-semibold">data integrity, reconciliation, and system reliability</strong> into modern <strong className="text-[var(--color-accent)] font-semibold">AI-assisted product engineering</strong> — leveraging LLM multi-agent orchestration, vector embeddings, and real-time application frameworks.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Cyber Telemetry Bento Box */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 grid gap-4"
          >
            {/* Card 1: Enterprise Discipline */}
            <div className="p-6 rounded-2xl glass-panel-glow border-white/10 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-white tracking-wider">
                    ENTERPRISE DATA RIGOR
                  </h3>
                  <span className="font-mono text-[10px] text-slate-400">
                    ZERO DATA LOSS // STRICT VALIDATION
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Deep expertise in source-to-target extraction, complex SQL reconciliation, error logging, and high-availability enterprise environments.
              </p>
            </div>

            {/* Card 2: AI Velocity */}
            <div className="p-6 rounded-2xl glass-panel-glow border-white/10 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-white tracking-wider">
                    AI AGENTIC VELOCITY
                  </h3>
                  <span className="font-mono text-[10px] text-slate-400">
                    VIBE CODING &bull; RAPID PROTOTYPING
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Building desktop ERPs, multi-agent frameworks, and SaaS platforms by harnessing LLMs as co-architects and high-speed problem-solving engines.
              </p>
            </div>

            {/* Card 3: Live Telemetry Metrics */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-[var(--color-neon-green)] animate-pulse" />
                <span>ACTIVE STACK</span>
              </div>
              <span className="text-slate-200">SAP + PYTHON + TS + NEXT.JS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

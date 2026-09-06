"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { ShieldCheck, Zap, Activity, Database, GitMerge } from "lucide-react";

export function SpatialPositioning() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Laser Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-portfolio relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Kinetic Editorial Statement */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest">
              <span className="w-2.5 h-0.5 bg-[var(--color-accent)]" />
              <span>THE ARCHITECTURAL CONVERGENCE</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              I started in <span className="gradient-text-cyan">enterprise data systems</span>.
              <br />
              Now I build with <span className="text-glow-purple text-purple-400">autonomous AI</span>.
            </h2>

            <div className="pl-6 border-l-2 border-[var(--color-accent)]/40 space-y-6 text-slate-300 text-base md:text-lg leading-relaxed font-light">
              <p>
                Having engineered enterprise data workflows with <strong className="text-white font-semibold">SAP BODS 4.3</strong>, large-scale ETL pipelines, and 24/7 mission-critical production support for global Fortune 500 enterprises (TCS / Grainger), I understand the paramount importance of data fidelity, schema validation, and zero-downtime operations.
              </p>
              <p>
                I infused that enterprise rigor into <strong className="text-[var(--color-accent)] font-semibold">modern AI-assisted product development</strong> — turning complex problems into working applications with multi-agent orchestration, local & cloud LLMs, vector memory, and full-stack software architectures.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Cyber Telemetry Bento Box */}
          <motion.div variants={fadeUp} className="lg:col-span-5 grid gap-4">
            {/* Card 1: Enterprise Data Rigor */}
            <div className="p-6 rounded-2xl glass-panel-glow border-white/10 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-white tracking-wider">
                    ENTERPRISE INTEGRITY
                  </h3>
                  <span className="font-mono text-[10px] text-slate-400">
                    ZERO DATA LOSS &bull; SQL RECONCILIATION
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Deep expertise in delta extraction, complex transformation logic, ServiceNow incident resolution, and high-availability enterprise environments.
              </p>
            </div>

            {/* Card 2: AI Agentic Velocity */}
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
                    VIBE CODING &bull; PROTOTYPE TO SHIP
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Shipping cross-platform desktop apps, agent swarms, and SaaS platforms by orchestrating LLMs as high-speed scaffolding partners while maintaining human code quality.
              </p>
            </div>

            {/* Card 3: Live Telemetry Bar */}
            <div className="p-5 rounded-2xl bg-black/50 border border-white/10 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-[var(--color-neon-green)] animate-pulse" />
                <span className="text-slate-300">CORE COMPETENCIES</span>
              </div>
              <span className="text-cyan-400">SAP BODS + AI + PYTHON + REACT</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

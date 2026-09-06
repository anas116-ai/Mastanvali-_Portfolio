"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { experience, pipelineStages } from "@/data/experience";
import { Building2, Calendar, CheckCircle2, ArrowRight, ShieldCheck, Database, Sparkles } from "lucide-react";

export function ExecutiveExperience() {
  return (
    <section id="experience" className="section-spacing relative">
      {/* Ambient glow */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-portfolio">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Database size={14} className="text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Experience &bull; 02
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Enterprise Experience &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14B8A6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Data Engineering
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Mission-critical data integration, ETL transformation, and 24/7 production support for global enterprise clients.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {/* Main Role Card — enhanced */}
          <motion.div
            variants={fadeUp}
            className="p-6 sm:p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl space-y-8"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {experience.title}
                  </h3>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wide">
                    Full-time
                  </span>
                </div>
                <p className="text-slate-300 text-sm mt-2">
                  {experience.company} <span className="text-slate-600">&bull;</span> Client: <strong className="text-white font-medium">{experience.client}</strong> (Project: {experience.project})
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <Calendar size={14} className="text-slate-500" />
                <span>{experience.period}</span>
              </div>
            </div>

            {/* Visual Data Pipeline */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                Enterprise ETL Pipeline Architecture
              </div>

              <div className="flex flex-wrap items-center gap-2 p-4 rounded-xl bg-black/30 border border-white/[0.04]">
                {pipelineStages.map((stage, idx) => (
                  <div key={stage.label} className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200 hover:border-white/[0.15] transition-colors">
                      {stage.label}
                    </span>
                    {idx < pipelineStages.length - 1 && (
                      <ArrowRight size={13} className="text-slate-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities Grid */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                Key Responsibilities & Deliverables
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {experience.responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/[0.015] border border-white/[0.04] flex items-start gap-3 hover:border-blue-500/20 hover:bg-blue-500/[0.02] transition-all duration-300"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-blue-400 shrink-0 mt-0.5"
                    />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Environment tags — polished */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 mr-2 font-mono">ENV:</span>
              {experience.environment.map((env) => (
                <span
                  key={env}
                  className="text-[11px] text-slate-300 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                >
                  {env}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

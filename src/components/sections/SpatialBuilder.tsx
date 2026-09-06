"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildWorkflow } from "@/data/skills";
import { Bot, Cpu, Lightbulb, Compass, Wrench, Bug, RefreshCw, Rocket } from "lucide-react";

const icons = [Lightbulb, Compass, Bot, Cpu, Wrench, Bug, RefreshCw, Rocket];

export function SpatialBuilder() {
  return (
    <section id="methodology" className="section-padding relative">
      <div className="container-portfolio">
        <SectionHeader
          number="03"
          title="THE BUILDER METHODOLOGY: HOW I BUILD"
          subtitle="Honest, AI-assisted development. AI is the velocity accelerator; human engineering provides the system boundaries, architecture, and debugging."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 space-y-12"
        >
          {/* Methodology Banner Statement */}
          <motion.div
            variants={fadeUp}
            className="p-8 rounded-2xl glass-panel-glow border-white/10 max-w-4xl"
          >
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-accent)] mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping" />
              <span>CORE ENGINEERING PRINCIPLES</span>
            </div>
            <p className="text-base md:text-xl text-slate-200 font-light leading-relaxed">
              I do not pretend AI replaces software engineering. I treat modern LLMs as <strong className="text-white font-bold">high-speed co-developers and idea catalysts</strong>. The critical system architecture, data models, edge-case resolution, and production debugging remain strictly under my human engineering control.
            </p>
          </motion.div>

          {/* 8-Stage Interactive Circuit Flow */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {buildWorkflow.map((item, idx) => {
              const Icon = icons[idx] || Cpu;

              return (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  className="p-6 rounded-xl glass-panel border-white/5 hover:border-[var(--color-accent)]/40 hover:bg-[#0c0c16] transition-all relative group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-[var(--color-accent)] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h4 className="font-mono text-sm font-bold text-white mb-2">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

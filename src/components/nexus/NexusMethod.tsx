"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { buildWorkflow } from "@/data/skills";
import { Lightbulb, Compass, Bot, Cpu, Wrench, Bug, RefreshCw, Rocket } from "lucide-react";

const icons = [Lightbulb, Compass, Bot, Cpu, Wrench, Bug, RefreshCw, Rocket];

export function NexusMethod() {
  return (
    <section id="method" className="nexus-episode">
      <div className="container-portfolio relative z-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} className="space-y-8">
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="font-mono text-sm text-cyan-400">03</span>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">THE BUILDER METHODOLOGY</h2>
              <p className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase mt-1">AI is velocity &middot; human engineering is the boundary</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl nexus-panel border-white/10 p-7 md:p-9 max-w-4xl">
            <div className="flex items-center gap-3 font-mono text-xs text-cyan-300 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" /> CORE ENGINEERING PRINCIPLE
            </div>
            <p className="text-base md:text-xl text-slate-200 font-light leading-relaxed">
              I do not pretend AI replaces software engineering. I treat modern LLMs as{" "}
              <strong className="text-white font-bold">high-speed co-developers and idea catalysts</strong>. The critical
              system architecture, data models, edge-case resolution, and production debugging remain strictly under my
              human engineering control.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {buildWorkflow.map((item, idx) => {
              const Icon = icons[idx] || Cpu;
              return (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  className="p-6 rounded-xl nexus-panel border-white/5 hover:border-cyan-400/40 hover:bg-black/50 transition-all relative group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">{item.step}</span>
                  </div>
                  <h4 className="font-mono text-sm font-bold text-white mb-2">{item.label}</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

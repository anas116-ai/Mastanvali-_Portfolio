"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { skillClusters } from "@/data/skills";
import { Compass, Cpu, CheckCircle2, Shield, Layers, Wrench, Sparkles } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Problem Scoping & Requirements",
    desc: "Deconstruct the business problem, operational pain points, and data contracts before writing code.",
    icon: Compass,
    color: "blue",
  },
  {
    step: "02",
    title: "System & Architecture Design",
    desc: "Define state machines, database schemas (SQLite / PostgreSQL), and service boundaries.",
    icon: Layers,
    color: "purple",
  },
  {
    step: "03",
    title: "AI-Accelerated Engineering",
    desc: "Harness LLMs to accelerate boilerplate generation, tool scaffolding, and rapid implementation.",
    icon: Cpu,
    color: "cyan",
  },
  {
    step: "04",
    title: "Testing, Debugging & Shipping",
    desc: "Rigorous unit testing, schema verification, edge-case debugging, and production bundling.",
    icon: Shield,
    color: "emerald",
  },
];

export function ExecutiveProcess() {
  return (
    <section id="process" className="section-spacing relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-600/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-portfolio">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Wrench size={14} className="text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Engineering Methodology &bull; 03
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            How I Build &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #06b6d4, #14B8A6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Core Capabilities
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A disciplined, engineer-led approach combining enterprise data rigor with high-speed AI-assisted product execution.
          </p>
        </div>

        {/* 4 Process Pillars — enhanced */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="group p-6 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent hover:border-white/[0.12] transition-all duration-500 flex flex-col justify-between space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-${step.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-sm text-slate-600 font-bold tabular-nums">
                    {step.step}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Capability Arsenal Grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {skillClusters.map((cluster) => (
            <div
              key={cluster.title}
              className="group p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent hover:border-white/[0.12] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(20, 184, 166, 0.4)]" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {cluster.title}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {cluster.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-normal"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-blue-400 shrink-0 mt-0.5"
                      />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.04] text-[10px] text-slate-500 font-mono flex items-center justify-between tracking-wider">
                <span>VERIFIED STACK</span>
                <span className="text-emerald-400">&bull; PRODUCTION READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

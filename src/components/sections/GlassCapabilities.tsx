"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Database, ShieldCheck, Bot, Check } from "lucide-react";

const clusters = [
  {
    title: "Product & Data Engineering",
    icon: Database,
    accent: "text-blue-400",
    gradient: "from-blue-500/30",
    skills: ["SQL Flow & Modeling", "FastAPI / Python", "PostgreSQL / SQLite", "React / Next.js / Electron", "System Architecture"],
  },
  {
    title: "Enterprise Data & ETL",
    icon: ShieldCheck,
    accent: "text-purple-400",
    gradient: "from-purple-500/30",
    skills: ["SAP BODS 4.3", "SAP ECC / BW / HANA", "SQL Transforms", "Data Validation & Reconciliation", "Process-Chain Monitoring"],
  },
  {
    title: "AI-Powered App Building",
    icon: Bot,
    accent: "text-indigo-400",
    gradient: "from-indigo-500/30",
    skills: ["Multi-Model LLMs", "Agent Orchestration", "Prompt Engineering", "AI-Assisted Development", "Rapid Prototyping"],
  },
];

export function GlassCapabilities() {
  return (
    <section id="skills" className="section-spacing relative">
      <div className="container-portfolio">
        <div className="mb-14 max-w-2xl">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Capabilities
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I build with
          </h2>
          <p className="text-base leading-relaxed text-gray-400">
            Bridging deep enterprise data engineering with fast, AI-accelerated product development.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {clusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <motion.div
                key={cluster.title}
                variants={fadeUp}
                className="glass-card group rounded-2xl p-6 transition-transform duration-300 hover:scale-105"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${cluster.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white">
                      <Icon size={20} className={cluster.accent} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                      Capability
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{cluster.title}</h3>

                  <ul className="space-y-2.5">
                    {cluster.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <Check size={15} className={`mt-0.5 shrink-0 ${cluster.accent}`} />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

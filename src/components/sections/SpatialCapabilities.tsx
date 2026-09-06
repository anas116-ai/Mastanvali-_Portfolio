"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillClusters } from "@/data/skills";
import { Database, ShieldCheck, Cpu, Code2, CheckCircle2 } from "lucide-react";

const clusterIcons = [Database, ShieldCheck, Cpu];

export function SpatialCapabilities() {
  return (
    <section id="arsenal" className="section-padding relative">
      <div className="container-portfolio">
        <SectionHeader
          number="04"
          title="CAPABILITY MATRIX & TECHNICAL ARSENAL"
          subtitle="Real, verified competencies across enterprise data pipelines, operational production support, and AI product engineering."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid lg:grid-cols-3 gap-6"
        >
          {skillClusters.map((cluster, idx) => {
            const Icon = clusterIcons[idx] || Code2;

            return (
              <motion.div
                key={cluster.title}
                variants={fadeUp}
                className="p-8 rounded-2xl glass-panel-glow border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[var(--color-accent)]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                        DOMAIN 0{idx + 1}
                      </span>
                      <h3 className="font-mono text-base font-bold text-white tracking-wide">
                        {cluster.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {cluster.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2.5 text-sm text-slate-300 font-light"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[var(--color-accent)] shrink-0 mt-0.5"
                        />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[10px] text-slate-500 flex items-center justify-between">
                  <span>VERIFIED // ACTIVE</span>
                  <span className="text-[var(--color-neon-green)]">● READY</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

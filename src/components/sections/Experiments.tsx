"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { secondaryProjects } from "@/data/projects";
import { ExternalLink, Terminal, Sparkles, Layers } from "lucide-react";

export function Experiments() {
  return (
    <section className="section-padding relative">
      <div className="container-portfolio">
        <SectionHeader
          number="03"
          title="SECONDARY EXPLORATIONS & EXPERIMENTS"
          subtitle="Full-stack prototypes, computer vision health-tech tools, and real-time collaboration engines."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {secondaryProjects.map((project, idx) => (
            <motion.a
              key={project.slug}
              variants={fadeUp}
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl glass-panel-glow border-white/10 hover:border-[var(--color-accent)]/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Corner accent tick */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[var(--color-accent)]/20 to-transparent pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--color-accent)]">
                    // EXP 0{idx + 1}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-slate-500 group-hover:text-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-400 font-light line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span>STATUS: {project.status}</span>
                  <span className="text-[var(--color-accent)] group-hover:underline">
                    VIEW REPO &rarr;
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

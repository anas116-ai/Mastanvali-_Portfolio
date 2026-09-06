"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import { ExternalLink, Github, GitBranch, Terminal } from "lucide-react";

export function OpenWork() {
  return (
    <section className="section-padding relative">
      <div className="container-portfolio">
        <SectionHeader
          number="06"
          title="OPEN SOURCE WORK & GITHUB DIRECTORY"
          subtitle="Direct link to all public repositories on github.com/anas116-ai with live verified architectures."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 space-y-8"
        >
          {/* Repository Terminal Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <motion.a
                key={project.slug}
                variants={fadeUp}
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl glass-panel border-white/5 hover:border-[var(--color-accent)]/40 hover:bg-[#0c0c16] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-accent)]">
                      <GitBranch size={13} />
                      <span className="font-bold">{project.name}</span>
                    </div>
                    <ExternalLink
                      size={14}
                      className="text-slate-500 group-hover:text-[var(--color-accent)] transition-colors"
                    />
                  </div>

                  <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span className="text-cyan-400">{project.technologies[0]}</span>
                  <span className="group-hover:text-white transition-colors">
                    INSPECT &rarr;
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Direct Profile Link Box */}
          <motion.div
            variants={fadeUp}
            className="p-8 rounded-2xl glass-panel-glow border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white">
                <Github size={28} />
              </div>
              <div>
                <h4 className="font-mono text-base font-bold text-white">
                  anas116-ai on GitHub
                </h4>
                <p className="text-xs text-slate-400 font-light">
                  Follow code commits, branches, and multi-agent framework experiments.
                </p>
              </div>
            </div>

            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white text-black font-bold font-mono text-xs uppercase tracking-wider hover:bg-[var(--color-accent)] transition-colors flex items-center gap-2"
            >
              <Terminal size={14} />
              <span>EXPLORE GITHUB PROFILE</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

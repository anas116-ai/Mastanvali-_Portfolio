"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { primaryProjects, secondaryProjects, Project } from "@/data/projects";
import {
  ExternalLink,
  ChevronDown,
  Layers,
  CheckCircle2,
  Terminal,
  Cpu,
  Shield,
  FileCode,
  Sparkles,
  GitBranch,
} from "lucide-react";

export function SpatialProjects() {
  const [activeSlug, setActiveSlug] = useState<string | null>("anpharmacy");

  const toggleCaseStudy = (slug: string) => {
    setActiveSlug(activeSlug === slug ? null : slug);
  };

  return (
    <section id="work" className="section-padding relative">
      <div className="container-portfolio">
        <SectionHeader
          number="01"
          title="FLAGSHIP SOFTWARE & 3D CASE STUDIES"
          subtitle="Engineered desktop systems, multi-agent frameworks, and AI platforms verified from public repositories."
        />

        {/* Primary Flagship Projects */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 space-y-6"
        >
          {primaryProjects.map((project: Project, index: number) => {
            const isExpanded = activeSlug === project.slug;

            return (
              <motion.div
                key={project.slug}
                variants={fadeUp}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isExpanded
                    ? "glass-panel-glow border-[var(--color-accent)]/50 shadow-[0_15px_50px_rgba(0,240,255,0.12)]"
                    : "glass-panel border-white/10 hover:border-white/20 hover:bg-[#0c0c14]"
                }`}
              >
                {/* Project Banner Header */}
                <div
                  onClick={() => toggleCaseStudy(project.slug)}
                  className="p-6 md:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleCaseStudy(project.slug);
                    }
                  }}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Index Monospace Badge */}
                    <div className="font-mono text-xs md:text-sm font-bold text-[var(--color-accent)] px-3 py-1.5 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 shrink-0 mt-1">
                      0{index + 1}
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                          {project.name}
                        </h3>
                        <span
                          className={`font-mono text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full border ${
                            project.status === "Functional"
                              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                              : "border-purple-500/30 bg-purple-500/10 text-purple-400"
                          }`}
                        >
                          ● {project.status}
                        </span>
                      </div>

                      <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
                        {project.tagline}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="font-mono text-[10px] text-cyan-400 self-center">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-3 self-end lg:self-center shrink-0">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white/5 border border-white/10 text-white hover:bg-[var(--color-accent)] hover:text-black transition-all flex items-center gap-1.5"
                    >
                      <Terminal size={14} />
                      <span>GITHUB</span>
                      <ExternalLink size={12} className="opacity-70" />
                    </a>

                    <button
                      aria-label="Toggle Case Study"
                      className={`p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 bg-white/10 text-white" : ""
                      }`}
                    >
                      <ChevronDown size={18} />
                    </button>
                  </div>
                </div>

                {/* Case Study Drawer */}
                <AnimatePresence>
                  {isExpanded && project.caseStudy && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-white/10 bg-black/50"
                    >
                      <div className="p-6 md:p-10 space-y-8">
                        {/* 4-Quadrant Architecture Overview */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                            <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-accent)]">
                              <Shield size={14} />
                              <span>01 // CONTEXT</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-light">
                              {project.caseStudy.context}
                            </p>
                          </div>

                          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                            <div className="flex items-center gap-2 font-mono text-xs text-purple-400">
                              <Sparkles size={14} />
                              <span>02 // IDEA</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-light">
                              {project.caseStudy.idea}
                            </p>
                          </div>

                          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                              <Cpu size={14} />
                              <span>03 // APPROACH</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-light">
                              {project.caseStudy.approach}
                            </p>
                          </div>

                          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                              <Layers size={14} />
                              <span>04 // SYSTEM</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-light">
                              {project.caseStudy.system}
                            </p>
                          </div>
                        </div>

                        {/* Implemented Features List */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 font-mono text-xs text-white font-bold tracking-wider uppercase">
                            <FileCode size={16} className="text-[var(--color-accent)]" />
                            <span>VERIFIED IMPLEMENTED MODULES & FEATURES</span>
                          </div>

                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                            {project.caseStudy.build.map((item, idx) => (
                              <div
                                key={idx}
                                className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2.5"
                              >
                                <CheckCircle2
                                  size={15}
                                  className="text-[var(--color-neon-green)] shrink-0 mt-0.5"
                                />
                                <span className="text-xs text-slate-300 font-light leading-relaxed">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Direct Bar */}
                        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                          <div className="text-slate-400 flex items-center gap-2">
                            <span className="text-[var(--color-neon-green)]">●</span>
                            <span>VERIFIED STATUS: {project.caseStudy.status}</span>
                          </div>

                          <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-accent-glow)] transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                          >
                            <span>INSPECT SOURCE CODE ON GITHUB</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secondary Experiments Grid */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10 font-mono text-xs text-slate-400">
            <GitBranch size={16} className="text-purple-400" />
            <span className="font-bold uppercase tracking-wider text-slate-200">
              SECONDARY EXPLORATIONS & PROTOYPES
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondaryProjects.map((project, idx) => (
              <motion.a
                key={project.slug}
                variants={fadeUp}
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl glass-panel border-white/5 hover:border-[var(--color-accent)]/40 hover:bg-[#0c0c16] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[var(--color-accent)]">
                      // EXP 0{idx + 1}
                    </span>
                    <ExternalLink
                      size={15}
                      className="text-slate-500 group-hover:text-[var(--color-accent)] transition-colors"
                    />
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px]">
                  <span className="text-cyan-400">{project.technologies[0]}</span>
                  <span className="text-slate-400 group-hover:text-white">
                    VIEW REPO &rarr;
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

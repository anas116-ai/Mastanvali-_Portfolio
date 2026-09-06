"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { primaryProjects, secondaryProjects, Project } from "@/data/projects";
import {
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  Github,
  ArrowUpRight,
  GitBranch,
  Sparkles,
  Layers,
} from "lucide-react";

export function ExecutiveWork() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>("anpharmacy");

  const toggleProject = useCallback((slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  }, []);

  return (
    <section id="work" className="section-spacing relative">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-portfolio">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={14} className="text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Portfolio &bull; 01
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Selected Work &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14B8A6, #14B8A6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Software Systems
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Real, functional applications and agentic frameworks built with modern engineering practices and verified public repositories.
          </p>
        </div>

        {/* Primary Project Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-5"
        >
          {primaryProjects.map((project: Project, index: number) => {
            const isExpanded = expandedSlug === project.slug;

            return (
              <motion.div
                key={project.slug}
                variants={fadeUp}
                className="group rounded-2xl overflow-hidden border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl hover:border-white/[0.12] transition-all duration-500"
              >
                {/* Project Header Bar */}
                <div
                  onClick={() => toggleProject(project.slug)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleProject(project.slug);
                    }
                  }}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="font-mono text-sm font-bold text-slate-600 pt-1 shrink-0 tabular-nums">
                      0{index + 1}
                    </span>

                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {project.name}
                        </h3>
                        <span
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border tracking-wide ${
                            project.status === "Functional"
                              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                              : "bg-blue-500/10 border-blue-500/20 text-blue-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
                        {project.tagline}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] text-slate-400 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="text-[11px] text-slate-500 self-center">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 self-end lg:self-center shrink-0">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white text-white hover:text-black border border-white/10 transition-all duration-300 flex items-center gap-1.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                      <Github size={14} />
                      <span>Code</span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>

                    <button
                      aria-label="Toggle Details"
                      className={`p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 transition-all duration-300 ${
                        isExpanded ? "rotate-180 text-white bg-white/10 border-white/20" : "hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </button>
                  </div>
                </div>

                {/* Case Study Deep-Dive */}
                <AnimatePresence>
                  {isExpanded && project.caseStudy && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-white/[0.06]"
                    >
                      <div className="p-6 sm:p-10 space-y-8 bg-gradient-to-b from-white/[0.02] to-transparent">
                        {/* 4 Architectural Columns */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[
                            { label: "Context", color: "blue", num: "01", text: project.caseStudy.context },
                            { label: "Idea", color: "purple", num: "02", text: project.caseStudy.idea },
                            { label: "Approach", color: "cyan", num: "03", text: project.caseStudy.approach },
                            { label: "System", color: "emerald", num: "04", text: project.caseStudy.system },
                          ].map((col) => (
                            <div key={col.num} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2 hover:border-white/[0.08] transition-colors duration-300">
                              <div className={`text-xs font-bold text-${col.color}-400 tracking-wide`}>
                                {col.num} // {col.label}
                              </div>
                              <p className="text-xs text-slate-300 leading-relaxed">
                                {col.text}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Implemented Features */}
                        <div className="space-y-4">
                          <div className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
                            Key Implemented Features & Architecture
                          </div>

                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                            {project.caseStudy.build.map((item, idx) => (
                              <div
                                key={idx}
                                className="p-3 rounded-xl bg-white/[0.015] border border-white/[0.04] flex items-start gap-2.5 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-300"
                              >
                                <CheckCircle2
                                  size={14}
                                  className="text-emerald-400 shrink-0 mt-0.5"
                                />
                                <span className="text-xs text-slate-300 leading-relaxed">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Repository Footer */}
                        <div className="pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-xs text-slate-400">
                            Status: <span className="text-slate-200 font-medium">{project.caseStudy.status}</span>
                          </div>

                          <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-slate-200 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                          >
                            <span>Inspect Repository on GitHub</span>
                            <ArrowUpRight size={14} />
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
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-6">
            <GitBranch size={15} className="text-blue-400" />
            <span>Additional Projects & Prototypes</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondaryProjects.map((project) => (
              <a
                key={project.slug}
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.1] flex flex-col justify-between transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h4>
                    <ExternalLink
                      size={14}
                      className="text-slate-500 group-hover:text-blue-400 transition-colors"
                    />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-mono">{project.technologies[0]}</span>
                  <span className="text-slate-400 group-hover:text-white transition-colors">View &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

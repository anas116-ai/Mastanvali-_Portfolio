"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { primaryProjects, secondaryProjects, Project } from "@/data/projects";
import { Github, ExternalLink, Layers, ArrowUpRight, Cpu, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

export function V2SelectedWork() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>("ansiq");

  const toggleExpand = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#050914] text-[#F3F1E8] font-[family-name:var(--font-outfit)]">
      {/* Background Accent Gradients */}
      <div className="pointer-events-none absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#14B8A6]/5 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#F47A18]/5 rounded-full blur-[160px]" />

      <div className="w-full max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/25">
            <span>[ 01 // SELECTED WORK ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F3F1E8]">
            ENGINEERED <span className="text-[#14B8A6]">SYSTEMS</span> &amp; SOFTWARE
          </h2>
          <p className="text-[#B8C4CC] text-sm sm:text-base leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
            A curated portfolio of full-stack platforms, multi-agent frameworks, and desktop applications built with AI-accelerated workflows and verified architectural discipline.
          </p>
        </div>

        {/* --- TIER 1: FLAGSHIP CASE STUDIES (Interactive Expandable Cards) --- */}
        <div className="space-y-6">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#14B8A6] flex items-center gap-2">
            <Cpu size={14} />
            <span>Flagship Architectures (Case Studies)</span>
          </div>

          <div className="space-y-4">
            {primaryProjects.map((project: Project, idx: number) => {
              const isExpanded = expandedSlug === project.slug;
              return (
                <div
                  key={project.slug}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-[#14B8A6]/50 bg-[#08131D] shadow-[0_0_30px_rgba(20, 184, 166, 0.12)]"
                      : "border-[rgba(100,210,225,0.14)] bg-[#08131D]/70 hover:border-[#14B8A6]/30"
                  }`}
                >
                  {/* Collapsed Header Bar */}
                  <div
                    onClick={() => toggleExpand(project.slug)}
                    className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start md:items-center gap-4">
                      <span className="text-xs font-mono font-bold text-[#14B8A6] px-2.5 py-1 rounded bg-[#14B8A6]/10 border border-[#14B8A6]/20">
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F3F1E8]">
                            {project.name}
                          </h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {project.status}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#B8C4CC] mt-1 font-[family-name:var(--font-plus-jakarta)]">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Tech Badges & Expand Trigger */}
                    <div className="flex items-center gap-3 self-end md:self-auto">
                      <div className="hidden sm:flex flex-wrap items-center gap-1.5 max-w-md justify-end">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[rgba(100,210,225,0.06)] text-[#B8C4CC] border border-[rgba(100,210,225,0.12)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="p-2 rounded-full bg-[rgba(100,210,225,0.1)] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-[#050914] transition-all">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Case Study Body */}
                  <AnimatePresence>
                    {isExpanded && project.caseStudy && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="border-t border-[rgba(100,210,225,0.12)] px-5 sm:px-8 py-6 sm:py-8 space-y-6 bg-[#060D17]/80 font-[family-name:var(--font-plus-jakarta)]"
                      >
                        {/* Description */}
                        <p className="text-[#F3F1E8] text-sm sm:text-base leading-relaxed">
                          {project.description}
                        </p>

                        {/* System Context & Architecture Breakdown Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          <div className="p-4 rounded-xl bg-[#08131D] border border-[rgba(100,210,225,0.12)] space-y-1.5">
                            <div className="text-[10px] font-mono font-bold uppercase text-[#14B8A6] tracking-wider">
                              01. THE PROBLEM
                            </div>
                            <p className="text-xs text-[#B8C4CC] leading-relaxed">
                              {project.caseStudy.context}
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-[#08131D] border border-[rgba(100,210,225,0.12)] space-y-1.5">
                            <div className="text-[10px] font-mono font-bold uppercase text-[#F47A18] tracking-wider">
                              02. THE APPROACH
                            </div>
                            <p className="text-xs text-[#B8C4CC] leading-relaxed">
                              {project.caseStudy.approach}
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-[#08131D] border border-[rgba(100,210,225,0.12)] space-y-1.5">
                            <div className="text-[10px] font-mono font-bold uppercase text-[#38BDF8] tracking-wider">
                              03. SYSTEM ARCHITECTURE
                            </div>
                            <p className="text-xs text-[#B8C4CC] leading-relaxed">
                              {project.caseStudy.system}
                            </p>
                          </div>
                        </div>

                        {/* Implemented Features List */}
                        <div className="space-y-3">
                          <div className="text-xs font-mono font-bold uppercase text-[#F3F1E8] tracking-wider">
                            Key Implemented Features:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#B8C4CC]">
                            {project.caseStudy.build.map((feature, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle2 size={13} className="text-[#14B8A6] shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* All Technologies & GitHub Link Footer */}
                        <div className="pt-4 border-t border-[rgba(100,210,225,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {project.technologies.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/20 font-semibold"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14B8A6] text-[#050914] font-bold text-xs font-mono uppercase tracking-wider hover:bg-[#38BDF8] transition-all hover:scale-105 shrink-0"
                          >
                            <Github size={14} />
                            <span>View GitHub Repository</span>
                            <ArrowUpRight size={13} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- TIER 2: SECONDARY EXPLORATIONS & EXPERIMENTS --- */}
        <div className="space-y-6 pt-6">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#F47A18] flex items-center gap-2">
            <Layers size={14} />
            <span>Specialized Platforms &amp; Experiments</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {secondaryProjects.map((project: Project) => (
              <div
                key={project.slug}
                className="p-6 rounded-2xl border border-[rgba(100,210,225,0.14)] bg-[#08131D]/80 hover:border-[#F47A18]/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-sm hover:shadow-[0_0_24px_rgba(244,122,24,0.1)]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold uppercase text-[#F3F1E8] group-hover:text-[#F47A18] transition-colors">
                      {project.name}
                    </h4>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#B8C4CC] leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[9px] font-mono bg-[rgba(100,210,225,0.06)] text-[#B8C4CC] border border-[rgba(100,210,225,0.1)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#F47A18] hover:text-white transition-colors"
                  >
                    <span>Inspect Code</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

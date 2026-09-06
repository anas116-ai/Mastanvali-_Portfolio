"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { primaryProjects, secondaryProjects, Project } from "@/data/projects";
import { ExternalLink, ChevronDown, Layers, CheckCircle2, Terminal, Cpu, Shield, GitBranch } from "lucide-react";

export function NexusWork() {
  const [activeSlug, setActiveSlug] = useState<string>("anpharmacy");

  const toggle = (slug: string) => setActiveSlug(activeSlug === slug ? "" : slug);

  return (
    <section id="work" className="nexus-episode">
      <div className="container-portfolio relative z-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} className="space-y-8">
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="font-mono text-sm text-cyan-400">02</span>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">VERIFIED SOFTWARE</h2>
              <p className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase mt-1">Desktop systems, agent frameworks &amp; AI platforms &middot; verified from public repos</p>
            </div>
          </motion.div>

          {/* Primary flagships */}
          <div className="space-y-5">
            {primaryProjects.map((project: Project, index: number) => {
              const isOpen = activeSlug === project.slug;
              return (
                <motion.div
                  key={project.slug}
                  variants={fadeUp}
                  className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isOpen ? "nexus-panel border-cyan-400/40 shadow-[0_15px_50px_rgba(0,240,255,0.1)]" : "nexus-panel border-white/10 hover:border-cyan-400/30"
                  }`}
                >
                  <div
                    onClick={() => toggle(project.slug)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(project.slug);
                      }
                    }}
                    className="p-6 md:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="font-mono text-xs md:text-sm font-bold text-cyan-400 px-3 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/30 shrink-0 mt-1">
                        0{index + 1}
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{project.name}</h3>
                          <span className={`font-mono text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full border ${
                            project.status === "Functional" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-purple-500/30 bg-purple-500/10 text-purple-400"
                          }`}>● {project.status}</span>
                        </div>
                        <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-3xl">{project.tagline}</p>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.technologies.slice(0, 6).map((tech) => (
                            <span key={tech} className="font-mono text-[10px] text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">{tech}</span>
                          ))}
                          {project.technologies.length > 6 && <span className="font-mono text-[10px] text-cyan-400 self-center">+{project.technologies.length - 6} more</span>}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 self-end lg:self-center shrink-0">
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white/5 border border-white/10 text-white hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-1.5"
                      >
                        <Terminal size={14} /> GITHUB <ExternalLink size={12} className="opacity-70" />
                      </a>
                      <button
                        aria-label="Toggle case study"
                        className={`p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-transform duration-300 ${isOpen ? "rotate-180 bg-white/10 text-white" : ""}`}
                      >
                        <ChevronDown size={18} />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && project.caseStudy && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden border-t nexus-hairline bg-black/40"
                      >
                        <div className="p-6 md:p-10 space-y-8">
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400"><Shield size={14} /><span>01 // CONTEXT</span></div>
                              <p className="text-xs text-slate-300 leading-relaxed font-light">{project.caseStudy.context}</p>
                            </div>
                            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                              <div className="flex items-center gap-2 font-mono text-xs text-purple-400"><Shield size={14} /><span>02 // IDEA</span></div>
                              <p className="text-xs text-slate-300 leading-relaxed font-light">{project.caseStudy.idea}</p>
                            </div>
                            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                              <div className="flex items-center gap-2 font-mono text-xs text-cyan-300"><Cpu size={14} /><span>03 // APPROACH</span></div>
                              <p className="text-xs text-slate-300 leading-relaxed font-light">{project.caseStudy.approach}</p>
                            </div>
                            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400"><Layers size={14} /><span>04 // SYSTEM</span></div>
                              <p className="text-xs text-slate-300 leading-relaxed font-light">{project.caseStudy.system}</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="font-mono text-xs text-white font-bold tracking-wider uppercase">VERIFIED IMPLEMENTED MODULES</div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                              {project.caseStudy.build.map((item, idx) => (
                                <div key={idx} className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2.5">
                                  <CheckCircle2 size={15} className="text-[#00ff9d] shrink-0 mt-0.5" />
                                  <span className="text-xs text-slate-300 font-light leading-relaxed">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t nexus-hairline flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                            <span className="text-slate-400 flex items-center gap-2"><span className="text-[#00ff9d]">●</span>VERIFIED STATUS: {project.caseStudy.status}</span>
                            <a href={project.repository} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-black font-bold uppercase tracking-wider hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                              INSPECT SOURCE <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Secondary */}
          <div className="mt-14">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b nexus-hairline font-mono text-xs text-slate-400">
              <GitBranch size={16} className="text-purple-400" />
              <span className="font-bold uppercase tracking-wider text-slate-200">Secondary Explorations</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {secondaryProjects.map((project, idx) => (
                <motion.a
                  key={project.slug}
                  variants={fadeUp}
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl nexus-panel border-white/5 hover:border-cyan-400/40 hover:bg-black/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-cyan-400">// EXP 0{idx + 1}</span>
                      <ExternalLink size={15} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{project.name}</h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">{project.tagline}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t nexus-hairline flex flex-wrap items-center justify-between gap-2 font-mono text-[10px]">
                    <span className="text-cyan-400">{project.technologies[0]}</span>
                    <span className="text-slate-400 group-hover:text-white">VIEW REPO &rarr;</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Layers, Bot, FileText, Video, Building2, Sparkles, GitPullRequest, ArrowUpRight } from "lucide-react";

interface FeaturedProject {
  num: string;
  name: string;
  tagline: string;
  category: string;
  what: string;
  why: string;
  how: string;
  learnings: string;
  technologies: string[];
  repoUrl: string;
  liveUrl?: string;
  image: string;
  telemetry: string;
  stat1: string;
  stat2: string;
  accent: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    num: "01",
    name: "AnsiQ",
    tagline: "Autonomous Multi-Agent Task Orchestration Framework",
    category: "AI & MULTI-AGENT SYSTEMS",
    what: "A modular Python 3.12 framework for orchestrating stateful multi-agent DAG execution graphs with persistent semantic memory and local LLM routing.",
    why: "Most agent frameworks either create uncontrollable endless loops or lock developers into costly cloud API tiers. AnsiQ was built to explore deterministic, testable agent coordination.",
    how: "Implements a coordinator node that analyzes queries and dispatches specialized worker agents (Research, Synthesis, Verification) across dynamic DAG trees, backed by SQLite FTS5 and Ollama local models.",
    learnings: "Achieved 787 automated unit/integration tests with zero hallucination leaks and sub-100ms local inference routing.",
    technologies: ["Python 3.12+", "FastAPI", "Ollama", "ChromaDB", "SQLite FTS5", "Pydantic", "Multi-Agent DAG"],
    repoUrl: "https://github.com/anas116-ai/AnsiQ",
    image: "/images/projects/ansiq_v3.jpg",
    telemetry: "Autonomous DAG Engine",
    stat1: "787 Tests Passing",
    stat2: "Local Ollama Llama 3",
    accent: "#14B8A6",
  },
  {
    num: "02",
    name: "AnPharmacy",
    tagline: "Offline-First Pharmacy Distribution Management System",
    category: "HEALTHCARE SUPPLY CHAIN & DESKTOP ERP",
    what: "A comprehensive offline-first medical distribution ERP built for pharmacies to manage medicine stock, batch allocation, and sales compliance without relying on active internet.",
    why: "Small-town pharmacies face frequent network outages and cannot afford downtime while dispensing critical medicines. Inventory errors with expired medicines have severe health consequences.",
    how: "Built on Electron and React 19 with better-sqlite3 in WAL mode for ACID-compliant zero-latency operations. Integrates automated First-Expired-First-Out (FEFO) batch allocation and Tesseract.js OCR.",
    learnings: "Designed an encrypted local backup engine (AES-256) and verified 0.00ms read latency with full offline resilience.",
    technologies: ["Electron", "React 19", "better-sqlite3 WAL", "Tesseract.js OCR", "FEFO Engine", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/anas116-ai/AnPharmacy",
    image: "/images/projects/anpharmacy_v2.jpg",
    telemetry: "ACID WAL Â· 0.00ms Latency",
    stat1: "100% FEFO Safe",
    stat2: "Offline SQLite WAL",
    accent: "#14B8A6",
  },
  {
    num: "03",
    name: "Anasify",
    tagline: "AI-Powered ATS Resume Engineering Platform",
    category: "CAREER TECH & FULL-STACK AI",
    what: "A Next.js full-stack platform that bridges candidates and Applicant Tracking Systems (ATS) through deep job description gap analysis and bullet point impact scoring.",
    why: "Existing AI resume tools hallucinate qualifications and auto-insert fake skills, causing candidates to fail technical interviews. Anasify enforces a strict Truth Verification Workflow.",
    how: "Users upload their verified background; the multi-model AI routing engine (OpenAI, Gemini, Ollama) scores match percentage (0-100%) and only proposes truthful rewording with explicit candidate confirmation.",
    learnings: "Engineered Prisma schemas with PostgreSQL, NextAuth.js OAuth, and multi-model fallbacks for 98% target ATS scoring.",
    technologies: ["Next.js 14", "React", "TypeScript", "Prisma", "PostgreSQL", "OpenAI API", "Tailwind CSS"],
    repoUrl: "https://github.com/anas116-ai/anasify",
    image: "/images/projects/anasify_v2.jpg",
    telemetry: "Truth-Verification Protocol",
    stat1: "98% Target Score",
    stat2: "0 Hallucinations",
    accent: "#F47A18",
  },
];

interface ArchiveProject {
  num: string;
  name: string;
  category: string;
  desc: string;
  technologies: string[];
  repoUrl: string;
  status: string;
  icon: typeof Video;
}

const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    num: "04",
    name: "VidGen Studio",
    category: "AI Video Generation Pipeline",
    desc: "Autonomous media synthesis pipeline transforming text scripts into short-form videos with voiceovers, subtitles, stock footage, and branding.",
    technologies: ["Python", "FastAPI", "ElevenLabs", "Edge TTS", "MoviePy", "Pexels API"],
    repoUrl: "https://github.com/anas116-ai/Anas-Video-Agency",
    status: "Pipeline Active",
    icon: Video,
  },
  {
    num: "05",
    name: "BusinessAP",
    category: "Hyper-Local Business Ecosystem",
    desc: "Full-stack community marketplace connecting small-town job seekers, local merchants, and service providers. Built as a pnpm monorepo.",
    technologies: ["React", "Vite", "Express 5", "PostgreSQL", "Drizzle ORM", "TypeScript"],
    repoUrl: "https://github.com/anas116-ai/businessap",
    status: "Monorepo Build",
    icon: Building2,
  },
  {
    num: "06",
    name: "Skin-Sync",
    category: "Computer Vision & Color Scoring",
    desc: "AI-assisted skin tone color recommendation engine utilizing OpenAI Vision and CIELAB Delta-E (ÎE) perceptual color distance scoring.",
    technologies: ["React", "Vite", "Express 5", "PostgreSQL", "OpenAI Vision", "CIELAB Math"],
    repoUrl: "https://github.com/anas116-ai/Skin-Sync",
    status: "Vision Prototype",
    icon: Sparkles,
  },
  {
    num: "07",
    name: "Qode-Sync",
    category: "Developer GitHub Telemetry",
    desc: "Developer productivity tool streamlining GitHub branch synchronization trees, PR inspection scoring, and automated CI/CD webhook event triggers.",
    technologies: ["Next.js", "TypeScript", "GitHub REST & GraphQL API", "Tailwind CSS"],
    repoUrl: "https://github.com/anas116-ai/Qode-Sync",
    status: "Active Repo",
    icon: GitPullRequest,
  },
];

export function RedesignProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#050505] text-[#F3F1E8] py-28 sm:py-36 px-5 sm:px-8 md:px-12 lg:px-16 select-none border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono tracking-[0.25em] text-[#14B8A6] uppercase">
            // FEATURED SYSTEMS &amp; CODEBASE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)] tracking-normal">
            Engineered Systems &amp; Software
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A8B8C4] font-light leading-relaxed font-[family-name:var(--font-sans)]">
            Authentic software architectures built, tested, and published to GitHub. Zero fabricated metrics, verified implementations.
          </p>
        </div>

        {/* TIER 1: EXPANSIVE FULL-WIDTH FEATURED WORK (Sticky Stacking Preserved) */}
        <div className="relative flex flex-col gap-12 sm:gap-16">
          {FEATURED_PROJECTS.map((project, index) => {
            const targetScale = 1 - (FEATURED_PROJECTS.length - 1 - index) * 0.035;

            return (
              <FeaturedProjectCard
                key={project.num}
                project={project}
                index={index}
                total={FEATURED_PROJECTS.length}
                progress={scrollYProgress}
                targetScale={targetScale}
              />
            );
          })}
        </div>

        {/* TIER 2: ARCHITECTURAL ARCHIVE (VidGen, BusinessAP, Skin-Sync, Qode-Sync) */}
        <div className="pt-16 border-t border-white/[0.08] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#14B8A6] uppercase block">
                SELECTED SYSTEMS ARCHIVE //
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)] mt-1">
                Additional Explorations &amp; Workflows
              </h3>
            </div>
            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A8B8C4] hover:text-[#F3F1E8] transition-colors"
            >
              <span>VIEW ALL 7 REPOSITORIES ON GITHUB</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARCHIVE_PROJECTS.map((proj) => {
              const IconComponent = proj.icon;
              const isQodeSync = proj.name === "Qode-Sync";

              return (
                <div
                  key={proj.num}
                  className="rounded-xl bg-[#080C14] border border-white/[0.08] p-6 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300 group shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-white/30 group-hover:text-[#14B8A6] transition-colors">
                        {proj.num}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#A8B8C4] border border-white/10">
                        {proj.status}
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#A8B8C4]">
                        {proj.category}
                      </div>
                      <h4
                        className={`text-lg font-bold text-[#F3F1E8] mt-1 ${
                          isQodeSync
                            ? "font-[family-name:var(--font-julius)] tracking-wider"
                            : "font-[family-name:var(--font-josefin)]"
                        }`}
                      >
                        {proj.name}
                      </h4>
                    </div>

                    <p className="text-xs text-[#A8B8C4] leading-relaxed font-[family-name:var(--font-sans)] line-clamp-3">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-[#CBD5E1]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#14B8A6] hover:text-white transition-colors"
                    >
                      <Github size={13} />
                      <span>Repository</span>
                      <ArrowUpRight size={11} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  index,
  total,
  progress,
  targetScale,
}: {
  project: FeaturedProject;
  index: number;
  total: number;
  progress: MotionValue<number>;
  targetScale: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 w-full"
      style={{ top: `calc(5.5rem + ${index * 20}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-2xl sm:rounded-3xl border border-white/[0.09] bg-[#080C14]/95 backdrop-blur-2xl p-7 sm:p-10 md:p-12 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.95)] overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (6 Cols): Full Project Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Header / Number / Category */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#14B8A6]">
                  {project.num}
                </span>
                <span className="text-white/20">/</span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#A8B8C4]">
                  {project.category}
                </span>
              </div>

              {/* Project Title: Strictly Julius Sans One with architectural spacing */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F3F1E8] font-[family-name:var(--font-julius)] tracking-wider">
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#E2E8F0] font-mono">
                {project.tagline}
              </p>
            </div>

            {/* Project Story: What / Why / How / Learnings */}
            <div className="space-y-3 text-xs sm:text-sm text-[#A8B8C4] leading-relaxed font-[family-name:var(--font-sans)] border-y border-white/[0.08] py-4">
              <div>
                <strong className="text-[#E2E8F0] font-mono text-[10px] uppercase tracking-wider block mb-0.5">
                  [WHAT IS IT]
                </strong>
                {project.what}
              </div>
              <div>
                <strong className="text-[#E2E8F0] font-mono text-[10px] uppercase tracking-wider block mb-0.5">
                  [WHY I BUILT IT]
                </strong>
                {project.why}
              </div>
              <div>
                <strong className="text-[#E2E8F0] font-mono text-[10px] uppercase tracking-wider block mb-0.5">
                  [SYSTEM ARCHITECTURE]
                </strong>
                {project.how}
              </div>
            </div>

            {/* Tech Stack Pills & GitHub Link */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] text-[#CBD5E1] border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.08] hover:bg-white text-[#F3F1E8] hover:text-[#050505] border border-white/15 text-xs font-mono font-semibold tracking-wider transition-all duration-200"
                >
                  <Github size={14} />
                  <span>VIEW REPOSITORY</span>
                  <ExternalLink size={12} />
                </a>

                <span className="text-xs font-mono text-[#14B8A6]">
                  {project.telemetry}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (6 Cols): Large-Format Visual Asset with Telemetry Badges */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
            <Image
              src={project.image}
              alt={`${project.name} Architecture & Dashboard`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-black/20 pointer-events-none" />

            {/* Floating Telemetry Stats on Image */}
            <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-md bg-[#050505]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#F3F1E8]">
                {project.stat1}
              </span>
              <span className="px-3 py-1 rounded-md bg-[#050505]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#14B8A6]">
                {project.stat2}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

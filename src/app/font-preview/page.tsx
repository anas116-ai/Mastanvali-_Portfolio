"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Check,
  ArrowRight,
  Database,
  Bot,
  Terminal,
  ArrowLeft,
  Copy,
  ExternalLink,
  Layers,
  Type,
  Eye,
  Sliders,
  CheckCircle2,
  FolderGit2,
  Filter,
  Zap,
  Crown,
  Star
} from "lucide-react";
import Link from "next/link";

interface FontDef {
  id: string;
  name: string;
  family: string;
  category: "Serif" | "Sans-Serif";
  subCategory: string;
  description: string;
  badge: string;
  weight: string;
  isAllCapDesign?: boolean;
}

const STYLISH_REGULAR_FONTS: FontDef[] = [
  {
    id: "josefin",
    name: "01 // Josefin Sans Regular",
    family: "'Josefin Sans', sans-serif",
    category: "Sans-Serif",
    subCategory: "Scandinavian Vintage Modern",
    description: "Tall x-height, geometric precision, Scandinavian modernism. Crisp and elegant in both Title Case and All-Caps.",
    badge: "Your Core Favorite",
    weight: "Regular 400",
  },
  {
    id: "julius",
    name: "02 // Julius Sans One",
    family: "'Julius Sans One', sans-serif",
    category: "Sans-Serif",
    subCategory: "Architectural High-Fashion All-Caps",
    description: "Architectural luxury with wide letter-spacing. Glyphs are designed with Roman monumental all-capital proportions.",
    badge: "Your Core Favorite",
    weight: "Regular 400",
    isAllCapDesign: true,
  },
  {
    id: "italiana",
    name: "03 // Italiana",
    family: "'Italiana', serif",
    category: "Serif",
    subCategory: "Milan Luxury Haute-Couture",
    description: "Inspired by Italian luxury calligraphy and classical architecture. Slender, graceful proportions with high aesthetic poise in Regular weight.",
    badge: "Milan Luxury Haute-Couture",
    weight: "Regular 400",
  },
  {
    id: "bodoni-moda",
    name: "04 // Bodoni Moda Regular",
    family: "'Bodoni Moda', serif",
    category: "Serif",
    subCategory: "Vogue & Haute-Couture Editorial",
    description: "The supreme icon of Parisian fashion editorial (Vogue, Harper's Bazaar). Dramatic geometric contrast with razor-thin hairlines. Completely non-bold.",
    badge: "Razor-Thin Hairlines",
    weight: "Regular 400",
  },
  {
    id: "clash-display",
    name: "05 // Clash Display Regular",
    family: "'Clash Display', sans-serif",
    category: "Sans-Serif",
    subCategory: "Awwwards Modernist French Studio",
    description: "Charismatic French modernist display sans in pure regular weight. Idiosyncratic letter tucks and curves that feel magnetic and bespoke.",
    badge: "Awwwards French Atelier",
    weight: "Regular 400",
  },
  {
    id: "cabinet-grotesk",
    name: "06 // Cabinet Grotesk Regular",
    family: "'Cabinet Grotesk', sans-serif",
    category: "Sans-Serif",
    subCategory: "Precision European Atelier Sans",
    description: "The signature aesthetic of elite product design engineering (Linear, Raycast). Clean, intellectual, distinctive neo-grotesk in regular weight.",
    badge: "Linear / Raycast Aesthetic",
    weight: "Regular 400",
  },
  {
    id: "tenor-sans",
    name: "07 // Tenor Sans",
    family: "'Tenor Sans', sans-serif",
    category: "Sans-Serif",
    subCategory: "Luxury Brand Boutique Poise",
    description: "Engineered specifically for luxury brand identity. Slender vertical stems, subtle humanistic flare, and supreme typographic poise.",
    badge: "Luxury Brand Boutique",
    weight: "Regular 400",
  },
  {
    id: "marcellus",
    name: "08 // Marcellus",
    family: "'Marcellus', serif",
    category: "Serif",
    subCategory: "Roman Flared Lapidary Elegance",
    description: "Subtle flared stems without heavy bracketed serifs. Conveys quiet luxury, museum-grade sophistication, and effortless dignity.",
    badge: "Quiet Luxury Flared",
    weight: "Regular 400",
  },
  {
    id: "prata",
    name: "09 // Prata",
    family: "'Prata', serif",
    category: "Serif",
    subCategory: "Didone Teardrop Parisian Grace",
    description: "Refined Didone display font with soft organic teardrop terminals and delicate vertical stems. High fashion artistry.",
    badge: "Organic Teardrop Grace",
    weight: "Regular 400",
  },
  {
    id: "bellefair",
    name: "10 // Bellefair",
    family: "'Bellefair', serif",
    category: "Serif",
    subCategory: "Neoclassical Slender Editorial",
    description: "Tall, slender, whisper-thin neoclassical serifs reminiscent of Swiss haute horlogerie and editorial bookcraft.",
    badge: "Whisper-Thin Elegance",
    weight: "Regular 400",
  },
  {
    id: "poiret-one",
    name: "11 // Poiret One",
    family: "'Poiret One', cursive, sans-serif",
    category: "Sans-Serif",
    subCategory: "Art Deco Geometric Luxury",
    description: "Pure geometric light strokes and sweeping Art Deco arches. Ultra-sleek, razor-thin, distinctive aesthetic personality.",
    badge: "Art Deco Ultra-Sleek",
    weight: "Light / Regular",
  },
  {
    id: "syncopate",
    name: "12 // Syncopate Regular",
    family: "'Syncopate', sans-serif",
    category: "Sans-Serif",
    subCategory: "Cyber-Luxury Architectural Wide",
    description: "Ultra-wide cinematic letterforms in slender regular weight. Creates a breathtaking, expansive luxury presence without being heavy.",
    badge: "Cinematic Horizontal Span",
    weight: "Regular 400",
  },
];

interface ProjectShowcase {
  num: string;
  nameTitleCase: string;
  nameAllCaps: string;
  taglineTitleCase: string;
  taglineAllCaps: string;
  description: string;
  image: string;
  metrics: string[];
  techStack: string[];
}

const FOUR_PROJECTS: ProjectShowcase[] = [
  {
    num: "01",
    nameTitleCase: "AnPharmacy",
    nameAllCaps: "ANPHARMACY",
    taglineTitleCase: "Intelligent Pharmacy ERP & Inventory Engine",
    taglineAllCaps: "INTELLIGENT PHARMACY ERP & INVENTORY ENGINE",
    description: "Offline-first desktop enterprise platform handling pharmaceutical distribution, FEFO batch tracking, OCR invoice parsing, and AES-256 encrypted ledger verification.",
    image: "/images/projects/anpharmacy_erp_dashboard.jpg",
    metrics: ["FEFO Batch Algorithm", "OCR Invoice Scan", "Offline-First SQLite"],
    techStack: ["Electron", "React 19", "TypeScript", "SQLite", "Tailwind CSS"],
  },
  {
    num: "02",
    nameTitleCase: "Anasify",
    nameAllCaps: "ANASIFY",
    taglineTitleCase: "ATS Resume Optimizer & Career Document Engine",
    taglineAllCaps: "ATS RESUME OPTIMIZER & CAREER DOCUMENT ENGINE",
    description: "High-precision applicant tracking system analyzer computing deterministic match scores, semantic gap audits, and PDF resume recompilation with keyword injection.",
    image: "/images/projects/anasify_ats_resume.jpg",
    metrics: ["94% ATS Match Rate", "PDF Byte Parser", "Semantic Keyword Graph"],
    techStack: ["Next.js 15", "Gemini 2.5 API", "Tailwind CSS", "Lucide"],
  },
  {
    num: "03",
    nameTitleCase: "AnsiQ",
    nameAllCaps: "ANSIQ",
    taglineTitleCase: "Autonomous Multi-Agent Task Orchestrator",
    taglineAllCaps: "AUTONOMOUS MULTI-AGENT TASK ORCHESTRATOR",
    description: "Directed acyclic graph (DAG) workflow engine coordinating collaborative AI specialist subagents with state rollbacks, memory queues, and sandboxed tool execution.",
    image: "/images/projects/ansiq_multiagent_dag.jpg",
    metrics: ["DAG Dependency Pipeline", "Multi-Agent Protocol", "Deterministic Rollbacks"],
    techStack: ["Node.js", "LangGraph", "TypeScript", "WebSockets"],
  },
  {
    num: "04",
    nameTitleCase: "Qode-Sync",
    nameAllCaps: "QODE-SYNC",
    taglineTitleCase: "Real-Time Collaborative Code Playground",
    taglineAllCaps: "REAL-TIME COLLABORATIVE CODE PLAYGROUND",
    description: "Browser-based distributed code execution and peer collaboration suite with Conflict-Free Replicated Data Types (CRDTs), syntax ast tree, and multi-file runner.",
    image: "/images/projects/qodesync_github_platform.jpg",
    metrics: ["<12ms Sync Latency", "CRDT Conflict Resolution", "Multi-File Runtime"],
    techStack: ["Next.js", "WebRTC", "Monaco Editor", "Docker Sandbox"],
  },
];

type FilterTab = "all" | "core" | "serif" | "sans";
type CaseMode = "title" | "caps" | "sidebyside";
type ViewMode = "cards" | "compare-single";

export default function FontPreviewPage() {
  const [selectedFontId, setSelectedFontId] = useState<string>("josefin");
  const [filterTab, setFilterTab] = useState<FilterTab>("all");
  const [caseMode, setCaseMode] = useState<CaseMode>("sidebyside");
  const [viewMode, setViewMode] = useState<ViewMode>("cards");
  const [copiedFont, setCopiedFont] = useState<string | null>(null);

  const filteredFonts = STYLISH_REGULAR_FONTS.filter((f) => {
    if (filterTab === "core") return f.id === "josefin" || f.id === "julius";
    if (filterTab === "serif") return f.category === "Serif";
    if (filterTab === "sans") return f.category === "Sans-Serif";
    return true;
  });

  const currentFont =
    STYLISH_REGULAR_FONTS.find((f) => f.id === selectedFontId) || STYLISH_REGULAR_FONTS[0];

  const handleCopy = (fontName: string) => {
    navigator.clipboard.writeText(fontName);
    setCopiedFont(fontName);
    setTimeout(() => setCopiedFont(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-[#F3F1E8] selection:bg-[#F47A18]/30 selection:text-white pb-32">
      {/* --- TOP STICKY COMMAND BAR --- */}
      <header className="sticky top-0 z-50 bg-[#070D18]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B8C4CC] hover:text-[#F47A18] transition-colors py-1.5 px-3 rounded bg-white/5 border border-white/10"
            >
              <ArrowLeft size={14} />
              <span>Back to Live Website</span>
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#B8C4CC]">
              <span className="w-2 h-2 rounded-full bg-[#F47A18] animate-pulse" />
              <span>12 MASTER STYLISH REGULAR FONTS LAB</span>
            </div>
          </div>

          {/* VIEW MODE TOGGLE */}
          <div className="flex items-center gap-2">
            <div className="bg-[#0B1526] p-1 rounded-lg border border-white/10 flex items-center gap-1 text-xs font-mono">
              <button
                onClick={() => setViewMode("cards")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  viewMode === "cards"
                    ? "bg-[#F47A18] text-white font-bold shadow-sm"
                    : "text-[#B8C4CC] hover:text-white"
                }`}
              >
                All 4 Projects View
              </button>
              <button
                onClick={() => setViewMode("compare-single")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  viewMode === "compare-single"
                    ? "bg-[#F47A18] text-white font-bold shadow-sm"
                    : "text-[#B8C4CC] hover:text-white"
                }`}
              >
                Compare Fonts Stacked
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        {/* --- HERO BANNER & INSTRUCTIONS --- */}
        <section className="bg-gradient-to-br from-[#0D1B2A] via-[#081220] to-[#040812] border border-[#F47A18]/30 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#F47A18]/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F47A18]/15 border border-[#F47A18]/40 text-[#F47A18] text-xs font-mono tracking-wider uppercase font-semibold">
              <Star size={13} />
              <span>Curated Haute-Couture & Architectural Suite (12 Fonts)</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              12 Ultra-Stylish Regular Master Fonts
            </h1>
            <p className="text-sm sm:text-base text-[#B8C4CC] leading-relaxed">
              Featuring <strong>Josefin Sans Regular</strong> & <strong>Julius Sans One</strong> together with <strong>10 non-bold haute-couture & architectural fonts</strong> (Italiana, Bodoni Moda, Clash Display, Cabinet Grotesk, Tenor Sans, Marcellus, Prata, Bellefair, Poiret One, Syncopate). Renders all <strong>4 primary projects</strong> in both <strong>Title Case (Aa)</strong> and <strong>ALL CAPS (AA)</strong>.
            </p>
          </div>
        </section>

        {/* --- FILTER TABS --- */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-3">
          <span className="text-xs font-mono text-[#B8C4CC] uppercase tracking-wider mr-2 flex items-center gap-1.5">
            <Filter size={13} className="text-[#14B8A6]" />
            <span>Category:</span>
          </span>
          <button
            onClick={() => setFilterTab("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filterTab === "all"
                ? "bg-[#14B8A6] text-[#050811] font-bold shadow-sm"
                : "bg-white/5 text-[#B8C4CC] hover:text-white"
            }`}
          >
            All 12 Fonts
          </button>
          <button
            onClick={() => setFilterTab("core")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              filterTab === "core"
                ? "bg-[#F47A18] text-white font-bold shadow-sm"
                : "bg-white/5 text-[#B8C4CC] hover:text-white"
            }`}
          >
            <span>Josefin & Julius (2)</span>
          </button>
          <button
            onClick={() => setFilterTab("serif")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              filterTab === "serif"
                ? "bg-emerald-500 text-white font-bold shadow-sm"
                : "bg-white/5 text-[#B8C4CC] hover:text-white"
            }`}
          >
            <span>Haute-Couture Serifs (5)</span>
          </button>
          <button
            onClick={() => setFilterTab("sans")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              filterTab === "sans"
                ? "bg-purple-500 text-white font-bold shadow-sm"
                : "bg-white/5 text-[#B8C4CC] hover:text-white"
            }`}
          >
            <span>Modernist & Architectural Sans (7)</span>
          </button>
        </div>

        {/* --- FONT SELECTION BUTTONS (PREMIUM DOCK) --- */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono tracking-widest text-[#B8C4CC] uppercase flex items-center gap-2">
              <Type size={14} className="text-[#14B8A6]" />
              <span>Step 1: Pick a Font Style ({filteredFonts.length} Available)</span>
            </h2>
            <span className="text-xs font-mono text-[#14B8A6] font-bold">
              Active: {currentFont.name} ({currentFont.weight})
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredFonts.map((f) => {
              const isSelected = f.id === selectedFontId;
              const isCoreFavorite = f.id === "josefin" || f.id === "julius";
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFontId(f.id)}
                  className={`relative text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between group ${
                    isSelected
                      ? "bg-[#11233D] border-[#F47A18] shadow-[0_0_25px_rgba(244,122,24,0.35)] ring-1 ring-[#F47A18]"
                      : isCoreFavorite
                      ? "bg-[#0A1628] border-cyan-500/40 hover:border-cyan-400 hover:bg-[#0D1D35]"
                      : "bg-[#081220] border-white/10 hover:border-white/25 hover:bg-[#0C182B]"
                  }`}
                >
                  <div className="space-y-1.5 w-full">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] font-mono text-[#B8C4CC] tracking-wider">
                        {f.id.toUpperCase()}
                      </span>
                      {isSelected ? (
                        <CheckCircle2 size={14} className="text-[#F47A18]" />
                      ) : isCoreFavorite ? (
                        <span className="text-[9px] font-mono text-cyan-300 font-bold px-1 rounded bg-cyan-950/80 border border-cyan-500/40">
                          CORE
                        </span>
                      ) : (
                        <span className="text-[9px] font-mono text-cyan-400 px-1 rounded bg-cyan-950/60">
                          {f.category}
                        </span>
                      )}
                    </div>
                    <div
                      className="text-base font-normal truncate text-white pt-1"
                      style={{ fontFamily: f.family }}
                    >
                      {f.name.split("// ")[1]}
                    </div>
                    <div className="text-[10px] text-[#B8C4CC] truncate">
                      {f.subCategory}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#F47A18]/90 px-1.5 py-0.5 rounded bg-white/5 truncate max-w-full">
                      {f.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* --- CASE SWITCHER (TITLE CASE vs ALL CAPS vs SIDE-BY-SIDE) --- */}
        <section className="bg-[#081220] border border-white/10 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sliders size={16} className="text-[#F47A18]" />
            <span className="text-xs font-mono text-[#B8C4CC] uppercase tracking-wider">
              Step 2: Typography Casing:
            </span>
            <div className="flex items-center gap-1 bg-[#060D18] p-1 rounded-lg border border-white/10 text-xs font-mono">
              <button
                onClick={() => setCaseMode("sidebyside")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  caseMode === "sidebyside"
                    ? "bg-[#14B8A6] text-[#050811] font-bold shadow-sm"
                    : "text-[#B8C4CC] hover:text-white"
                }`}
              >
                Side-by-Side (Aa & AA)
              </button>
              <button
                onClick={() => setCaseMode("title")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  caseMode === "title"
                    ? "bg-[#14B8A6] text-[#050811] font-bold shadow-sm"
                    : "text-[#B8C4CC] hover:text-white"
                }`}
              >
                Title Case (Aa)
              </button>
              <button
                onClick={() => setCaseMode("caps")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  caseMode === "caps"
                    ? "bg-[#14B8A6] text-[#050811] font-bold shadow-sm"
                    : "text-[#B8C4CC] hover:text-white"
                }`}
              >
                ALL CAPS (AA)
              </button>
            </div>
          </div>

          <button
            onClick={() => handleCopy(currentFont.name.split("// ")[1])}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F47A18]/15 hover:bg-[#F47A18]/25 border border-[#F47A18]/40 text-[#F47A18] hover:text-white text-xs font-mono transition-all"
          >
            {copiedFont ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Select & Copy "{currentFont.name.split("// ")[1]}"</span>
              </>
            )}
          </button>
        </section>

        {/* --- VIEW MODE 1: ALL 4 PROJECTS CARDS --- */}
        {viewMode === "cards" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FOUR_PROJECTS.map((proj) => (
                <div
                  key={proj.num}
                  className="bg-[#081220] border border-white/10 hover:border-[#F47A18]/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* PROJECT IMAGE PREVIEW */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black/40 border-b border-white/10">
                    <img
                      src={proj.image}
                      alt={proj.nameTitleCase}
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#F47A18] font-bold">
                      PROJECT // {proj.num}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5">
                      <span className="text-[#B8C4CC]">Font:</span>
                      <strong className="text-[#F47A18] font-semibold">{currentFont.name.split("// ")[1]}</strong>
                    </div>
                  </div>

                  {/* PROJECT TYPOGRAPHY TESTING ZONE */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    {/* CASE RENDERING */}
                    {caseMode === "sidebyside" ? (
                      <div className="space-y-5 divide-y divide-white/10">
                        {/* 1. TITLE CASE (Aa) */}
                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono uppercase tracking-widest text-[#14B8A6] flex items-center gap-1.5 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                            <span>TITLE CASE (Aa - First Capital, Rest Small):</span>
                          </div>
                          <h3
                            className="text-2xl sm:text-3xl text-white font-normal tracking-normal leading-tight"
                            style={{ fontFamily: currentFont.family }}
                          >
                            {proj.nameTitleCase}
                          </h3>
                          <p
                            className="text-sm sm:text-base text-[#B8C4CC] font-normal leading-snug"
                            style={{ fontFamily: currentFont.family }}
                          >
                            {proj.taglineTitleCase}
                          </p>
                        </div>

                        {/* 2. ALL CAPS (AA) */}
                        <div className="pt-4 space-y-1.5">
                          <div className="text-[10px] font-mono uppercase tracking-widest text-[#F47A18] flex items-center gap-1.5 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F47A18]" />
                            <span>ALL CAPS (AA - Complete Capital Letters):</span>
                          </div>
                          <h3
                            className="text-xl sm:text-2xl text-white font-normal tracking-widest leading-tight uppercase"
                            style={{ fontFamily: currentFont.family }}
                          >
                            {proj.nameAllCaps}
                          </h3>
                          <p
                            className="text-xs sm:text-sm text-[#B8C4CC] font-normal tracking-wide uppercase leading-snug"
                            style={{ fontFamily: currentFont.family }}
                          >
                            {proj.taglineAllCaps}
                          </p>
                        </div>
                      </div>
                    ) : caseMode === "title" ? (
                      <div className="space-y-2">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#14B8A6] flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                          <span>TITLE CASE RENDER (Aa):</span>
                        </div>
                        <h3
                          className="text-3xl sm:text-4xl text-white font-normal tracking-normal leading-tight"
                          style={{ fontFamily: currentFont.family }}
                        >
                          {proj.nameTitleCase}
                        </h3>
                        <p
                          className="text-base sm:text-lg text-[#B8C4CC] font-normal leading-snug"
                          style={{ fontFamily: currentFont.family }}
                        >
                          {proj.taglineTitleCase}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#F47A18] flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F47A18]" />
                          <span>ALL CAPS RENDER (AA):</span>
                        </div>
                        <h3
                          className="text-2xl sm:text-3xl text-white font-normal tracking-widest leading-tight uppercase"
                          style={{ fontFamily: currentFont.family }}
                        >
                          {proj.nameAllCaps}
                        </h3>
                        <p
                          className="text-sm sm:text-base text-[#B8C4CC] font-normal tracking-wide uppercase leading-snug"
                          style={{ fontFamily: currentFont.family }}
                        >
                          {proj.taglineAllCaps}
                        </p>
                      </div>
                    )}

                    {/* BODY DESCRIPTION */}
                    <div className="pt-3 border-t border-white/5 space-y-4">
                      <p className="text-xs sm:text-sm text-[#B8C4CC]/80 leading-relaxed font-sans">
                        {proj.description}
                      </p>

                      {/* METRIC PILLS */}
                      <div className="flex flex-wrap gap-2">
                        {proj.metrics.map((m) => (
                          <span
                            key={m}
                            className="px-2.5 py-1 rounded bg-[#0E1A2C] border border-cyan-500/20 text-[10px] font-mono text-cyan-300"
                          >
                            {m}
                          </span>
                        ))}
                      </div>

                      {/* TECH TAGS */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.techStack.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#B8C4CC]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW MODE 2: STACKED COMPARISON OF FONTS ON ANPHARMACY --- */}
        {viewMode === "compare-single" && (
          <div className="space-y-6">
            <div className="bg-[#081220] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <div className="text-xs font-mono text-[#F47A18] uppercase tracking-wider font-bold">
                  DIRECT BENCHMARK // ALL {filteredFonts.length} ULTRA-STYLISH FONTS STACKED
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Comparing Non-Bold Stylish Fonts on "AnPharmacy - Intelligent Healthcare ERP"
                </h2>
                <p className="text-xs text-[#B8C4CC]">
                  Scroll down to compare how every font handles Title Case (Aa) and ALL CAPS (AA) side-by-side in pure regular weight.
                </p>
              </div>

              <div className="space-y-6 divide-y divide-white/10">
                {filteredFonts.map((font, idx) => {
                  const isCore = font.id === "josefin" || font.id === "julius";
                  return (
                    <div key={font.id} className="pt-6 first:pt-0 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-mono font-bold ${
                              isCore
                                ? "bg-cyan-950/80 border-cyan-400 text-cyan-300"
                                : "bg-[#F47A18]/20 border-[#F47A18]/40 text-[#F47A18]"
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <span className="text-base font-medium text-white">
                            {font.name}
                          </span>
                          <span
                            className={`text-xs font-mono px-2 py-0.5 rounded border ${
                              isCore
                                ? "text-cyan-300 bg-cyan-950/60 border-cyan-500/40"
                                : "text-[#14B8A6] bg-cyan-950/60 border-cyan-800/40"
                            }`}
                          >
                            {font.subCategory}
                          </span>
                          <span className="text-[10px] font-mono text-[#B8C4CC] bg-white/5 px-2 py-0.5 rounded">
                            {font.weight}
                          </span>
                        </div>

                      <button
                        onClick={() => handleCopy(font.name.split("// ")[1])}
                        className="text-xs font-mono text-[#B8C4CC] hover:text-white flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10"
                      >
                        <Copy size={12} />
                        <span>Pick Font</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#050B14] p-5 rounded-xl border border-white/5">
                      {/* TITLE CASE PREVIEW */}
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-cyan-400 font-semibold tracking-wider">
                          TITLE CASE (Aa):
                        </div>
                        <div
                          className="text-2xl text-white font-normal"
                          style={{ fontFamily: font.family }}
                        >
                          AnPharmacy
                        </div>
                        <div
                          className="text-sm text-[#B8C4CC] font-normal"
                          style={{ fontFamily: font.family }}
                        >
                          Intelligent Pharmacy ERP & Inventory Engine
                        </div>
                      </div>

                      {/* ALL CAPS PREVIEW */}
                      <div className="space-y-1 md:border-l md:border-white/10 md:pl-5">
                        <div className="text-[10px] font-mono text-orange-400 font-semibold tracking-wider">
                          ALL CAPS (AA):
                        </div>
                        <div
                          className="text-xl text-white font-normal uppercase tracking-widest"
                          style={{ fontFamily: font.family }}
                        >
                          ANPHARMACY
                        </div>
                        <div
                          className="text-xs text-[#B8C4CC] font-normal uppercase tracking-wider"
                          style={{ fontFamily: font.family }}
                        >
                          INTELLIGENT PHARMACY ERP & INVENTORY ENGINE
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

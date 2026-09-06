"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Terminal, ArrowRight } from "lucide-react";

export function RedesignPhilosophy() {
  const principles = [
    {
      num: "01",
      title: "Enterprise ETL & Data Architecture",
      lead: "Data integrity before feature velocity.",
      what: "Mission-critical ETL workflows, change data capture (CDC), and Slowly Changing Dimensions (SCD Type 1 & 2) moving transaction data between SAP ECC, SQL Server, and SAP BW/HANA.",
      how: "Using SAP BODS 4.3 with deterministic validation transforms, table comparisons, and automated reconciliation checks ensuring zero data loss at Fortune 500 scale.",
      why: "Because downstream analytics and AI systems are only as dependable as the foundation of data feeding them.",
      tag: "CORE FOUNDATION",
      accent: "#E2E8F0",
    },
    {
      num: "02",
      title: "Autonomous Multi-Agent AI Frameworks",
      lead: "Agents as directed execution graphs, not open loops.",
      what: "Stateful agent frameworks (AnsiQ) coordinating dynamic task DAGs across specialized nodes (Coordinator, Researcher, Code Synthesizer, Verifier).",
      how: "Orchestrating local models via Ollama alongside cloud APIs with persistent FTS5 vector memories and strict zero-hallucination verification gates.",
      why: "To explore how intelligent automation can perform complex, multi-step engineering tasks reliably without human babysitting.",
      tag: "AI EXPLORATION",
      accent: "#14B8A6",
    },
    {
      num: "03",
      title: "Full-Stack Software Engineering",
      lead: "Practical software that solves offline reality.",
      what: "Complete desktop and web applications (AnPharmacy, Anasify) engineered with offline-first local databases, OCR document parsing, and modern responsive interfaces.",
      how: "Combining Electron with ACID SQLite WAL mode for instantaneous local performance, alongside modern Next.js 15, TypeScript, and Tailwind CSS.",
      why: "Because real businesses operate in conditions with intermittent connectivity and messy real-world paper workflows.",
      tag: "PRODUCT BUILDING",
      accent: "#F47A18",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#050505] text-[#F3F1E8] py-28 sm:py-36 px-5 sm:px-8 md:px-12 lg:px-16 select-none border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono tracking-[0.25em] text-[#14B8A6] uppercase">
            // PHILOSOPHY &amp; METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)] tracking-normal">
            How I Think About Building
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A8B8C4] font-light leading-relaxed font-[family-name:var(--font-sans)]">
            A continuous progression: from the discipline of mission-critical enterprise data to autonomous AI systems and self-contained software products.
          </p>
        </div>

        {/* Asymmetrical Editorial Narrative Grid (NOT 3 Identical Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 01: Large Left Anchor (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#080C14] border border-white/[0.08] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-white/30 group-hover:text-[#14B8A6] transition-colors">
                  {principles[0].num}
                </span>
                <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-[#A8B8C4]">
                  {principles[0].tag}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)]">
                  {principles[0].title}
                </h3>
                <p className="text-sm sm:text-base text-[#14B8A6] font-mono font-medium">
                  {principles[0].lead}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#A8B8C4] leading-relaxed font-[family-name:var(--font-sans)] pt-2 border-t border-white/[0.06]">
                <div>
                  <strong className="text-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider block mb-1">
                    [WHAT]
                  </strong>
                  {principles[0].what}
                </div>
                <div>
                  <strong className="text-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider block mb-1">
                    [HOW]
                  </strong>
                  {principles[0].how}
                </div>
                <div>
                  <strong className="text-[#E2E8F0] font-mono text-[11px] uppercase tracking-wider block mb-1">
                    [WHY]
                  </strong>
                  {principles[0].why}
                </div>
              </div>
            </div>
          </div>

          {/* Right Stack (5 Cols): Cards 02 & 03 */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {principles.slice(1).map((item) => (
              <div
                key={item.num}
                className="rounded-2xl bg-[#080C14] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-white/30 group-hover:text-[#14B8A6] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-[#A8B8C4]">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#14B8A6] font-mono font-medium mt-1">
                      {item.lead}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A8B8C4] leading-relaxed font-[family-name:var(--font-sans)]">
                    {item.what}
                  </p>

                  <div className="pt-2 text-xs text-[#E2E8F0]/80 font-mono">
                    <span className="text-[#14B8A6] font-bold mr-1">&gt;</span>
                    {item.why}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Database, Cpu, Code2, Wrench } from "lucide-react";

export function RedesignStack() {
  const domains = [
    {
      num: "01",
      title: "SAP & Enterprise Data",
      desc: "Architecting high-throughput data extraction, transformation, and reconciliation across mission-critical enterprise environments.",
      skills: ["SAP BODS 4.3", "SQL Server / T-SQL", "SAP ECC / S4HANA", "SAP BW / HANA", "CDC Delta Loads", "SCD Type 1 & 2", "Data Services Management Console"],
      icon: Database,
    },
    {
      num: "02",
      title: "AI & Intelligent Systems",
      desc: "Building autonomous agent task graphs, multi-model LLM routers, persistent semantic memory, and zero-hallucination guardrails.",
      skills: ["Python 3.12", "FastAPI", "Multi-Agent DAGs", "Ollama Local Models", "OpenAI / Anthropic APIs", "ChromaDB / FTS5", "Pydantic Contracts"],
      icon: Cpu,
    },
    {
      num: "03",
      title: "Application Engineering",
      desc: "Engineering offline-first desktop systems with embedded ACID databases, alongside full-stack Next.js web applications with OCR document parsing.",
      skills: ["Electron", "better-sqlite3 (WAL)", "Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Tesseract OCR", "REST & GraphQL"],
      icon: Code2,
    },
    {
      num: "04",
      title: "Production & Developer Tooling",
      desc: "Ensuring 99.98% operational SLA compliance, ITIL incident remediation, automated Git branch telemetry, and comprehensive test suites.",
      skills: ["ServiceNow ITIL", "Root Cause Analysis", "Git / GitHub Workflows", "Linux Shell / Bash", "Vitest / Jest", "CI/CD Actions", "Performance Auditing"],
      icon: Wrench,
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#050505] text-[#F3F1E8] py-28 sm:py-36 px-5 sm:px-8 md:px-12 lg:px-16 select-none border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono tracking-[0.25em] text-[#14B8A6] uppercase">
            // ENGINEERING STACK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)] tracking-normal">
            Systems I Work Across
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A8B8C4] font-light leading-relaxed font-[family-name:var(--font-sans)]">
            Capability descriptions first, verified technology tools second. No superficial badge clutter.
          </p>
        </div>

        {/* 4 Architectural Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((dom) => (
            <div
              key={dom.num}
              className="rounded-2xl bg-[#080C14] border border-white/[0.08] p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-white/30">
                    {dom.num}
                  </span>
                  <span className="p-2.5 rounded-lg bg-white/[0.03] text-[#14B8A6] border border-white/10">
                    <dom.icon size={18} />
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)]">
                  {dom.title}
                </h3>

                <p className="text-sm text-[#A8B8C4] leading-relaxed font-[family-name:var(--font-sans)]">
                  {dom.desc}
                </p>
              </div>

              {/* Technologies listed cleanly as monospace tags */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {dom.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] text-[#CBD5E1] border border-white/[0.06]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

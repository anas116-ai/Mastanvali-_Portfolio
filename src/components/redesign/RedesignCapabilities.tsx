"use client";

import React from "react";
import { Database, Bot, Layers, Cpu, ShieldCheck, Terminal, ArrowUpRight } from "lucide-react";

export function RedesignCapabilities() {
  const capabilities = [
    {
      num: "01",
      title: "Data & ETL Pipelines",
      desc: "Batch data extraction, transformation, and reconciliation across heterogeneous data sources. Specialized in SAP ECC, SAP BODS 4.3, SQL Server, and dimensional SCD Type 1 & 2 historical tracking.",
      evidence: "Production ETL at VHS Consulting for TCS / Grainger with 99.98% SLA.",
      icon: Database,
    },
    {
      num: "02",
      title: "Autonomous Agent Systems",
      desc: "Architecting multi-agent execution graphs where specialized nodes collaborate through strict input/output contracts, persistent semantic memory, and deterministic verification gates.",
      evidence: "AnsiQ multi-agent DAG framework with local Ollama routing and 787 passing tests.",
      icon: Bot,
    },
    {
      num: "03",
      title: "Offline-First Desktop Software",
      desc: "Zero-latency desktop applications built with Electron and better-sqlite3 in WAL mode. Combining local ACID data persistence with automated document parsing (OCR).",
      evidence: "AnPharmacy medical distribution ERP with FEFO expiry logic and encrypted backups.",
      icon: Layers,
    },
    {
      num: "04",
      title: "Full-Stack AI Web Products",
      desc: "Modern web applications leveraging Next.js 15 App Router, React 19, Prisma ORM, PostgreSQL, and multi-model LLM APIs with strict truth-verification workflows.",
      evidence: "Anasify ATS resume optimizer with 0-100% scoring and multi-model fallback.",
      icon: Terminal,
    },
    {
      num: "05",
      title: "Developer Workflows & Automation",
      desc: "Automated Git branch synchronization trees, PR inspection scoring, webhook event triggers, and CI/CD test build telemetry pipelines.",
      evidence: "Qode-Sync developer productivity hub with real-time GitHub integration.",
      icon: Cpu,
    },
    {
      num: "06",
      title: "Production Support & Reliability",
      desc: "Systematic root-cause analysis (RCA), ServiceNow ITIL incident management, batch log tracing, and automated checksum reconciliation.",
      evidence: "Enterprise L2/L3 production support monitoring SAP BW Process Chains.",
      icon: ShieldCheck,
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
            // CORE DISCIPLINES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)] tracking-normal">
            What I Build
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A8B8C4] font-light leading-relaxed font-[family-name:var(--font-sans)]">
            Engineering capabilities directly supported by production experience and shipped codebases. No agency fluff, no unsupported services.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="rounded-2xl bg-[#080C14] border border-white/[0.08] p-8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-white/30 group-hover:text-[#14B8A6] transition-colors">
                    {cap.num}
                  </span>
                  <span className="p-2 rounded-lg bg-white/[0.03] text-[#14B8A6] border border-white/10">
                    <cap.icon size={18} />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)]">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A8B8C4] leading-relaxed font-[family-name:var(--font-sans)]">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-[#CBD5E1]">
                <span className="text-[#14B8A6] block text-[10px] uppercase tracking-wider mb-1">
                  VERIFIED PROOF //
                </span>
                <span className="text-[#A8B8C4]">{cap.evidence}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

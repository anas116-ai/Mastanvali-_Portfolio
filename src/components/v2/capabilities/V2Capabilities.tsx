"use client";

import React from "react";
import { Database, Bot, Layout, Terminal, CheckCircle2 } from "lucide-react";

const capabilityClusters = [
  {
    title: "Enterprise Data & ETL Engineering",
    icon: Database,
    accent: "#14B8A6",
    tag: "Core Enterprise",
    skills: [
      "SAP Data Services (BODS 4.2)",
      "SAP ECC Source Extraction",
      "SAP BW & SAP HANA Integration",
      "Complex SQL Transformations",
      "Change Data Capture (CDC)",
      "High-Volume Delta Ingestion",
      "Data Quality & Reconciliation",
      "Production ETL Monitoring & SLAs",
    ],
  },
  {
    title: "Autonomous Multi-Agent AI Frameworks",
    icon: Bot,
    accent: "#F47A18",
    tag: "Modern AI Craft",
    skills: [
      "Python 3.12+ & FastAPI Engines",
      "Multi-Agent Orchestration (DAGs & Pipelines)",
      "Vector Databases (ChromaDB)",
      "Local LLM Inference via Ollama",
      "Cloud LLM APIs (OpenAI, Anthropic, Gemini)",
      "Persistent FTS5 Memory Architectures",
      "Tool Auto-Discovery & Dynamic Routing",
      "Truth-Verification Guardrails",
    ],
  },
  {
    title: "Full-Stack Software Architecture",
    icon: Layout,
    accent: "#38BDF8",
    tag: "Application Engineering",
    skills: [
      "Next.js 14/15 (App Router & SSR)",
      "React 19 & TypeScript Strict Mode",
      "Electron Desktop Applications",
      "SQLite & Better-SQLite3 (Offline-First)",
      "PostgreSQL & Prisma / Drizzle ORM",
      "Tailwind CSS & Framer Motion UI",
      "RESTful API & Webhook Systems",
      "OAuth & JWT Authentication",
    ],
  },
  {
    title: "Tooling, Automation & Media Pipelines",
    icon: Terminal,
    accent: "#A78BFA",
    tag: "Productivity",
    skills: [
      "Git & GitHub Workflow Automation",
      "OCR Engines (Tesseract.js)",
      "Programmatic Video (MoviePy / FFmpeg)",
      "Multi-Provider TTS (Edge TTS, ElevenLabs)",
      "Stripe Billing & Subscription Layers",
      "Docker Basics & Linux Shell Scripting",
      "Package Management (pnpm / npm / pip)",
      "Performance Auditing & Profiling",
    ],
  },
];

export function V2Capabilities() {
  return (
    <section id="capabilities" className="relative w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#060B16] text-[#F3F1E8] font-[family-name:var(--font-outfit)] border-t border-[rgba(100,210,225,0.08)]">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/25">
            <span>[ 02 // TECHNICAL CAPABILITIES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F3F1E8]">
            DOMAINS OF <span className="text-[#14B8A6]">COMPETENCE</span>
          </h2>
          <p className="text-[#B8C4CC] text-sm sm:text-base leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
            A structured breakdown of verified technical proficiencies  spanning enterprise data pipelines, autonomous agent development, and modern full-stack systems.
          </p>
        </div>

        {/* 4-Cluster Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilityClusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <div
                key={cluster.title}
                className="p-6 sm:p-8 rounded-2xl border border-[rgba(100,210,225,0.14)] bg-[#08131D]/80 backdrop-blur-xl space-y-6 hover:border-[#14B8A6]/35 transition-all duration-300 shadow-sm"
              >
                {/* Cluster Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2.5 rounded-xl border"
                      style={{
                        backgroundColor: `${cluster.accent}15`,
                        borderColor: `${cluster.accent}30`,
                        color: cluster.accent,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-[#F3F1E8]">
                      {cluster.title}
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[rgba(100,210,225,0.06)] text-[#B8C4CC] border border-[rgba(100,210,225,0.12)]">
                    {cluster.tag}
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-[family-name:var(--font-plus-jakarta)]">
                  {cluster.skills.map((skill) => (
                    <div key={skill} className="flex items-start gap-2.5 text-xs text-[#B8C4CC]">
                      <CheckCircle2
                        size={14}
                        className="shrink-0 mt-0.5"
                        style={{ color: cluster.accent }}
                      />
                      <span className="leading-snug">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

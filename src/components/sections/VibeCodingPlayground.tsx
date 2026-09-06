"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Terminal,
  Play,
  Sparkles,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Code2,
} from "lucide-react";

const vibeSessions = [
  {
    id: "anpharmacy",
    title: "AnPharmacy: Offline Desktop ERP",
    prompt: "Build an offline-first pharmacy distributor desktop app in Electron with FEFO batch selection and OCR invoice scanning.",
    tech: "Electron + React + better-sqlite3 + Tesseract.js",
    repo: "https://github.com/anas116-ai/AnPharmacy",
    steps: [
      { label: "1. Prompt & Scope", text: "Identified pharmacy pain point: Expired medicines getting shipped due to lack of FEFO enforcement." },
      { label: "2. Architecture Design", text: "Decided on SQLite with WAL mode for local ACID compliance, React + Zustand for fast UI state." },
      { label: "3. AI Code Scaffolding", text: "Generated IPC message handlers, schema migrations, and batch allocation algorithms." },
      { label: "4. Human Debugging", text: "Fixed SQLite lock contention on concurrent sales, calibrated OCR bounding box tolerances." },
      { label: "5. Production Ship", text: "Packaged cross-platform desktop installer with 100% offline functionality." },
    ],
    code: `// Intelligent FEFO Batch Selector Algorithm
export function allocateBatches(inventory: Batch[], requestedQty: number) {
  // Sort strictly by First-Expiry-First-Out
  const sorted = [...inventory].sort(
    (a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
  );
  
  let remaining = requestedQty;
  const allocations = [];
  
  for (const batch of sorted) {
    if (batch.stockQty <= 0) continue;
    const take = Math.min(batch.stockQty, remaining);
    allocations.push({ batchId: batch.id, qty: take });
    remaining -= take;
    if (remaining === 0) break;
  }
  return { allocations, fulfilled: remaining === 0 };
}`,
  },
  {
    id: "ansiq",
    title: "AnsiQ: Multi-Agent Orchestration",
    prompt: "Create an autonomous multi-agent framework in Python that coordinates LLM agents via DAG pipelines with local Ollama support.",
    tech: "Python 3.12 + FastAPI + Ollama + SQLite FTS5",
    repo: "https://github.com/anas116-ai/AnsiQ",
    steps: [
      { label: "1. Prompt & Scope", text: "Wanted an open-source alternative to CrewAI that runs natively with local models without telemetry bloat." },
      { label: "2. Architecture Design", text: "Designed DAG execution graph with dependency resolution, persistent memory, and tool decorators." },
      { label: "3. AI Code Scaffolding", text: "Implemented @ansiq_tool registration, Ollama/OpenAI API drivers, and async event loop." },
      { label: "4. Human Debugging", text: "Resolved circular dependency deadlocks in complex multi-agent handoffs." },
      { label: "5. Production Ship", text: "Published repository with full REST API server and custom tool registry." },
    ],
    code: `from ansiq.core import Agent, Crew, DAGPipeline
from ansiq.tools import ansiq_tool

@ansiq_tool(name="data_reconciliation")
def verify_delta_drift(source: str, target: str) -> dict:
    checksum_match = calculate_hash(source) == calculate_hash(target)
    return {"status": "SUCCESS", "zero_drift": checksum_match}

agent = Agent(
    role="ETL Auditor",
    goal="Ensure zero data loss across SAP transformations",
    llm="ollama/llama3.1",
    tools=[verify_delta_drift]
)`,
  },
  {
    id: "anasify",
    title: "Anasify: AI ATS Resume Platform",
    prompt: "Engineer a Next.js platform that scores resumes against job descriptions with a strict Truth Verification Workflow.",
    tech: "Next.js 15 + React 19 + Tailwind + Gemini / OpenAI API",
    repo: "https://github.com/anas116-ai/anasify",
    steps: [
      { label: "1. Prompt & Scope", text: "Candidates need honest ATS scoring without AI hallucinating fake work experiences on their resumes." },
      { label: "2. Architecture Design", text: "Strict two-tier verification: Extraction phase separates verified candidate skills from JD requirements." },
      { label: "3. AI Code Scaffolding", text: "Scaffolded PDF parser, ATS keyword matcher, and interactive markdown resume builder." },
      { label: "4. Human Debugging", text: "Implemented boundary guardrails to prevent LLM from auto-inserting missing skills." },
      { label: "5. Production Ship", text: "Shipped fully responsive web application with real-time ATS match scoring." },
    ],
    code: `// Truth Verification Guardrail
export function auditResumeMatch(candidateSkills: string[], jdKeywords: string[]) {
  const verified = candidateSkills.filter(s => jdKeywords.includes(s));
  const missing = jdKeywords.filter(k => !candidateSkills.includes(k));
  
  return {
    score: Math.round((verified.length / jdKeywords.length) * 100),
    verifiedSkills: verified,
    recommendedToLearn: missing, // NEVER auto-adds to resume
    integrityScore: 1.00
  };
}`,
  },
];

export function VibeCodingPlayground() {
  const [activeSession, setActiveSession] = useState(vibeSessions[0]);
  const [activeTab, setActiveTab] = useState<"steps" | "code">("steps");

  return (
    <section id="playground" className="section-spacing relative bg-[#050508]/80 border-y border-white/10">
      <div className="container-portfolio">
        <SectionHeader
          number="02"
          title="THE HUMAN VIBE CODING PLAYGROUND"
          subtitle="How a real vibe coder works in practice: Rapid AI acceleration guided by human architectural taste and deep debugging."
        />

        {/* Session Selector Buttons */}
        <div className="flex flex-wrap gap-3 mt-10 mb-8">
          {vibeSessions.map((session) => (
            <button
              key={session.id}
              onClick={() => setActiveSession(session)}
              className={`px-5 py-3 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${
                activeSession.id === session.id
                  ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(20, 184, 166, 0.5)] scale-105"
                  : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              <Sparkles size={14} className={activeSession.id === session.id ? "text-cyan-300" : "text-slate-500"} />
              <span>{session.title}</span>
            </button>
          ))}
        </div>

        {/* Main Vibe Console Matrix */}
        <motion.div
          key={activeSession.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="surface-card rounded-2xl overflow-hidden border border-white/15"
        >
          {/* Console Top Bar */}
          <div className="p-5 bg-black/60 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-1">
                HUMAN PROMPT INPUT &bull; {activeSession.tech}
              </div>
              <div className="font-mono text-sm text-white font-semibold">
                &ldquo;{activeSession.prompt}&rdquo;
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setActiveTab("steps")}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                  activeTab === "steps" ? "bg-white text-black font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                VIBE WORKFLOW
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                  activeTab === "code" ? "bg-white text-black font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                REAL CODE
              </button>
              <a
                href={activeSession.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                title="View GitHub Repository"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Console Content Area */}
          <div className="p-6 sm:p-8 bg-[#040407]">
            {activeTab === "steps" ? (
              <div className="space-y-4">
                {activeSession.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-4 hover:border-blue-500/40 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono text-xs font-bold shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white mb-1">
                        {step.label}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {step.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-black/90 p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-cyan-300 border border-white/10">
                <pre>{activeSession.code}</pre>
              </div>
            )}
          </div>

          {/* Console Footer Status */}
          <div className="px-6 py-3 bg-black/80 border-t border-white/10 font-mono text-[11px] text-slate-400 flex items-center justify-between">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 size={13} />
              <span>STATUS: PRODUCTION SHIPPED &bull; ZERO FABRICATION</span>
            </span>
            <a
              href={activeSession.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <span>INSPECT REPO</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

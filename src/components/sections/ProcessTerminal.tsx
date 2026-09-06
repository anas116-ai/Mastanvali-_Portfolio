"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Terminal, Cpu, Database, CheckCircle2, Shield, Play, Layers } from "lucide-react";

const codeSnippet = `from ansiq.core import Agent, Crew, DAGPipeline
from ansiq.tools import ansiq_tool

@ansiq_tool(name="sql_reconciliation")
def validate_dataset(source_table: str, target_table: str) -> dict:
    """Executes row-level checksum and drift validation."""
    drift_score = compute_checksum(source_table, target_table)
    return {"status": "VALIDATED", "drift": 0.00, "rows_synced": 1420500}

# Initialize Enterprise AI Agent
data_auditor = Agent(
    role="Enterprise Data Inspector",
    goal="Verify zero data loss across SAP BODS transformations",
    llm="ollama/llama3.1",
    tools=[validate_dataset]
)

pipeline = DAGPipeline(crew=Crew([data_auditor]))
result = pipeline.execute(event="DELTA_INGEST_COMPLETE")
print(result.summary)`;

export function ProcessTerminal() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeSnippet[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 15);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  const restartTyping = () => {
    setDisplayedCode("");
    setTypingIndex(0);
  };

  return (
    <section className="section-padding relative">
      <div className="container-portfolio">
        <SectionHeader
          number="03"
          title="ENGINEERING PROCESS & REAL CODEBASE ARCHITECTURE"
          subtitle="How I think, structure systems, and translate complex requirements into working software."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left: 3 Process Pillars */}
          <motion.div variants={fadeUp} className="lg:col-span-5 space-y-4">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl glass-panel border-white/10 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Database size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">
                    PHASE 01 // ENTERPRISE DATA
                  </span>
                  <h4 className="font-mono text-sm font-bold text-white">
                    Data Integrity & ETL Contracts
                  </h4>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Disciplined schema mapping from SAP ECC to target data warehouses. Strict zero-loss validation and delta extraction rules.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl glass-panel-glow border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Cpu size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest">
                    PHASE 02 // AI AGENTIC LAYER
                  </span>
                  <h4 className="font-mono text-sm font-bold text-white">
                    Multi-Agent Orchestration
                  </h4>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Harnessing LLMs with custom tools, DAG workflows, and persistent memory (FTS5) to automate complex reasoning pipelines.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl glass-panel border-white/10 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Shield size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                    PHASE 03 // SHIP & PRODUCTION
                  </span>
                  <h4 className="font-mono text-sm font-bold text-white">
                    Full-Stack Delivery & Offline First
                  </h4>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Packaging robust cross-platform desktop ERPs (Electron + SQLite) and Next.js applications with automated testing and RBAC security.
              </p>
            </div>
          </motion.div>

          {/* Right: Live Interactive Code Terminal */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-7 rounded-2xl glass-panel-glow border-white/15 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          >
            {/* Terminal Top Bar */}
            <div className="px-5 py-3.5 bg-[#07070d] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="font-mono text-xs text-slate-400 ml-2">
                  ansiq/orchestrator/pipeline.py
                </span>
              </div>

              <button
                onClick={restartTyping}
                className="font-mono text-[10px] text-slate-400 hover:text-[var(--color-accent)] flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 transition-colors"
                title="Re-run typing animation"
              >
                <Play size={10} />
                <span>REPLAY</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs md:text-[13px] leading-relaxed text-slate-200 bg-[#040408]/95 overflow-x-auto min-h-[380px]">
              <pre className="text-cyan-300 whitespace-pre-wrap font-mono">
                {displayedCode}
                <span className="inline-block w-2 h-4 bg-[var(--color-accent)] animate-pulse ml-0.5" />
              </pre>
            </div>

            {/* Terminal Footer Telemetry */}
            <div className="px-5 py-2.5 bg-[#07070d] border-t border-white/10 font-mono text-[10px] text-slate-500 flex items-center justify-between">
              <span>PYTHON 3.12 // FASTAPI // DAG ORCHESTRATION</span>
              <span className="text-[var(--color-neon-green)]">● COMPILED SUCCESS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

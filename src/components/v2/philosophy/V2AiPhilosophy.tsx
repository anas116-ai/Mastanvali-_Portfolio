"use client";

import React from "react";
import { Cpu, Terminal, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Problem Scoping & Architecture First",
    desc: "Every system starts with a rigorous specification: database schema normalization, API contract design, and boundary constraints before writing a single prompt.",
  },
  {
    step: "02",
    title: "AI as a Force Multiplier",
    desc: "Leveraging state-of-the-art LLMs (OpenAI, Anthropic, Ollama) as rapid co-pilots for boilerplate generation, pattern exploration, and test synthesis.",
  },
  {
    step: "03",
    title: "Strict Human Verification & Debugging",
    desc: "AI never replaces critical thinking. Every query, algorithm, IPC bridge, and security boundary is reviewed, debugged, and verified manually.",
  },
  {
    step: "04",
    title: "Production Hardening & Optimization",
    desc: "Final optimization focusing on memory limits, offline-first reliability, sub-millisecond query execution, and clean user experience.",
  },
];

export function V2AiPhilosophy() {
  return (
    <section id="philosophy" className="relative w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#060B16] text-[#F3F1E8] font-[family-name:var(--font-outfit)] border-t border-[rgba(100,210,225,0.08)]">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/25">
            <span>[ 04 // BUILDING PHILOSOPHY ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F3F1E8]">
            HOW I BUILD WITH <span className="text-[#14B8A6]">AI</span>
          </h2>
          <p className="text-[#B8C4CC] text-sm sm:text-base leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
            AI is a high-velocity development partner  not a substitute for architectural discipline, edge-case debugging, or software craftsmanship.
          </p>
        </div>

        {/* 4-Step Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl border border-[rgba(100,210,225,0.14)] bg-[#08131D]/80 backdrop-blur-xl space-y-4 hover:border-[#14B8A6]/40 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#14B8A6] px-2.5 py-1 rounded bg-[#14B8A6]/10 border border-[#14B8A6]/20 inline-block">
                  STEP {item.step}
                </span>
                <h3 className="text-lg font-bold uppercase text-[#F3F1E8] tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#B8C4CC] leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-[11px] font-mono text-[#14B8A6]">
                <CheckCircle2 size={13} />
                <span>Verified Workflow</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quotation Callout */}
        <div className="p-6 sm:p-8 rounded-2xl border border-[rgba(100,210,225,0.18)] bg-gradient-to-r from-[#08131D] to-[#0A1A28] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl font-[family-name:var(--font-plus-jakarta)]">
            <div className="text-base sm:text-lg font-bold text-[#F3F1E8]">
              &ldquo;The future belongs to engineers who can bridge enterprise data rigor with high-speed autonomous AI execution.&rdquo;
            </div>
            <div className="text-xs font-mono text-[#14B8A6]">
               Shaik Mastan Vali &bull; SAP BODS Developer &amp; AI Builder
            </div>
          </div>

          <a
            href="https://github.com/anas116-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14B8A6] text-[#050914] font-extrabold text-xs font-mono uppercase tracking-wider hover:bg-[#38BDF8] transition-all hover:scale-105 shrink-0"
          >
            <span>Explore GitHub Repos</span>
          </a>
        </div>
      </div>
    </section>
  );
}

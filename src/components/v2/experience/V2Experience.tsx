"use client";

import React from "react";
import { Database, CheckCircle2, ArrowRight, Building2, Calendar, MapPin } from "lucide-react";

const pipelineStages = [
  { name: "SAP ECC", desc: "Source OLTP Data", color: "#14B8A6" },
  { name: "SAP BODS 4.2", desc: "Batch & Delta Extraction", color: "#38BDF8" },
  { name: "SQL Transform", desc: "Business Rules & Logic", color: "#F47A18" },
  { name: "SAP BW / HANA", desc: "Target Enterprise Data Warehouse", color: "#14B8A6" },
  { name: "Validation", desc: "Reconciliation & SLA Audit", color: "#34D399" },
];

const responsibilities = [
  "Developed and maintained batch and delta ETL workflows in SAP Data Services 4.2 for Grainger enterprise datasets.",
  "Engineered complex SQL query transformations, lookups, joins, and aggregations across relational databases.",
  "Configured and monitored automated data extraction jobs connecting SAP ECC source tables to SAP BW target warehouses.",
  "Resolved critical production pipeline failures, optimized job runtimes, and upheld high-availability SLAs for business analytics.",
  "Executed strict data quality reconciliation scripts to verify record counts and financial integrity across source and target systems.",
];

export function V2Experience() {
  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#050914] text-[#F3F1E8] font-[family-name:var(--font-outfit)] border-t border-[rgba(100,210,225,0.08)]">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/25">
            <span>[ 03 // ENTERPRISE EXPERIENCE ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F3F1E8]">
            PRODUCTION <span className="text-[#F47A18]">ETL</span> AT SCALE
          </h2>
          <p className="text-[#B8C4CC] text-sm sm:text-base leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
            Verified enterprise experience engineering mission-critical data pipelines and integration architectures.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="p-6 sm:p-10 rounded-2xl border border-[rgba(100,210,225,0.16)] bg-[#08131D]/85 backdrop-blur-xl space-y-10 shadow-sm">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[rgba(100,210,225,0.12)]">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/20">
                  <Building2 size={20} />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#F3F1E8]">
                    SOFTWARE ENGINEER
                  </h3>
                  <div className="text-sm font-semibold text-[#14B8A6]">
                    VHS Consulting India Pvt Ltd &bull; Client: TCS / Grainger
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#B8C4CC]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(100,210,225,0.06)] border border-[rgba(100,210,225,0.14)]">
                <Calendar size={13} className="text-[#14B8A6]" />
                <span>March 2022  February 2023 (1 Year)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(100,210,225,0.06)] border border-[rgba(100,210,225,0.14)]">
                <MapPin size={13} className="text-[#F47A18]" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Interactive Visual ETL Architecture Flow */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#14B8A6] flex items-center gap-2">
              <Database size={14} />
              <span>Architectural Data Flow Pipeline (ECC ? BODS ? BW):</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {pipelineStages.map((stage, idx) => (
                <div
                  key={stage.name}
                  className="p-4 rounded-xl border border-[rgba(100,210,225,0.14)] bg-[#050914]/80 space-y-1 relative group hover:border-[#14B8A6]/40 transition-all"
                >
                  <div className="text-[10px] font-mono text-[#B8C4CC] flex items-center justify-between">
                    <span>STAGE 0{idx + 1}</span>
                    {idx < 4 && <ArrowRight size={11} className="text-[#14B8A6] hidden lg:block opacity-60" />}
                  </div>
                  <div
                    className="font-bold text-sm uppercase tracking-wide"
                    style={{ color: stage.color }}
                  >
                    {stage.name}
                  </div>
                  <div className="text-[11px] text-[#B8C4CC] font-[family-name:var(--font-plus-jakarta)] leading-tight">
                    {stage.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities Grid */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3F1E8]">
              Key Responsibilities &amp; Technical Execution:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#B8C4CC] font-[family-name:var(--font-plus-jakarta)]">
              {responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#050914]/40 border border-[rgba(100,210,225,0.08)]">
                  <CheckCircle2 size={15} className="text-[#14B8A6] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

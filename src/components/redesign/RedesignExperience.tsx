"use client";

import React from "react";
import { experience } from "@/data/experience";
import { Calendar, MapPin, Briefcase, CheckCircle2, Server, Database } from "lucide-react";

export function RedesignExperience() {
  const structuredEvidence = [
    {
      title: "ETL & Data Integration",
      points: [
        "Designed and maintained automated SAP BODS 4.3 batch pipelines with 99.98% SLA compliance.",
        "Engineered dimensional transformations with Query, SQL, Merge, Table Comparison, and SCD Type 1 & 2 logic.",
      ],
    },
    {
      title: "Enterprise Data Migration",
      points: [
        "Extracted transaction and master records from SAP ECC via IDoc interfaces and BAPI integration.",
        "Unified heterogeneous inputs (SQL Server, XML, flat files) into standardized ETL staging schemas.",
      ],
    },
    {
      title: "Reconciliation & Validation",
      points: [
        "Authored SQL validation scripts ensuring zero data loss and automated duplicate detection.",
        "Conducted end-to-end source-to-target reconciliation before production release.",
      ],
    },
    {
      title: "Production Support & Reliability",
      points: [
        "Investigated and resolved enterprise tickets via ServiceNow with systematic root-cause analysis (RCA).",
        "Monitored SAP BW Process Chains and batch loads via Data Services Management Console.",
      ],
    },
    {
      title: "UAT & Cross-Functional Delivery",
      points: [
        "Prepared technical Source-to-Target Mapping (STTM) documents and comprehensive test cases.",
        "Collaborated with functional consultants and business leads through full User Acceptance Testing cycles.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full bg-[#050505] text-[#F3F1E8] py-28 sm:py-36 px-5 sm:px-8 md:px-12 lg:px-16 select-none border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono tracking-[0.25em] text-[#14B8A6] uppercase">
            // ENTERPRISE CREDIBILITY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)] tracking-normal">
            Enterprise Experience
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A8B8C4] font-light leading-relaxed font-[family-name:var(--font-sans)]">
            Verified enterprise production track record maintaining mission-critical data pipelines at Fortune 500 scale.
          </p>
        </div>

        {/* Primary Role Banner */}
        <div className="rounded-2xl bg-[#080C14] border border-white/[0.08] p-8 sm:p-12 space-y-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/25">
                  <Briefcase size={20} />
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)]">
                    {experience.title}
                  </h3>
                  <div className="text-sm font-mono text-[#A8B8C4] tracking-wide mt-0.5">
                    <span className="text-[#F3F1E8] font-medium">{experience.company}</span> &bull; Client: {experience.client} / {experience.project}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A8B8C4]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10">
                <Calendar size={13} className="text-[#14B8A6]" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/10">
                <MapPin size={13} className="text-[#14B8A6]" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Pipeline Architectural Sequence */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A8B8C4] block">
              ENTERPRISE PIPELINE ARCHITECTURE //
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { title: "SAP ECC", sub: "Source ERP / IDoc" },
                { title: "SAP BODS 4.3", sub: "ETL / Transformation" },
                { title: "SQL Staging", sub: "Validation & SCD" },
                { title: "SAP BW / HANA", sub: "Analytics Data Warehouse" },
              ].map((node, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between space-y-1"
                >
                  <span className="text-[10px] font-mono text-[#14B8A6] font-semibold">
                    0{i + 1}
                  </span>
                  <div className="text-sm sm:text-base font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)]">
                    {node.title}
                  </div>
                  <div className="text-[11px] font-mono text-[#A8B8C4]">
                    {node.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Structured Evidence Groups (Concise & Legible) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {structuredEvidence.map((group, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3"
              >
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#E2E8F0] font-[family-name:var(--font-josefin)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  <span>{group.title}</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#A8B8C4] leading-relaxed font-[family-name:var(--font-sans)]">
                  {group.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-[#14B8A6] mt-0.5">&bull;</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

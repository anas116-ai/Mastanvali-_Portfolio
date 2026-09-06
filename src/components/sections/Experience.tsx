"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";
import { Database, Server, Cpu, CheckCircle2, ArrowRight, Shield, Layers, FileCode } from "lucide-react";

interface PipelineNode {
  id: string;
  name: string;
  category: string;
  icon: typeof Database;
  description: string;
  telemetry: string;
  status: string;
  technologies: string[];
}

const nodes: PipelineNode[] = [
  {
    id: "ecc",
    name: "SAP ECC / S4",
    category: "Source Extraction",
    icon: Server,
    description: "Enterprise source system delivering operational transaction logs and business entities.",
    telemetry: "STATUS: CONNECTED // EXTRACT: DELTA_LOAD",
    status: "Active Source",
    technologies: ["SAP ECC", "SAP S/4HANA", "IDocs", "RFC"],
  },
  {
    id: "bods",
    name: "SAP BODS 4.3",
    category: "ETL Orchestrator",
    icon: Cpu,
    description: "High-throughput Workflows, Data Flows, and Data Stores executing complex enterprise ETL batch transformations.",
    telemetry: "JOBS: SCHEDULED // RUNTIME: OPTIMAL // DATASTORE: LIVE",
    status: "Core Engine",
    technologies: ["SAP BODS 4.3", "Data Integrator", "Workflows", "Data Services"],
  },
  {
    id: "sql",
    name: "SQL Transform & Rules",
    category: "Data Integrity Layer",
    icon: FileCode,
    description: "Multi-table business transformation logic, source-to-target reconciliation, and automated validation scripts.",
    telemetry: "CHECKSUM: VERIFIED // DRIFT: 0.00%",
    status: "Integrity Gate",
    technologies: ["SQL Server", "T-SQL", "Stored Procedures", "Validation Views"],
  },
  {
    id: "hana",
    name: "SAP BW / HANA",
    category: "Target Data Warehouse",
    icon: Database,
    description: "Enterprise warehouse & analytical database receiving cleansed, reconciled data streams.",
    telemetry: "WRITE: INGESTION COMPLETE // REPLICATION: SYNC",
    status: "Ingested",
    technologies: ["SAP BW", "SAP HANA", "InfoCubes", "Process Chains"],
  },
  {
    id: "servicenow",
    name: "ServiceNow & UAT",
    category: "Support & Observability",
    icon: Shield,
    description: "24/7 incident management, log analysis, user acceptance testing, and stakeholder technical reporting.",
    telemetry: "SLA: 99.9% // INCIDENTS: RESOLVED // UAT: SIGNED-OFF",
    status: "Production Monitored",
    technologies: ["ServiceNow", "Process-Chain Logs", "Incident Triaging"],
  },
];

export function Experience() {
  const [activeNode, setActiveNode] = useState<string>("bods");
  const selectedNode = nodes.find((n) => n.id === activeNode) || nodes[1];

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-portfolio">
        <SectionHeader
          number="02"
          title="ENTERPRISE PIPELINE & EXPERIENCE"
          subtitle="Software Engineer at VHS Consulting &bull; Client: TCS / Grainger &bull; Mar 2022 – Feb 2023"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 space-y-8"
        >
          {/* Interactive Pipeline Node Controller */}
          <motion.div
            variants={fadeUp}
            className="p-6 md:p-8 rounded-2xl glass-panel-glow border-white/10"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-2 text-[var(--color-accent)] font-semibold">
                <Layers size={14} />
                INTERACTIVE DATA FLOW TOPOLOGY (CLICK A NODE TO INSPECT)
              </span>
              <span className="text-slate-500 hidden sm:inline">LIVE SIMULATED TELEMETRY</span>
            </div>

            {/* Horizontal Interactive Pipeline Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
              {nodes.map((node, i) => {
                const Icon = node.icon;
                const isSelected = node.id === activeNode;

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    className={`relative p-4 rounded-xl text-left transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-[var(--color-accent)]/15 border-[var(--color-accent)] shadow-[0_0_25px_rgba(0,240,255,0.2)]"
                        : "bg-black/40 border-white/10 hover:border-white/25 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected
                            ? "bg-[var(--color-accent)] text-black"
                            : "bg-white/5 text-slate-300"
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-[10px] text-slate-500">
                        STAGE 0{i + 1}
                      </span>
                    </div>

                    <h4 className="font-mono text-sm font-bold text-white mb-1">
                      {node.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-light truncate">
                      {node.category}
                    </p>

                    {/* Active Underline Beacon */}
                    {isSelected && (
                      <motion.div
                        layoutId="activePipelineGlow"
                        className="absolute -bottom-[1px] left-3 right-3 h-[2px] bg-[var(--color-accent)] shadow-[0_0_10px_#00f0ff]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Node Telemetry Console */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-xl bg-black/60 border border-[var(--color-accent)]/20 font-mono"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-neon-green)] animate-ping" />
                    <span className="text-xs text-[var(--color-accent)] font-bold uppercase">
                      NODE INSPECTION: {selectedNode.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    {selectedNode.telemetry}
                  </span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed font-sans mb-4">
                  {selectedNode.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider mr-1">
                    Verified Tools:
                  </span>
                  {selectedNode.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Detailed Responsibilities Console */}
          <motion.div
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-4"
          >
            {experience.responsibilities.map((resp, index) => (
              <div
                key={index}
                className="p-4 rounded-xl glass-panel border-white/5 hover:border-white/15 transition-all flex items-start gap-3"
              >
                <div className="mt-1 text-[var(--color-accent)]">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-sm text-slate-200 leading-relaxed font-light">
                    {resp}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

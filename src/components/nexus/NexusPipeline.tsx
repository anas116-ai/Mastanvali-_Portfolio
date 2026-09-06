"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { experience } from "@/data/experience";
import { Database, Server, Cpu, CheckCircle2, Shield, Layers, FileCode, ArrowRight } from "lucide-react";

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
    category: "Target Warehouse",
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

export function NexusPipeline() {
  const [activeNode, setActiveNode] = useState<string>("bods");
  const selected = nodes.find((n) => n.id === activeNode) || nodes[1];

  return (
    <section id="pipeline" className="nexus-episode">
      <div className="container-portfolio relative z-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} className="max-w-4xl space-y-8">
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="font-mono text-sm text-cyan-400">01</span>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">THE ENTERPRISE PIPELINE</h2>
              <p className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase mt-1">Experience &middot; VHS Consulting &middot; Client: TCS / Grainger &middot; Mar 2022 &ndash; Feb 2023</p>
            </div>
          </motion.div>

          {/* Interactive stage selector */}
          <motion.div variants={fadeUp} className="nexus-panel p-5 md:p-7 nexus-panel-hover">
            <div className="flex items-center justify-between mb-5 pb-3 border-b nexus-hairline font-mono text-[10px] text-slate-400">
              <span className="flex items-center gap-2 text-cyan-300 font-bold tracking-wider">
                <Layers size={15} /> LIVE PIPELINE TOPOLOGY (CLICK A STAGE)
              </span>
              <span className="text-slate-500 hidden sm:inline">SIMULATED TELEMETRY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {nodes.map((node, i) => {
                const Icon = node.icon;
                const selectedNode = node.id === activeNode;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    aria-pressed={selectedNode}
                    className={`relative p-4 rounded-xl text-left transition-all cursor-pointer border ${
                      selectedNode
                        ? "bg-cyan-400/10 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.2)]"
                        : "bg-black/40 border-white/10 hover:border-white/25 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg ${selectedNode ? "bg-cyan-400 text-black" : "bg-white/5 text-slate-300"}`}>
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-[10px] text-slate-500">STAGE 0{i + 1}</span>
                    </div>
                    <h4 className="font-mono text-sm font-bold text-white mb-1">{node.name}</h4>
                    <p className="text-[11px] text-slate-400 font-light">{node.category}</p>
                    {selectedNode && (
                      <motion.div layoutId="nexusActiveStage" className="absolute -bottom-px left-3 right-3 h-[2px] bg-cyan-400 shadow-[0_0_10px_#00f0ff]" />
                    )}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mt-5 p-5 rounded-xl bg-black/60 border border-cyan-400/20 font-mono"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-3 border-b nexus-hairline">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-ping" />
                    <span className="text-xs text-cyan-300 font-bold uppercase">Inspect: {selected.name}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">{selected.telemetry}</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-sans mb-4">{selected.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider mr-1">Verified Tools:</span>
                  {selected.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-cyan-200">{t}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Responsibilities */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-4">
            {experience.responsibilities.map((resp, idx) => (
              <div key={idx} className="p-4 rounded-xl nexus-panel border-white/5 hover:border-white/15 transition-all flex items-start gap-3">
                <span className="mt-1 text-cyan-400"><CheckCircle2 size={16} /></span>
                <p className="text-sm text-slate-200 font-light leading-relaxed">{resp}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-slate-400">
            <span className="text-slate-500">ENV:</span>
            {experience.environment.map((e) => (
              <span key={e} className="px-2 py-0.5 rounded bg-white/5 border border-white/10">{e}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

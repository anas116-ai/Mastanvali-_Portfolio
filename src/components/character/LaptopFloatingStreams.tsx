"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Cpu, Layers, Terminal, ShieldCheck } from "lucide-react";

interface StreamItem {
  id: number;
  direction: "left" | "right" | "top-left" | "top-right";
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number; color?: string; strokeWidth?: number }>;
  tag: string;
  title: string;
  sub: string;
  accent: string;
}

// Exactly 6 curated items, played strictly ONE BY ONE in sequence
const streamSequence: StreamItem[] = [
  {
    id: 1,
    direction: "left", // Emerges from laptop left side, flows smoothly to the left
    icon: Database,
    tag: "ENTERPRISE_DATA",
    title: "SELECT * FROM SAP_ECC.INV_MSTR",
    sub: "Enterprise Production ETL",
    accent: "#F47A18",
  },
  {
    id: 2,
    direction: "right", // Emerges from laptop right side, flows smoothly to the right
    icon: Cpu,
    tag: "AI_MULTI_AGENT",
    title: "@ansiq_tool(domain='agent_dag')",
    sub: "Coordinator -> Synthesizer Mesh",
    accent: "#F47A18",
  },
  {
    id: 3,
    direction: "top-left", // Emerges from laptop top, sweeps wide left around chest/shoulder
    icon: Layers,
    tag: "SAP_BODS_4.3",
    title: "BODS_JOB.execute(cdc_mode='DIFF')",
    sub: "SCD Type 2 Historical Dimension",
    accent: "#CBD5E1",
  },
  {
    id: 4,
    direction: "top-right", // Emerges from laptop top, sweeps wide right around chest/shoulder
    icon: Terminal,
    tag: "LOCAL_INFERENCE",
    title: "Ollama.run('llama3.1:70b', temp=0.2)",
    sub: "Zero-Hallucination Guardrails",
    accent: "#F47A18",
  },
  {
    id: 5,
    direction: "left", // Emerges from laptop left side
    icon: ShieldCheck,
    tag: "PRODUCTION_SUPPORT",
    title: "GRAINGER_PIPELINE // 99.98% SLA",
    sub: "Automated Data Reconciliation",
    accent: "#14B8A6",
  },
  {
    id: 6,
    direction: "right", // Emerges from laptop right side
    icon: Terminal,
    tag: "DESKTOP_ERP",
    title: "Electron + better-sqlite3 WAL",
    sub: "ACID Safe &bull; 0.00s Latency",
    accent: "#14B8A6",
  },
];

export function LaptopFloatingStreams() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sequenced One-By-One Timer: advances every 4.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % streamSequence.length);
    }, 4800);

    return () => clearInterval(timer);
  }, []);

  const current = streamSequence[currentIndex];
  const Icon = current.icon;

  // Trajectory coordinates based on direction (Guaranteed 100% CLEAR OF THE FACE)
  const getMotionConfig = (direction: StreamItem["direction"]) => {
    switch (direction) {
      case "left":
        return {
          style: { top: "54%", left: "34%" },
          initial: { opacity: 0, x: 0, y: 0, scale: 0.75 },
          animate: {
            opacity: [0, 1, 0.95, 0],
            x: [0, -60, -120, -170],
            y: [0, 5, 12, 20], // Downward-left trajectory: completely clear of face and body
            scale: [0.75, 1, 0.98, 0.9],
          },
        };
      case "right":
        return {
          style: { top: "54%", right: "34%" },
          initial: { opacity: 0, x: 0, y: 0, scale: 0.75 },
          animate: {
            opacity: [0, 1, 0.95, 0],
            x: [0, 60, 120, 170],
            y: [0, 5, 12, 20], // Downward-right trajectory: completely clear of face and body
            scale: [0.75, 1, 0.98, 0.9],
          },
        };
      case "top-left":
        return {
          style: { top: "49%", left: "36%" },
          initial: { opacity: 0, x: 0, y: 0, scale: 0.75 },
          animate: {
            opacity: [0, 1, 0.95, 0],
            x: [0, -70, -135, -190],
            y: [0, -12, -18, -25], // Outward-left around shoulder: stays below chin
            scale: [0.75, 1, 0.98, 0.9],
          },
        };
      case "top-right":
        return {
          style: { top: "49%", right: "36%" },
          initial: { opacity: 0, x: 0, y: 0, scale: 0.75 },
          animate: {
            opacity: [0, 1, 0.95, 0],
            x: [0, 70, 135, 190],
            y: [0, -12, -18, -25], // Outward-right around shoulder: stays below chin
            scale: [0.75, 1, 0.98, 0.9],
          },
        };
    }
  };

  const config = getMotionConfig(current.direction);

  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-visible select-none">
      {/* Laptop Screen Emission Core Aura */}
      <div
        className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 rounded-full blur-2xl opacity-35 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #F47A18 0%, rgba(244, 122, 24, 0.25) 50%, transparent 80%)",
        }}
      />

      {/* STRICTLY ONE-BY-ONE ANIMATED STREAM BOX */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={config.initial}
          animate={config.animate}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
          transition={{
            duration: 4.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute px-3 py-2 rounded-xl backdrop-blur-2xl shadow-2xl border whitespace-nowrap flex items-center gap-2.5 z-40 pointer-events-none"
          style={{
            ...config.style,
            backgroundColor: "rgba(6, 11, 20, 0.92)",
            borderColor: "rgba(255, 255, 255, 0.14)",
            boxShadow: `0 14px 35px rgba(0, 0, 0, 0.9), 0 0 20px ${current.accent}20`,
          }}
        >
          <div
            className="p-1.5 rounded-lg border text-[10px] shrink-0"
            style={{
              color: current.accent,
              borderColor: `${current.accent}35`,
              backgroundColor: `${current.accent}14`,
            }}
          >
            <Icon size={13} />
          </div>

          <div className="flex flex-col text-left">
            <span
              className="text-[8px] font-mono tracking-widest uppercase font-semibold"
              style={{ color: current.accent }}
            >
              {current.tag}
            </span>
            <span className="text-[11px] sm:text-[12px] font-mono font-medium text-[#F3F1E8]">
              {current.title}
            </span>
            <span className="text-[9px] font-mono text-[#B8C4CC]/70">
              {current.sub}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

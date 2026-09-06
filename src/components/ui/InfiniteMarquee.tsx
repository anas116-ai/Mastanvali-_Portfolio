"use client";

import { motion } from "framer-motion";

const items = [
  "SAP BODS 4.3",
  "ENTERPRISE ETL PIPELINES",
  "AI AGENT ORCHESTRATION",
  "FASTAPI & PYTHON 3.12",
  "REACT 19 & NEXT.JS 15",
  "TCS ENTERPRISE SUPPORT",
  "ELECTRON DESKTOP ERP",
  "SQL SERVER & RECONCILIATION",
  "TRUTH VERIFICATION WORKFLOWS",
  "OFFLINE-FIRST SQLITE & OCR",
];

export function InfiniteMarquee() {
  return (
    <div className="w-full overflow-hidden py-6 border-y border-white/10 bg-black/40 backdrop-blur-xl relative select-none">
      {/* Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030305] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 font-mono text-xs md:text-sm font-bold text-slate-300 uppercase tracking-widest"
          >
            <span>{item}</span>
            <span className="text-[var(--color-accent)] opacity-80">&bull;</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

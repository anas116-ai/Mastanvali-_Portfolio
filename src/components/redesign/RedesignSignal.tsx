"use client";

import React from "react";
import { motion } from "framer-motion";

export function RedesignSignal() {
  const signals = [
    { label: "ENTERPRISE", value: "SAP BODS 4.3 &bull; SQL Server" },
    { label: "AI SYSTEMS", value: "Multi-Agent DAGs &bull; Ollama" },
    { label: "ENGINEERING", value: "Next.js 15 &bull; Electron &bull; SQLite" },
    { label: "RELIABILITY", value: "99.98% SLA &bull; Production ITIL" },
  ];

  return (
    <section className="relative w-full border-y border-white/[0.08] bg-[#070B12]/80 backdrop-blur-md py-6 px-5 sm:px-8 md:px-12 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {signals.map((item, idx) => (
          <div key={idx} className="flex flex-col space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#14B8A6] font-semibold">
              {item.label}
            </span>
            <span
              className="text-xs sm:text-sm font-medium text-[#E2E8F0] tracking-wide font-[family-name:var(--font-sans)]"
              dangerouslySetInnerHTML={{ __html: item.value }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

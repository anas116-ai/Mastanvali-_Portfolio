"use client";

import React from "react";
import { motion } from "framer-motion";

interface CharacterEffectsProps {
  pointerX?: number;
}

export function CharacterEffects({ pointerX = 0 }: CharacterEffectsProps) {
  // 3 subtle, restrained atmospheric floating code chips
  const signals = [
    { text: "SAP BODS 4.3 // 99.98% SLA", side: "left", delay: 0 },
    { text: "Python DAG // AnsiQ Core", side: "right", delay: 2.2 },
    { text: "SQLite WAL // FEFO Engine", side: "left", delay: 4.4 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-visible" aria-hidden="true">
      {signals.map((sig, idx) => {
        const isLeft = sig.side === "left";
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 0.85, 0.75, 0],
              y: [10, -45 - idx * 24],
              x: isLeft ? [-20, -50 + pointerX * 15] : [20, 50 + pointerX * 15],
            }}
            transition={{
              duration: 6.8,
              repeat: Infinity,
              delay: sig.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`absolute top-[45%] ${
              isLeft ? "left-[10%] sm:left-[14%]" : "right-[10%] sm:right-[14%]"
            } px-3 py-1 rounded-md text-[10px] font-mono tracking-wider backdrop-blur-md border border-white/10 bg-[#060B14]/80 text-[#A8B8C4] shadow-lg`}
          >
            <span className="text-[#14B8A6] mr-1.5">&gt;</span>
            <span className="text-[#E2E8F0] font-medium">{sig.text}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

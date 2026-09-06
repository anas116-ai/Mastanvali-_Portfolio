"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Search, Code2, Rocket } from "lucide-react";

const codeLines = [
  'from fastapi import FastAPI',
  'app = FastAPI()',
  '',
  '@app.get("/health")',
  'def health():',
  '    return {"status": "ok", "db": "sqlite"}',
  '',
  'def reconcile(source, target):',
  '    rows = validated(source)',
  '    return rows if check(target, rows) else rollback()',
];

function DataFlowSchematic() {
  const nodes = [
    { label: "ECC", x: 8, y: 45 },
    { label: "BODS", x: 40, y: 45 },
    { label: "SQL", x: 65, y: 45 },
    { label: "BW/HANA", x: 88, y: 35 },
    { label: "Validate", x: 88, y: 62 },
  ];
  return (
    <svg viewBox="0 0 100 80" className="w-full" aria-hidden preserveAspectRatio="none">
      <g stroke="rgba(20, 184, 166, 0.5)" strokeWidth="1.5" fill="none">
        <path d="M14,45 H34" />
        <path d="M46,45 H59" />
        <path d="M71,45 V40 H82" />
        <path d="M71,45 V62 H82" />
      </g>
      {nodes.map((n) => (
        <g key={n.label}>
          <g transform={`translate(${n.x},${n.y})`}>
            <rect x="-4" y="-5" width="12" height="10" rx="2" fill="rgba(20, 184, 166, 0.2)" stroke="rgba(20, 184, 166, 0.6)" />
          </g>
          <text x={n.x + 3} y={n.y + 3} fontSize="4" fill="rgba(255,255,255,0.9)" textAnchor="middle" fontFamily="Inter, sans-serif">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function TypingCode() {
  const [typed, setTyped] = useState("");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTyped(codeLines.join("\n"));
      return;
    }

    const el = document.getElementById("process-card-2");
    if (!el) return;

    const full = codeLines.join("\n");
    let i = 0;
    let idx = 0;
    let timer: ReturnType<typeof setInterval> | null = null;

    const shouldRun = () => idx < full.length;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && shouldRun()) {
          clearInterval(timer!);
          timer = setInterval(() => {
            idx++;
            setTyped(full.slice(0, idx));
            if (idx >= full.length) clearInterval(timer!);
          }, 18);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      if (timer) clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <pre className="overflow-hidden rounded-xl bg-black/50 p-4 font-mono text-[11px] leading-relaxed text-emerald-300">
      <code>{typed}
        <span className="animate-pulse">&block;</span>
      </code>
    </pre>
  );
}

function MetricsDashboard() {
  const bars = [40, 65, 55, 80, 70, 90];
  return (
    <svg viewBox="0 0 200 90" className="w-full" aria-hidden>
      <line x1="10" y1="80" x2="190" y2="80" stroke="rgba(255,255,255,0.15)" />
      <line x1="10" y1="50" x2="190" y2="50" stroke="rgba(255,255,255,0.08)" />
      <line x1="10" y1="20" x2="190" y2="20" stroke="rgba(255,255,255,0.08)" />
      {bars.map((b, i) => (
        <rect key={i} x={18 + i * 29} y={80 - b} width="16" height={b} rx="2" fill="rgba(20, 184, 166, 0.6)" />
      ))}
      <polyline
        points="20,62 60,50 100,40 140,30 180,18"
        fill="none"
        stroke="rgba(52,211,153,0.9)"
        strokeWidth="2"
      />
    </svg>
  );
}

export function GlassProcess() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Research & Enterprise Data",
      accent: "text-blue-400",
      body: (
        <div className="glass-card rounded-xl p-4">
          <DataFlowSchematic />
          <div className="mt-3 space-y-1.5">
            {["Extract from SAP ECC", "Transform with SQL", "Load to BW / HANA", "Validate counts & reconcile"].map((s) => (
              <div key={s} className="flex items-center gap-2 text-xs text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />
                {s}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      step: "02",
      icon: Code2,
      title: "Design / AI-Accelerated Build",
      accent: "text-purple-400",
      body: (
        <div id="process-card-2" className="glass-card rounded-xl p-4">
          <TypingCode />
          <p className="mt-3 text-xs text-gray-400">
            FastAPI + SQLite + Electron: scaffolded and accelerated with LLM partnerships.
          </p>
        </div>
      ),
    },
    {
      step: "03",
      icon: Rocket,
      title: "Test, Debug & Ship",
      accent: "text-indigo-400",
      body: (
        <div className="glass-card rounded-xl p-4">
          <MetricsDashboard />
          <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
            <span>Pipeline: ECC → BODS → SQL → BW/HANA → Validation → Production</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="process" className="section-spacing relative">
      <div className="container-portfolio">
        <div className="mb-14 max-w-2xl">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Process
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How I build
          </h2>
          <p className="text-base leading-relaxed text-gray-400">
            A disciplined path from enterprise data rigor to AI-accelerated shipping.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.step} variants={fadeUp} className="glass-card rounded-2xl p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 ${step.accent}`}>
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-gray-400">{step.step}</span>
                </div>
                <h3 className="mb-4 text-lg font-bold text-white">{step.title}</h3>
                {step.body}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

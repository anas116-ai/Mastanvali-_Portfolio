"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { GraduationCap, MapPin, Globe2, Clock, CheckCircle2 } from "lucide-react";

const info = [
  { icon: GraduationCap, label: "Education", value: "B.Tech ECE — JNTUK (2019)" },
  { icon: MapPin, label: "Location", value: "India · Open to Relocation" },
  { icon: Globe2, label: "Languages", value: "English, Hindi, Telugu" },
  { icon: Clock, label: "Availability", value: "Immediate Joiner" },
];

export function GlassAbout() {
  return (
    <section id="about" className="section-spacing relative">
      <div className="container-portfolio">
        <div className="mb-14 max-w-2xl">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            About
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From enterprise data to AI-built products
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-start gap-8 lg:grid-cols-12"
        >
          {/* Large image left with hover scale (deterministic SVG, no external images) */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 overflow-hidden rounded-2xl glass-card"
          >
            <div className="group relative">
              <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" className="h-full w-full transition-transform duration-500 group-hover:scale-105" aria-hidden>
                <defs>
                  <linearGradient id="about-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="60%" stopColor="#312e81" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
                <rect width="400" height="480" fill="url(#about-bg)" />
                <circle cx="200" cy="210" r="110" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <circle cx="200" cy="210" r="80" fill="rgba(255,255,255,0.06)" />
                <text x="200" y="212" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="96" fontWeight="700" fontFamily="Inter, sans-serif">
                  SMV
                </text>
                <g stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
                  <line x1="40" y1="320" x2="360" y2="320" />
                  <line x1="40" y1="370" x2="360" y2="370" />
                  <line x1="40" y1="420" x2="360" y2="420" />
                </g>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-lg font-bold text-white">Shaik Mastan Vali</div>
                <div className="text-xs text-gray-300">SAP BODS Developer &amp; AI Product Builder</div>
              </div>
            </div>
          </motion.div>

          {/* Bio and info cards right */}
          <div className="lg:col-span-7 space-y-5">
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <p className="text-sm leading-relaxed text-gray-300">
                I started in enterprise data engineering as a Software Engineer at{" "}
                <strong className="text-white">VHS Consulting India Pvt Ltd</strong>, handling SAP BODS 4.3
                ETL, SQL transforms, validation and production support for{" "}
                <strong className="text-white">TCS / Grainger</strong>.
              </p>
              <p className="text-sm leading-relaxed text-gray-300">
                Expanding on that foundation, I now build production apps with AI acceleration —
                desktop ERPs, agentic frameworks, and full-stack SaaS — applying rigorous
                engineering to architecture, data models, and debugging.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {info.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    className="glass-card rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                      <Icon size={14} />
                      <span>{item.label}</span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeUp}
              className="glass-card flex items-center gap-3 rounded-2xl p-5"
            >
              <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
              <p className="text-sm text-gray-300">
                Open to SAP Data Engineering, AI &amp; Agentic Systems, and Software Development roles.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

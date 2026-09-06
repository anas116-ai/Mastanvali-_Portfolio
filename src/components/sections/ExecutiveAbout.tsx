"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { GraduationCap, MapPin, Globe2, Clock, UserCheck, Sparkles } from "lucide-react";

const info = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech in Electronics & Communication Engineering",
    sub: "JNTUK (Jawaharlal Nehru Technological University) — 2019",
    color: "blue",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Immediate Joiner",
    sub: "Ready to join engineering & enterprise data teams immediately",
    color: "emerald",
  },
  {
    icon: MapPin,
    label: "Location & Mobility",
    value: "India (Open to Relocation)",
    sub: "Flexible across all major tech hubs & remote workflows",
    color: "purple",
  },
  {
    icon: Globe2,
    label: "Languages",
    value: "English, Hindi, Telugu",
    sub: "Fluent technical & stakeholder communication",
    color: "cyan",
  },
];

export function ExecutiveAbout() {
  return (
    <section id="about" className="section-spacing relative">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-600/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-portfolio">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Background &bull; 04
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            About Me &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F47A18, #14B8A6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Professional Background
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A developer who bridges the gap between deep enterprise systems and fast-paced AI product engineering.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-8 items-start"
        >
          {/* Bio Story */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-6 p-6 sm:p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400">
                <UserCheck size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Shaik Mastan Vali
                </h3>
                <p className="text-xs text-slate-400">
                  SAP BODS Developer & AI Product Builder
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                I hold a <strong className="text-white font-medium">Bachelor of Technology (B.Tech)</strong> in Electronics and Communication Engineering from JNTUK (2019). My professional career began at <strong className="text-white font-medium">VHS Consulting India Pvt Ltd</strong> as a Software Engineer, handling SAP BODS 4.3 ETL development, SQL transformation rules, data reconciliation, and production support for <strong className="text-white font-medium">TCS / Grainger</strong>.
              </p>
              <p>
                Driven by a strong curiosity for software engineering and modern AI tools, I expanded into <strong className="text-white font-medium">building production-grade applications</strong>. I leverage LLMs as development partners to rapidly scaffold and prototype, while applying rigorous engineering principles to system architecture, database design, and debugging.
              </p>
            </div>
          </motion.div>

          {/* Credentials Grid — enhanced cards */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
          >
            {info.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group p-5 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.1] flex flex-col justify-between transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-blue-400">
                      <Icon size={14} />
                      <span>{item.label}</span>
                    </div>
                    <p className="text-sm font-bold text-white leading-snug">
                      {item.value}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-white/[0.04] font-normal leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

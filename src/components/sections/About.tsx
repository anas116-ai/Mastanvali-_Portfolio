"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, MapPin, Globe2, Clock, UserCheck } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    label: "EDUCATION",
    value: "B.Tech in Electronics & Communication Engineering",
    sub: "JNTUK (Jawaharlal Nehru Technological University) — 2019",
  },
  {
    icon: Clock,
    label: "AVAILABILITY",
    value: "Immediate Joiner",
    sub: "Available for enterprise & high-growth teams immediately",
  },
  {
    icon: MapPin,
    label: "LOCATION & MOBILITY",
    value: "India (Open to Relocation)",
    sub: "Flexible across major tech hubs & remote workflows",
  },
  {
    icon: Globe2,
    label: "LANGUAGES",
    value: "English, Hindi, Telugu",
    sub: "Fluent cross-team stakeholder communication",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-portfolio">
        <SectionHeader
          number="07"
          title="PROFESSIONAL PROFILE & CREDENTIALS"
          subtitle="Enterprise data background, systems curiosity, and an engineering approach to modern AI products."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Bio Box */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-6 p-8 rounded-2xl glass-panel-glow border-white/10 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--color-accent)]">
                <UserCheck size={20} />
              </div>
              <h3 className="font-mono text-base font-bold text-white tracking-wider">
                SHAIK MASTAN VALI
              </h3>
            </div>

            <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
              <p>
                I hold a <strong className="text-white font-semibold">Bachelor of Technology (B.Tech)</strong> in Electronics and Communication Engineering from JNTUK (2019). My technical career began in enterprise systems engineering at <strong className="text-white font-semibold">VHS Consulting India Pvt Ltd</strong>, executing SAP BODS 4.3 ETL development, SQL transformation validation, and production support for <strong className="text-[var(--color-accent)] font-semibold">TCS / Grainger</strong>.
              </p>
              <p>
                Driven by a passion for modern software architecture, I expanded into <strong className="text-white font-semibold">AI-assisted product engineering</strong>. I combine rigorous enterprise data principles with modern LLM orchestration frameworks, building real-world desktop ERPs, multi-agent frameworks, and SaaS web systems.
              </p>
            </div>
          </motion.div>

          {/* Right Credentials Grid */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
          >
            {credentials.map((cred) => {
              const Icon = cred.icon;

              return (
                <div
                  key={cred.label}
                  className="p-5 rounded-xl glass-panel border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--color-accent)] tracking-widest uppercase">
                      <Icon size={14} />
                      <span>{cred.label}</span>
                    </div>
                    <p className="font-mono text-xs font-bold text-white leading-snug">
                      {cred.value}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-400 font-light mt-3 pt-3 border-t border-white/5">
                    {cred.sub}
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

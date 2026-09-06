"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { skillClusters } from "@/data/skills";
import { GraduationCap, MapPin, Globe2, Clock, UserCheck, Database, ShieldCheck, Cpu, CheckCircle2, Code2 } from "lucide-react";

const icons = [GraduationCap, Clock, MapPin, Globe2];
const clusterIcons = [Database, ShieldCheck, Cpu];

const credentials = [
  { icon: GraduationCap, label: "EDUCATION", value: "B.Tech in Electronics & Communication Engineering", sub: "JNTUK — 2019" },
  { icon: Clock, label: "AVAILABILITY", value: "Immediate Joiner", sub: "Enterprise & high-growth teams" },
  { icon: MapPin, label: "LOCATION", value: "India (Open to Relocation)", sub: "Major tech hubs & remote" },
  { icon: Globe2, label: "LANGUAGES", value: "English, Hindi, Telugu", sub: "Cross-team stakeholder comms" },
];

export function NexusProfile() {
  return (
    <section id="profile" className="nexus-episode">
      <div className="container-portfolio relative z-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} className="space-y-10">
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <span className="font-mono text-sm text-cyan-400">04</span>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">PROFILE &amp; CAPABILITIES</h2>
              <p className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase mt-1">Enterprise data background &middot; systems curiosity &middot; modern AI products</p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Bio */}
            <motion.div variants={fadeUp} className="lg:col-span-5 p-7 rounded-2xl nexus-panel border-cyan-400/20 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400"><UserCheck size={20} /></div>
                <h3 className="font-mono text-base font-bold text-white tracking-wider">SHAIK MASTAN VALI</h3>
              </div>
              <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  I hold a <strong className="text-white font-semibold">B.Tech</strong> in Electronics and Communication
                  Engineering from JNTUK (2019). My technical career began in enterprise systems engineering at{" "}
                  <strong className="text-white font-semibold">VHS Consulting India Pvt Ltd</strong>, executing SAP BODS 4.3 ETL
                  development, SQL transformation validation, and production support for{" "}
                  <strong className="text-cyan-400 font-semibold">TCS / Grainger</strong>.
                </p>
                <p>
                  Driven by a passion for modern software architecture, I expanded into{" "}
                  <strong className="text-white font-semibold">AI-assisted product engineering</strong> — building desktop ERPs,
                  multi-agent frameworks, and SaaS web systems with rigorous enterprise data discipline.
                </p>
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div variants={fadeUp} className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div key={cred.label} className="p-5 rounded-xl nexus-panel border-white/5 hover:border-white/20 transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-400 tracking-widest uppercase"><Icon size={14} /><span>{cred.label}</span></div>
                      <p className="font-mono text-xs font-bold text-white leading-snug">{cred.value}</p>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light mt-3 pt-3 border-t nexus-hairline">{cred.sub}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Capability clusters */}
          <div className="grid lg:grid-cols-3 gap-6 pt-2">
            {skillClusters.map((cluster, idx) => {
              const Icon = clusterIcons[idx] || Code2;
              return (
                <motion.div key={cluster.title} variants={fadeUp} className="p-7 rounded-2xl nexus-panel border-white/10 hover:border-cyan-400/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b nexus-hairline">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400"><Icon size={22} /></div>
                      <div>
                        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">DOMAIN 0{idx + 1}</span>
                        <h3 className="font-mono text-base font-bold text-white tracking-wide">{cluster.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {cluster.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2.5 text-sm text-slate-300 font-light">
                          <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-4 border-t nexus-hairline font-mono text-[10px] text-slate-500 flex items-center justify-between">
                    <span>VERIFIED // ACTIVE</span>
                    <span className="text-[#00ff9d]">● READY</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

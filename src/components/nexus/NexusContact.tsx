"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Mail, Linkedin, Github, FileText, ArrowUpRight, Copy, Check, Terminal, Phone, Radio } from "lucide-react";

export function NexusContact() {
  const [copied, setCopied] = useState(false);
  const email = "sk.mastanvali0116@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="transmission" className="nexus-episode overflow-hidden border-t nexus-hairline">
      {/* base glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[820px] h-[360px] bg-gradient-to-t from-cyan-500/15 via-purple-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="container-portfolio relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} variants={stagger} className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div variants={fadeUp} className="nexus-eyebrow mx-auto">
            <Radio size={14} className="text-[#00ff9d] animate-pulse" />
            <span>TRANSMISSION BEACON ONLINE // OPEN FOR OPPORTUNITIES</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-[clamp(2.4rem,7vw,6rem)] font-space font-bold tracking-[-0.03em] leading-[0.98] text-white">
            LET&apos;S BUILD
            <br />
            <span className="bg-gradient-to-r from-[#00f0ff] via-[#14B8A6] to-[#14B8A6] bg-clip-text text-transparent">
              SOMETHING USEFUL.
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Available for high-impact roles across{" "}
            <span className="text-white font-medium">SAP Data Engineering</span>,{" "}
            <span className="text-white font-medium">AI &amp; Agentic Systems</span>, and{" "}
            <span className="text-white font-medium">Software Engineering</span>.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href={`mailto:${email}`} className="px-7 py-4 rounded-xl bg-cyan-400 text-black font-bold font-mono text-xs uppercase tracking-wider hover:bg-cyan-300 transition-all shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:scale-105 flex items-center gap-2">
              <Mail size={16} /> SEND AN EMAIL <ArrowUpRight size={14} />
            </a>
            <button onClick={handleCopy} className="px-5 py-4 rounded-xl nexus-panel text-white font-mono text-xs uppercase tracking-wider hover:border-cyan-400 transition-all flex items-center gap-2 cursor-pointer">
              {copied ? (
                <><Check size={16} className="text-[#00ff9d]" /><span className="text-[#00ff9d] font-bold">COPIED!</span></>
              ) : (
                <><Copy size={16} className="text-slate-400" /> COPY EMAIL</>
              )}
            </button>
            <a href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/" target="_blank" rel="noopener noreferrer" className="px-5 py-4 rounded-xl nexus-panel text-white font-mono text-xs uppercase tracking-wider hover:border-blue-400 hover:text-blue-300 transition-all flex items-center gap-2">
              <Linkedin size={16} /> LINKEDIN <ArrowUpRight size={14} className="opacity-60" />
            </a>
            <a href="https://github.com/anas116-ai" target="_blank" rel="noopener noreferrer" className="px-5 py-4 rounded-xl nexus-panel text-white font-mono text-xs uppercase tracking-wider hover:border-purple-400 hover:text-purple-300 transition-all flex items-center gap-2">
              <Github size={16} /> GITHUB <ArrowUpRight size={14} className="opacity-60" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-4 rounded-xl nexus-panel text-white font-mono text-xs uppercase tracking-wider hover:border-emerald-400 hover:text-emerald-300 transition-all flex items-center gap-2">
              <FileText size={16} /> RESUME <ArrowUpRight size={14} className="opacity-60" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 font-mono text-xs text-slate-500">
            <span className="flex items-center gap-2"><Phone size={14} className="text-cyan-400" /><span className="text-slate-300">+91 8374882630</span></span>
            <span className="hidden sm:inline text-slate-600">&middot;</span>
            <span className="flex items-center gap-2"><Terminal size={14} className="text-cyan-400" /><span className="text-slate-300">{email}</span></span>
          </motion.div>

          <motion.p variants={fadeUp} className="pt-6 font-mono text-[10px] tracking-[0.2em] text-slate-600">
            END OF TRANSMISSION // DATA &rarr; INTELLIGENCE &copy; SHAIK MASTAN VALI
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

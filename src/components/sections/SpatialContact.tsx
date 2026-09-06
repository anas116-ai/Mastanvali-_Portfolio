"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Mail, Linkedin, Github, FileText, ArrowUpRight, Copy, Check, Terminal, Phone, Radio } from "lucide-react";

export function SpatialContact() {
  const [copied, setCopied] = useState(false);
  const email = "sk.mastanvali0116@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="transmission" className="py-28 md:py-36 relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#030305] via-[#06060e] to-[#030305]">
      {/* Background Transmission Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-gradient-to-t from-[var(--color-accent)]/15 via-purple-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="container-portfolio relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Transmission Status Capsule */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-[var(--color-neon-green)] shadow-[0_0_20px_rgba(0,255,157,0.15)]"
          >
            <Radio size={14} className="animate-pulse text-[var(--color-neon-green)]" />
            <span>TRANSMISSION BEACON ONLINE // OPEN FOR OPPORTUNITIES</span>
          </motion.div>

          {/* Large Kinetic Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-tight text-glow-cyan"
          >
            LET&apos;S BUILD SOMETHING USEFUL.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Available for high-impact roles across <span className="text-white font-medium">SAP Data Engineering</span>, <span className="text-white font-medium">AI & Agentic Systems</span>, and <span className="text-white font-medium">Software Engineering</span>.
          </motion.p>

          {/* Interactive Channels Hub */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            {/* Primary Email CTA */}
            <a
              href={`mailto:${email}`}
              className="px-7 py-4 rounded-xl bg-[var(--color-accent)] text-black font-bold font-mono text-xs uppercase tracking-wider hover:bg-[var(--color-accent-glow)] transition-all shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:scale-105 flex items-center gap-2"
            >
              <Mail size={16} />
              <span>SEND AN EMAIL</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopy}
              className="px-5 py-4 rounded-xl glass-panel text-white font-mono text-xs uppercase tracking-wider hover:border-[var(--color-accent)] transition-all flex items-center gap-2"
              title="Copy Email to Clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-[var(--color-neon-green)]" />
                  <span className="text-[var(--color-neon-green)] font-bold">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-slate-400" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl glass-panel text-white font-mono text-xs uppercase tracking-wider hover:border-blue-400 hover:text-blue-300 transition-all flex items-center gap-2"
            >
              <Linkedin size={16} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={14} className="opacity-60" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl glass-panel text-white font-mono text-xs uppercase tracking-wider hover:border-purple-400 hover:text-purple-300 transition-all flex items-center gap-2"
            >
              <Github size={16} />
              <span>GITHUB</span>
              <ArrowUpRight size={14} className="opacity-60" />
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl glass-panel text-white font-mono text-xs uppercase tracking-wider hover:border-emerald-400 hover:text-emerald-300 transition-all flex items-center gap-2"
            >
              <FileText size={16} />
              <span>RESUME</span>
              <ArrowUpRight size={14} className="opacity-60" />
            </a>
          </motion.div>

          {/* Telemetry Contact Bar */}
          <motion.div
            variants={fadeUp}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 font-mono text-xs text-slate-500"
          >
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[var(--color-accent)]" />
              <span className="text-slate-300">+91 8374882630</span>
            </div>
            <span className="hidden sm:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-[var(--color-accent)]" />
              <span className="text-slate-300">{email}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

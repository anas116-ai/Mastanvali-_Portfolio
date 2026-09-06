"use client";

import React from "react";
import { Mail, Github, Linkedin, FileText, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function RedesignContact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#050505] text-[#F3F1E8] py-32 sm:py-40 px-5 sm:px-8 md:px-12 lg:px-16 select-none border-t border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto space-y-12 text-center flex flex-col items-center">
        {/* Subtle Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#14B8A6] uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
          <span>OPEN FOR OPPORTUNITIES</span>
        </div>

        {/* Closing Master Statement */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F3F1E8] font-[family-name:var(--font-josefin)] tracking-tight">
            Have a System Worth Building?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A8B8C4] font-light leading-relaxed max-w-xl mx-auto font-[family-name:var(--font-sans)]">
            Open to roles in enterprise data engineering (SAP BODS / ETL), AI agent systems, and full-stack software development. Ready for immediate global relocation.
          </p>
        </div>

        {/* Primary CTA Hub */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="mailto:sk.mastanvali0116@gmail.com"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#F3F1E8] text-[#050505] hover:bg-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider shadow-2xl hover:shadow-[#14B8A6]/25 transition-all duration-200"
          >
            <Mail size={16} />
            <span>SEND AN EMAIL</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#F3F1E8] text-xs sm:text-sm font-mono tracking-wider transition-all duration-200"
          >
            <Linkedin size={16} />
            <span>LINKEDIN</span>
            <ArrowUpRight size={13} />
          </a>

          <a
            href="https://github.com/anas116-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#F3F1E8] text-xs sm:text-sm font-mono tracking-wider transition-all duration-200"
          >
            <Github size={16} />
            <span>GITHUB</span>
            <ArrowUpRight size={13} />
          </a>

          <a
            href="tel:8374882630"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#F3F1E8] text-xs sm:text-sm font-mono tracking-wider transition-all duration-200"
          >
            <span>+91 8374882630</span>
          </a>
        </div>
      </div>
    </section>
  );
}

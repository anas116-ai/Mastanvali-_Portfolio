"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function V2Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-12 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#040710] text-[#B8C4CC] font-[family-name:var(--font-outfit)] border-t border-[rgba(100,210,225,0.12)]">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
        {/* Brand Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[#F3F1E8] font-bold uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-[#14B8A6]" />
            <span>SHAIK MASTAN VALI</span>
          </div>
          <span className="hidden sm:inline">&bull;</span>
          <span>SAP BODS Developer &amp; AI Builder &bull; 2026</span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-[#B8C4CC]">
          <a href="#work" className="hover:text-[#14B8A6] transition-colors">
            Work
          </a>
          <a href="#capabilities" className="hover:text-[#14B8A6] transition-colors">
            Capabilities
          </a>
          <a href="#experience" className="hover:text-[#14B8A6] transition-colors">
            Experience
          </a>
          <a href="#philosophy" className="hover:text-[#14B8A6] transition-colors">
            Philosophy
          </a>
          <a href="#contact" className="hover:text-[#14B8A6] transition-colors">
            Contact
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-[#08131D] border border-[rgba(100,210,225,0.16)] text-[#F3F1E8] hover:text-[#14B8A6] hover:border-[#14B8A6] transition-all flex items-center gap-2"
          title="Back to Top"
        >
          <ArrowUp size={14} />
          <span className="text-[11px] font-bold">TOP</span>
        </button>
      </div>
    </footer>
  );
}

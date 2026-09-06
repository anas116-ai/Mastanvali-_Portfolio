"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, ArrowLeft, ArrowUpRight } from "lucide-react";

export function RedesignNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/60"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Anchor */}
        <div className="flex items-center gap-4">
          <Link
            href="#hero"
            className="flex items-center gap-2.5 text-[#F3F1E8] hover:text-white transition-colors group"
          >
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_8px_#14B8A6]" />
            <span className="font-[family-name:var(--font-outfit)] font-black text-sm tracking-[0.16em] uppercase">
              MASTAN VALI
            </span>
          </Link>

          {/* Non-destructive preview badge */}
          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[10px] font-mono text-[#A8B8C4] hover:text-white transition-colors"
            title="Switch back to original live version"
          >
            <ArrowLeft size={10} />
            <span>ORIGINAL VERSION</span>
          </Link>
        </div>

        {/* Center Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-[#A8B8C4] uppercase">
          <a href="#about" className="hover:text-[#F3F1E8] transition-colors py-1">
            About
          </a>
          <a href="#experience" className="hover:text-[#F3F1E8] transition-colors py-1">
            Experience
          </a>
          <a href="#capabilities" className="hover:text-[#F3F1E8] transition-colors py-1">
            Capabilities
          </a>
          <a href="#projects" className="hover:text-[#F3F1E8] transition-colors py-1">
            Work
          </a>
          <a href="#contact" className="hover:text-[#F3F1E8] transition-colors py-1">
            Contact
          </a>
        </nav>

        {/* Right Utility Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/anas116-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#A8B8C4] hover:text-[#F3F1E8] hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#A8B8C4] hover:text-[#F3F1E8] hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/[0.08] hover:bg-[#F3F1E8] hover:text-[#050505] text-[#F3F1E8] border border-white/10 text-xs font-mono font-medium tracking-wider transition-all duration-200"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </header>
  );
}

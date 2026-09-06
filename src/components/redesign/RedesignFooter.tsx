"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function RedesignFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#030712] text-[#A8B8C4] border-t border-white/[0.08] py-12 px-5 sm:px-8 md:px-12 select-none font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="font-[family-name:var(--font-outfit)] font-bold text-sm tracking-wider text-[#F3F1E8] uppercase">
            MASTAN VALI
          </span>
          <span className="hidden sm:inline text-white/20">&bull;</span>
          <span>Enterprise Data &bull; Autonomous AI &bull; Product Building</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:sk.mastanvali0116@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/anas116-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-white/50 hover:text-white transition-colors"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 mt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#64748B]">
        <span>&copy; {new Date().getFullYear()} Shaik Mastan Vali. All rights reserved.</span>
        <span className="mt-2 sm:mt-0">Built with Next.js 15, React 19, Framer Motion &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}

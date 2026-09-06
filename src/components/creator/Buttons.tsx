"use client";

import { ArrowUpRight, Mail } from "lucide-react";

export function ContactButton({
  label = "Contact Me",
  href = "#contact",
  className = "",
}: {
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F3F1E8] bg-[#0E1524]/90 hover:bg-[#162034] border border-white/20 hover:border-[#F5F5F0]/50 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${className}`}
    >
      <Mail size={15} className="relative z-10 text-[#E5C378] group-hover:text-[#F3E5AB] transition-colors duration-300 stroke-[2.2]" />
      <span className="relative z-10 font-bold tracking-wider text-[#F3F1E8] font-[family-name:var(--font-outfit)]">
        {label}
      </span>
      <ArrowUpRight size={15} className="relative z-10 text-[#CBD5E1] group-hover:text-white stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function LiveProjectButton({
  label = "Inspect Repository",
  href = "#",
  className = "",
}: {
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden inline-flex items-center gap-2 rounded-xl border px-5 py-3 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F3F1E8] bg-[#0A101D]/90 hover:bg-[#121B2D] hover:border-[#F47A18]/60 border-white/15 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg active:translate-y-0 ${className}`}
    >
      <span className="relative z-10 font-[family-name:var(--font-outfit)]">{label}</span>
      <ArrowUpRight size={14} className="relative z-10 text-[#F47A18] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
    </a>
  );
}

export { LiveProjectButton as ProjectLink };

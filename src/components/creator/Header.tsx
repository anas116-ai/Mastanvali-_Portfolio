"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const linkClass = "text-mist font-ui text-[13px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ace364] hover:text-[#ace364]";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-40 w-full">
      <div className="max-w-7xl mx-auto pr-4 pl-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pt-5 pb-5 [animation:fadeSlideIn_0.5s_ease-out_0.1s_both]">
          <Logo />

          <nav className="font-ui hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="font-ui hidden items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-medium uppercase tracking-[0.14em] text-slate-300 transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ace364] sm:inline-flex"
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4 text-[#ace364]" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 backdrop-blur-sm transition hover:bg-white/10 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute bottom-0 right-0 top-0 flex w-full max-w-sm flex-col border-l border-white/10 bg-[#0f0f11]/95 shadow-2xl backdrop-blur-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <span className="font-label text-slate-300 text-sm font-medium tracking-[0.12em]">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="font-ui flex-1 space-y-1 p-6">
                {navLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-[15px] font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-4 border-t border-white/10 pt-4">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="bg-[#ace364] flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-bold text-[#070709] transition hover:bg-[#cdd973]"
                  >
                    Hire Me
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* progressive blur top */}
      <div className="gradient-blur">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </header>
  );
}
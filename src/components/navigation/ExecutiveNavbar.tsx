"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, ArrowUpRight, Mail } from "lucide-react";

const links = [
  { label: "Selected Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "How I Build", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function ExecutiveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 flex justify-center pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-6 py-3.5 rounded-2xl transition-all duration-500 max-w-5xl w-full ${
            scrolled
              ? "bg-[#0c0c0e]/85 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)]"
              : "bg-[#0c0c0e]/30 backdrop-blur-md border border-white/[0.06]"
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Name — with dot glow */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            title="Shaik Mastan Vali"
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-blue-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Mastan Vali
            </span>
          </a>

          {/* Desktop Nav Links — refined spacing */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[11px] font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Hub */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/[0.04]"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/[0.04]"
            >
              <Linkedin size={15} />
            </a>

            <a
              href="mailto:sk.mastanvali0116@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-slate-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ml-1"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/[0.04] ml-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu — enhanced */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#000000]/98 backdrop-blur-3xl md:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-colors flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={20} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                </motion.a>
              ))}

              <div className="pt-6 border-t border-white/10">
                <a
                  href="mailto:sk.mastanvali0116@gmail.com"
                  className="w-full py-3.5 rounded-xl bg-white text-black text-sm font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
                >
                  <Mail size={16} />
                  <span>Get in touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

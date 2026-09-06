"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Github, Linkedin } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
];

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <nav
        aria-label="Main"
        className={`pointer-events-auto flex items-center justify-between gap-4 w-full max-w-5xl px-5 py-3 rounded-2xl ring-1 ring-white/10 backdrop-blur-lg transition-colors duration-300 ${
          scrolled ? "bg-black/60" : "bg-black/30"
        }`}
      >
        <a href="#" className="flex items-center gap-3 group" title="Shaik Mastan Vali">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white text-xs font-bold tracking-wide ring-1 ring-white/10 group-hover:bg-white/25 transition-colors">
            SMV
          </span>
          <span className="hidden sm:inline text-sm font-medium text-gray-200">
            Mastan Vali
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors p-1.5"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors p-1.5"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <a
            href="mailto:sk.mastanvali0116@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-gray-200 transition-colors"
          >
            Let&apos;s connect
            <ArrowUpRight size={13} />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white p-1"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden absolute top-20 left-4 right-4 rounded-2xl bg-black/80 ring-1 ring-white/10 backdrop-blur-xl p-3"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-gray-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:sk.mastanvali0116@gmail.com"
              className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
            >
              Let&apos;s connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

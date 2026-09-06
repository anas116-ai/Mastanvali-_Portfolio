"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, Terminal, Cpu, Sparkles } from "lucide-react";
import { AmbientSoundControl } from "@/components/hud/AmbientSoundControl";

const navLinks = [
  { label: "01 // WORK", href: "#work" },
  { label: "02 // PIPELINE", href: "#pipeline" },
  { label: "03 // METHODOLOGY", href: "#methodology" },
  { label: "04 // ARSENAL", href: "#arsenal" },
  { label: "05 // PROFILE", href: "#profile" },
  { label: "06 // TRANSMISSION", href: "#transmission" },
];

export function SpatialHUD() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Floating Cyber HUD Capsule */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:py-6 flex justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-3 md:gap-6 px-5 py-2.5 rounded-full transition-all duration-500 max-w-6xl w-full ${
            scrolled
              ? "glass-panel-glow bg-[#05050a]/90 shadow-[0_10px_35px_rgba(0,0,0,0.85)] border-[var(--color-accent)]/30"
              : "glass-panel bg-[#0a0a14]/60"
          }`}
          aria-label="Spatial Navigation HUD"
        >
          {/* Brand Logo & Telemetry Indicator */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            title="Reset Coordinates"
          >
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[var(--color-accent)] via-purple-500 to-[var(--color-neon-green)] p-[1px] transition-transform group-hover:scale-110 shadow-[0_0_12px_rgba(0,240,255,0.4)]">
              <div className="w-full h-full bg-[#05050a] rounded-[5px] flex items-center justify-center">
                <Cpu size={14} className="text-[var(--color-accent)] animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-extrabold tracking-wider text-white group-hover:text-[var(--color-accent)] transition-colors">
                MASTAN VALI
              </span>
              <span className="font-mono text-[9px] text-[var(--color-neon-green)] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-green)] animate-ping" />
                SYS:ACTIVE // 3D MATRIX
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] text-slate-300 hover:text-[var(--color-accent)] transition-all hover:translate-y-[-1px] tracking-wider relative group py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          {/* Right Controls HUD */}
          <div className="flex items-center gap-2.5">
            {/* Live IST Telemetry */}
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              <Terminal size={12} className="text-[var(--color-accent)]" />
              <span>{time || "00:00:00 IST"}</span>
            </div>

            {/* Audio Feedback Switch */}
            <AmbientSoundControl />

            {/* Social Channels */}
            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-slate-300 hover:text-white p-1 ml-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#030305]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-5 max-w-md mx-auto w-full">
              <div className="font-mono text-xs text-[var(--color-accent)] tracking-widest uppercase mb-2 border-b border-white/10 pb-2 flex items-center justify-between">
                <span>// SPATIAL MATRIX NAVIGATION</span>
                <Sparkles size={14} className="text-purple-400" />
              </div>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-mono text-base text-white hover:text-[var(--color-accent)] transition-colors flex items-center justify-between group p-2 rounded-lg hover:bg-white/5"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                    INITIALIZE &rarr;
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

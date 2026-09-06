"use client";

import { Github, Linkedin, Mail, Settings2, Database, Bot, MonitorSmartphone, Globe, Pill, FileText, GitPullRequest, Sparkles, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const pills = [
  { icon: Database, label: "Enterprise ETL · SAP BODS" },
  { icon: Bot, label: "AI Agents & LLMs" },
  { icon: MonitorSmartphone, label: "Offline-First Desktop Apps" },
  { icon: Globe, label: "Production-Ready Web" },
];

const tools = [
  { name: "AnPharmacy", tag: "Pharmacy Ops", icon: Pill, hot: true },
  { name: "AnsiQ", tag: "Answers on Intent", icon: Bot, hot: false },
  { name: "Anasify", tag: "Rewriting Made Easy", icon: FileText, hot: false },
  { name: "Qode-Sync", tag: "Version Control Ensemble", icon: GitPullRequest, hot: false },
];

const stack = ["SAP BODS", "SQL Server", "Python", "TypeScript", "React", "Next.js", "Electron", "FastAPI"];

export function Hero() {
  return (
    <section className="bg-ink relative overflow-hidden">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full opacity-25 blur-[140px]" style={{ background: "radial-gradient(circle,#c2d900,transparent 65%)" }} />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[140px]" style={{ background: "radial-gradient(circle,#dfe921,transparent 65%)" }} />

      <div className="mx-auto max-w-6xl px-4 pt-24 pb-10 md:px-6 md:pt-28 md:pb-14">
        <FadeIn y={24} className="relative z-10">
          {/* glass panel */}
          <div className="relative overflow-hidden rounded-3xl bg-[#0f0f11]/85 shadow-2xl backdrop-blur-xl">
            {/* header */}
            <header className="relative flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-8">
              <span className="font-pixel text-mist text-[11px] tracking-[0.2em]">Data → AI · Portfolio</span>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-ui text-[11px] font-medium text-[#dfe921]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e5ff00] shadow-[0_0_10px_2px_rgba(223,233,33,0.7)]" />
                  Open to Work
                </span>
              </div>
            </header>

            {/* split hero */}
            <div className="relative grid items-center gap-12 px-6 py-12 md:px-8 md:py-16 lg:grid-cols-[5fr_6fr] lg:gap-16">
              {/* left — content */}
              <FadeIn x={-40} delay={0.1}>
                <p className="eyebrow mb-5">Hello, I&apos;m</p>
                <h1 className="font-display text-[clamp(2.6rem,7vw,5.2rem)] font-light leading-[1.05] tracking-tight">
                  <span className="text-ivory">Shaik</span>
                  <br />
                  <span className="text-accent-gradient font-brand font-normal drop-shadow-[0_0_30px_rgba(223,233,33,0.25)]">Mastan Vali</span>
                </h1>
                <p className="mt-6 flex items-center gap-3 font-label text-[15px] font-medium tracking-[0.14em] text-[#d9e6ad]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#e5ff00] shadow-[0_0_12px_2px_rgba(223,233,33,0.7)]" />
                  DATA ENGINEER &rarr; AI BUILDER
                </p>
                <p className="text-mist mt-6 max-w-md text-[15px] font-light leading-relaxed">
                  A year in enterprise data engineering (SAP BODS, ETL) taught me discipline —
                  now I build intelligent, dependable products. I turn raw data into things
                  people love to use.
                </p>

                {/* feature pills 2x2 */}
                <div className="mt-9 grid max-w-lg grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  {pills.map((p) => (
                    <div key={p.label} className="group flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-200 group-hover:border-[#dfe921]/50">
                        <p.icon className="h-4 w-4 text-[#dfe921]" strokeWidth={1.5} />
                      </span>
                      <span className="text-mist font-ui text-[13px] font-medium leading-tight transition-colors duration-200 group-hover:text-ivory">
                        {p.label}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* right — 3D tilt photo */}
              <FadeIn x={40} delay={0.2}>
                <HeroPhoto />
              </FadeIn>
            </div>

            {/* bottom tool cards */}
            <div className="relative border-t border-white/10 px-6 py-6 md:px-8">
              <p className="text-mist mb-4 font-label text-[11px] font-medium tracking-[0.2em]">Recent Builds</p>
              <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-1">
                {tools.map((t) => (
                  <a
                    key={t.name}
                    href="#projects"
                    className={`group w-[210px] shrink-0 snap-start rounded-xl border p-4 transition-all duration-300 ${
                      t.hot
                        ? "border-[#dfe921]/40 bg-[#dfe921]/10 hover:bg-[#dfe921]/15"
                        : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06]">
                        <t.icon className="h-[18px] w-[18px] text-[#dfe921]" strokeWidth={1.5} />
                      </span>
                      {t.hot && (
                        <span className="rounded-full bg-[#dfe921] px-2 py-0.5 font-ui text-[9px] font-semibold uppercase tracking-wider text-[#0b0b0e]">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-ivory mt-3 font-ui text-sm font-medium">{t.name}</p>
                    <p className="text-mist font-ui text-xs font-light">{t.tag}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* stack strip */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-4 border-t border-white/10 px-6 py-5 md:px-8">
              <span className="text-mist mr-1 flex items-center gap-2 font-label text-[11px] font-medium tracking-[0.2em]">
                <Sparkles className="h-3.5 w-3.5 text-[#dfe921]" /> Core Stack
              </span>
              {stack.map((s) => (
                <span key={s} className="text-mist cursor-default font-ui text-[13px] font-light tracking-wide transition-colors duration-200 hover:text-[#dfe921]">
                  {s}
                </span>
              ))}
              <div className="ml-auto hidden items-center gap-5 lg:flex">
                <SocialIcon href="https://github.com/anas116-ai" label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/shaikmastanvali" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
                <SocialIcon href="mailto:shaikmastanvali@gmail.com" label="Email"><Mail className="h-4 w-4" /></SocialIcon>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-mist flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dfe921]/60 hover:text-[#dfe921]"
    >
      {children}
    </a>
  );
}

function HeroPhoto() {
  return (
    <motion.div
      className="group relative mx-auto w-full max-w-[400px] [perspective:1000px]"
      initial={{ rotateX: 6, rotateY: -10, rotateZ: -2 }}
      whileHover={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* glow behind */}
      <div className="absolute -inset-4 rounded-[2.5rem] opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70" style={{ background: "linear-gradient(135deg,#c2d900,#dfe921 60%,#f2ff5f)" }} />

      <div className="glass relative overflow-hidden rounded-[2rem] p-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
          <PlaceholderCard />
        </div>

        {/* floating chips */}
        <motion.div
          className="glass absolute left-4 top-5 rounded-full px-4 py-2 font-ui text-xs font-medium text-ivory"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="mr-1.5 inline-block align-middle"><ShieldCheck className="h-3 w-3 text-[#dfe921]" /></span>
          AI Builder
        </motion.div>
        <motion.div
          className="glass absolute right-4 top-1/3 rounded-full px-4 py-2 font-ui text-xs font-medium text-ivory"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <span className="mr-1.5 inline-block align-middle"><Workflow className="h-3 w-3 text-[#dfe921]" /></span>
          Data Engineer
        </motion.div>
      </div>
    </motion.div>
  );
}

function PlaceholderCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center" style={{ background: "linear-gradient(160deg,#131306,#3a4308 55%,#0b0b0e)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(rgba(223,233,33,0.35) 1px,transparent 1px)", backgroundSize: "26px 26px" }} />
      <div className="relative flex flex-col items-center">
        <span className="font-display text-accent-gradient text-[7rem] font-light">S</span>
        <p className="font-pixel text-mist mt-2 text-[11px] tracking-[0.3em]">PORTRAIT — ADD YOUR PHOTO</p>
      </div>
    </div>
  );
}
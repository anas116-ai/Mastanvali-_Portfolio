"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LINKS = [
  { id: "top", label: "00 / ENTER" },
  { id: "pipeline", label: "01 / PIPELINE" },
  { id: "work", label: "02 / WORK" },
  { id: "method", label: "03 / METHOD" },
  { id: "profile", label: "04 / PROFILE" },
  { id: "transmission", label: "05 / CONTACT" },
];

function useActiveSection(): string {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

export function NexusHUD() {
  const active = useActiveSection();
  const [visible, setVisible] = useState(true);
  const [reduced] = useState(false);

  return (
    <>
      {/* Top rail */}
      <header className="fixed top-0 inset-x-0 z-40 px-5 md:px-8 flex items-center justify-between h-14 pointer-events-none">
        <Link
          href="#top"
          className="pointer-events-auto font-mono text-[11px] tracking-[0.22em] text-cyan-300/80 hover:text-cyan-200 transition-colors"
        >
          SHAIK&nbsp;MASTAN&nbsp;VALI<span className="text-[#00ff9d]">//NEXUS</span>
        </Link>
        <div className="hidden sm:flex items-center gap-4 pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
            DATA&nbsp;&rarr;&nbsp;INTELLIGENCE
          </span>
          <a
            href="https://github.com/anas116-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-wider text-slate-300 hover:text-cyan-200 transition-colors border border-white/10 rounded-full px-3 py-1"
          >
            GITHUB
          </a>
        </div>
      </header>

      {/* Right chapter rail */}
      <nav
        className={cn(
          "fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1 font-mono text-[10px] tracking-widest transition-opacity duration-500",
          visible ? "opacity-100" : "opacity-0"
        )}
        style={{ display: "flex" }}
        aria-label="Chapters"
      >
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={cn(
              "group flex items-center justify-end gap-2 py-1 px-2 rounded transition-colors",
              active === l.id ? "text-cyan-200" : "text-slate-500 hover:text-slate-200"
            )}
          >
            <span className="hidden md:inline">{l.label}</span>
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-colors",
                active === l.id ? "bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" : "bg-slate-600"
              )}
            />
          </a>
        ))}
      </nav>

      {/* Corner telemetry */}
      <div className="fixed bottom-4 left-4 md:left-6 z-40 font-mono text-[9px] tracking-[0.18em] text-slate-500 pointer-events-none hidden md:block">
        LAT 16.3067&deg;N / LNG 80.4365&deg;E
      </div>
      <div className="fixed bottom-4 right-4 md:right-6 z-40 font-mono text-[9px] tracking-[0.18em] text-emerald-400/60 pointer-events-none text-right">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse mr-1.5" />
        NEXUS ONLINE // ZERO DRIFT
        <br className="md:hidden" />
        &nbsp;{reduced ? "STATIC" : "3D LIVE"}
      </div>
    </>
  );
}

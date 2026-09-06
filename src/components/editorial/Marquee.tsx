"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { primaryProjects, secondaryProjects } from "@/data/projects";

interface RowProps {
  items: string[];
  reverse?: boolean;
}

function buildRowItems(entries: { name: string; tagline: string }[]): string[] {
  const names = entries.map((e) => e.name);
  return [...names, ...names, ...names];
}

function Row({ items, reverse }: RowProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handler = () => {
      const section = document.getElementById("marquee");
      if (!section) return;
      const top = section.offsetTop;
      const raw = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(raw);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const translate = reverse ? -(offset - 200) : offset - 200;

  return (
    <div className="overflow-hidden will-change-transform" style={{ transform: `translateX(${translate}px)`, gap: "0.75rem" } as CSSProperties}>
      <div className="flex gap-3">
        {items.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="shrink-0 flex items-center justify-center rounded-2xl border border-white/10 bg-[#111214] text-center px-6 sm:px-10"
            style={{ width: "250px", height: "120px" }}
          >
            <span className="hero-heading font-semibold uppercase tracking-wide text-sm sm:text-base">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section id="marquee" className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 space-y-3 overflow-x-clip">
      <Row items={buildRowItems(primaryProjects)} />
      <Row items={buildRowItems(secondaryProjects)} reverse />
    </section>
  );
}

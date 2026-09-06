"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Kage-style scroll reveal: masks each mask-line child, reveals with a stagger.
   Falls back to instantly-visible when the user prefers reduced motion. */

interface NexusRevealProps {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
}

export function NexusReveal({ children, className, staggerMs = 90 }: NexusRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const el = ref.current;
    if (!el || mq.matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(inView && "nexus-rv-in", className)}
      style={{ opacity: inView ? 1 : 0, transition: "opacity .6s ease" }}
      data-reveal
    >
      {reduced ? (
        <div className="contents">{children}</div>
      ) : (
        <div className="flex flex-col">
          {extractLines(children, 0, staggerMs)}
        </div>
      )}
    </div>
  );
}

/* Each direct child becomes a masked line, revealed with increasing delay. */
function extractLines(children: ReactNode, depth: number, stagger: number): ReactNode {
  const list = Array.isArray(children) ? children : [children];
  return list.map((node, i) => {
    const delay = depth * i * stagger;
    return (
      <span
        key={i}
        className="nexus-mask"
        style={{ transitionDelay: `${delay}ms` }}
      >
        <span className="nexus-line">{node}</span>
      </span>
    );
  });
}

"use client";

import { useEffect, useRef, useState } from "react";

export function GlassCursor() {
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);
  const reducedRef = useRef(false);

  useEffect(() => {
    // Touch / coarse pointers keep the native cursor — never hijack.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const move = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed z-[60] hidden md:block rounded-full mix-blend-difference ${
        visible ? "opacity-100" : "opacity-0"
      } ${
        reducedRef.current
          ? ""
          : "transition-transform duration-75 ease-out"
      }`}
      style={{
        left: 0,
        top: 0,
        width: "200px",
        height: "200px",
        backgroundColor: "#ffffff",
        transform: `translate(${coords.x - 100}px, ${coords.y - 100}px)`,
        filter: "blur(2px)",
      }}
    />
  );
}

"use client";

import { useEffect, useState, useRef } from "react";

export function CursorMask() {
  const [coords, setCoords] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-30 hidden md:block rounded-full mix-blend-difference transition-transform duration-75 ease-out"
      style={{
        left: 0,
        top: 0,
        width: "220px",
        height: "220px",
        backgroundColor: "#ffffff",
        transform: `translate(${coords.x - 110}px, ${coords.y - 110}px)`,
        filter: "blur(2px)",
      }}
    />
  );
}

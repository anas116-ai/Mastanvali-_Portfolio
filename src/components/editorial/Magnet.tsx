"use client";

import { useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export function Magnet({
  children,
  padding = 100,
  strength = 3,
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    if (
      relX < -padding ||
      relX > rect.width + padding ||
      relY < -padding ||
      relY > rect.height + padding
    ) {
      setTransform("");
      return;
    }

    const dx = (relX - rect.width / 2) / strength;
    const dy = (relY - rect.height / 2) / strength;
    setTransform(`translate3d(${dx}px, ${dy}px, 0)`);
  };

  const handleMouseLeave = () => setTransform("");

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        willChange: "transform",
        transition: "transform 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
}

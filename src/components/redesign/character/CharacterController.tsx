"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { PNG25DRenderer } from "./PNG25DRenderer";
import { CharacterShadow } from "./CharacterShadow";
import { CharacterLighting } from "./CharacterLighting";
import { CharacterEffects } from "./CharacterEffects";

interface CharacterControllerProps {
  className?: string;
  enableEffects?: boolean;
}

export function CharacterController({
  className = "",
  enableEffects = true,
}: CharacterControllerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Normalized pointer tracking (-1 to 1)
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = (e.clientX - centerX) / (window.innerWidth / 2);
    const normY = -(e.clientY - centerY) / (window.innerHeight / 2);

    setPointer({
      x: Math.max(-1, Math.min(1, normX)),
      y: Math.max(-1, Math.min(1, normY)),
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPointer({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full h-[500px] sm:h-[560px] md:h-[620px] flex items-end justify-center select-none pointer-events-auto cursor-pointer ${className}`}
    >
      {/* 1. Ground Contact Shadow Layer */}
      <CharacterShadow pointerX={pointer.x} />

      {/* 2. Character Atmospheric & Laptop Screen Lighting */}
      <CharacterLighting pointerX={pointer.x} pointerY={pointer.y} />

      {/* 3. High-Fidelity 2.5D Character Subject */}
      <PNG25DRenderer
        pointerX={pointer.x}
        pointerY={pointer.y}
        isHovered={isHovered}
      />

      {/* 4. Restrained Environmental Signals */}
      {enableEffects && <CharacterEffects pointerX={pointer.x} />}
    </div>
  );
}

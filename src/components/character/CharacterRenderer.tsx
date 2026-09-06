"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

export interface CharacterRendererProps {
  type?: "2.5D" | "3D_GLTF";
  src: string;
  alt: string;
  className?: string;
  scaleOffset?: number;
  yOffset?: number;
  isClicked?: boolean;
}

/**
 * High-DPI 2.5D Multi-Layer Master Cutout Renderer
 */
export function PNG25DRenderer({
  src,
  alt,
  className = "",
  scaleOffset = 1.0,
  yOffset = 0,
}: CharacterRendererProps) {
  return (
    <div
      className={`relative w-full flex justify-center items-end select-none ${className}`}
      style={{
        transform: `scale(${scaleOffset}) translateY(${yOffset}px)`,
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="sync"
        className="relative z-10 w-full h-auto max-h-[550px] object-contain transition-all duration-300"
        style={{
          filter: "brightness(103%) contrast(106%) drop-shadow(0 18px 36px rgba(0,0,0,0.85))",
        }}
        draggable={false}
      />
    </div>
  );
}

/**
 * Future-Ready GLTF / 3D WebGL Renderer placeholder
 * Ready for drop-in when a full 3D mesh model is provided.
 */
export function GLTF3DRenderer({
  src,
  alt,
  className = "",
}: CharacterRendererProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* Future Three.js Canvas with useGLTF / OrbitControls hook */}
      <PNG25DRenderer src={src} alt={alt} />
    </div>
  );
}

export function CharacterRenderer(props: CharacterRendererProps) {
  if (props.type === "3D_GLTF") {
    return <GLTF3DRenderer {...props} />;
  }
  return <PNG25DRenderer {...props} />;
}

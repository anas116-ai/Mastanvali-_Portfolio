"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamic import with SSR disabled to ensure 100% clean WebGL initialization
const Character3DStage = dynamic(
  () => import("./webgl/Character3DStage").then((mod) => mod.Character3DStage),
  { ssr: false }
);

export interface InteractiveCharacterProps {
  assetId?: string;
  src?: string;
  alt?: string;
  className?: string;
}

export function InteractiveCharacter({
  className = "",
}: InteractiveCharacterProps) {
  return <Character3DStage className={className} />;
}

export * from "./CharacterState";
export * from "./CharacterMotion";
export * from "./CharacterShadow";
export * from "./CharacterLighting";
export * from "./CharacterEffects";
export * from "./CharacterRenderer";
export * from "./CharacterController";
export { Character3DStage } from "./webgl/Character3DStage";

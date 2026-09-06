"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface EyelidsRigProps {
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

export function EyelidsRig({ mousePosition }: EyelidsRigProps) {
  const leftEyelidRef = useRef<THREE.Group>(null);
  const rightEyelidRef = useRef<THREE.Group>(null);

  // Create High-Quality Pixar Eyelid Texture with Skin Tone, Eyelashes, and Crease
  const eyelidTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Base Pixar skin gradient
    const skinGrad = ctx.createLinearGradient(0, 0, 0, 256);
    skinGrad.addColorStop(0, "#82553b");
    skinGrad.addColorStop(0.5, "#a66e4d");
    skinGrad.addColorStop(0.85, "#8d593d");
    skinGrad.addColorStop(1.0, "#2a150c"); // Dark eyelash border

    ctx.fillStyle = skinGrad;
    ctx.beginPath();
    ctx.arc(128, 128, 118, 0, Math.PI * 2);
    ctx.fill();

    // Prominent dark eyelashes along bottom rim
    ctx.strokeStyle = "#150904";
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(128, 128, 110, Math.PI * 0.1, Math.PI * 0.9, false);
    ctx.stroke();

    // Upper crease shadow
    ctx.strokeStyle = "rgba(40, 18, 8, 0.4)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(128, 128, 105, Math.PI * 1.15, Math.PI * 1.85, false);
    ctx.stroke();

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Slow, highly visible natural human blink cycle (every 4.2 seconds)
    const bTime = time % 4.2;
    
    // Eyelid stroke animation:
    // 0.0s to 0.15s: Eyelid visibly slides DOWN from top (scaleY 0 -> 1.0)
    // 0.15s to 0.25s: Full closure (scaleY = 1.0)
    // 0.25s to 0.40s: Eyelid smoothly pulls back UP (scaleY 1.0 -> 0)
    let blink = 0;
    if (bTime < 0.15) {
      blink = bTime / 0.15; // Closing
    } else if (bTime < 0.25) {
      blink = 1.0; // Fully closed
    } else if (bTime < 0.40) {
      blink = 1.0 - (bTime - 0.25) / 0.15; // Opening
    } else {
      blink = 0.0;
    }

    // Occasional realistic double-blink at 8.4s
    const dbTime = time % 8.4;
    if (dbTime >= 0.55 && dbTime < 0.90) {
      const dt = dbTime - 0.55;
      if (dt < 0.12) blink = Math.max(blink, dt / 0.12);
      else if (dt < 0.20) blink = 1.0;
      else if (dt < 0.35) blink = Math.max(blink, 1.0 - (dt - 0.20) / 0.15);
    }

    // Smooth Hermite easing for natural fleshy eyelid weight
    const smoothBlink = blink * blink * (3.0 - 2.0 * blink);

    // Head rotation / parallax offset
    const mx = mousePosition.current.x * 0.05;
    const my = mousePosition.current.y * 0.05;

    // Animate Left Eyelid
    if (leftEyelidRef.current) {
      leftEyelidRef.current.scale.y = smoothBlink;
      leftEyelidRef.current.position.y = 1.365 + my - (1.0 - smoothBlink) * 0.04;
      leftEyelidRef.current.position.x = -0.096 + mx;
      leftEyelidRef.current.position.z = 0.14; // Slightly in front of eye plane
    }

    // Animate Right Eyelid
    if (rightEyelidRef.current) {
      rightEyelidRef.current.scale.y = smoothBlink;
      rightEyelidRef.current.position.y = 1.382 + my - (1.0 - smoothBlink) * 0.04;
      rightEyelidRef.current.position.x = 0.185 + mx;
      rightEyelidRef.current.position.z = 0.14; // Slightly in front of eye plane
    }
  });

  return (
    <group>
      {/* 1. Left 3D Anatomical Eyelid (Physical Upper Lid + Eyelashes) */}
      <group ref={leftEyelidRef} position={[-0.096, 1.365, 0.14]}>
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[0.22, 0.18]} />
          <meshStandardMaterial
            map={eyelidTexture || undefined}
            transparent
            roughness={0.6}
            metalness={0.1}
            side={THREE.DoubleSide}
            depthTest={true}
          />
        </mesh>
      </group>

      {/* 2. Right 3D Anatomical Eyelid (Physical Upper Lid + Eyelashes) */}
      <group ref={rightEyelidRef} position={[0.185, 1.382, 0.14]}>
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[0.22, 0.18]} />
          <meshStandardMaterial
            map={eyelidTexture || undefined}
            transparent
            roughness={0.6}
            metalness={0.1}
            side={THREE.DoubleSide}
            depthTest={true}
          />
        </mesh>
      </group>
    </group>
  );
}

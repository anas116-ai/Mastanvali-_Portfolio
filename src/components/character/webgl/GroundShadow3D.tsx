"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GroundShadow3DProps {
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

export function GroundShadow3D({ mousePosition }: GroundShadow3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    // Subtly shift shadow parallax relative to light source
    const targetX = -mousePosition.current.x * 0.03;
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.04;
  });

  return (
    <group ref={groupRef} position={[0, -1.71, -0.02]}>
      {/* 1. STUDIO FLOOR STAGE ILLUMINATION (Creates physical ground contrast) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.02, -0.015, -0.04]}>
        <planeGeometry args={[2.5, 0.90]} />
        <meshBasicMaterial
          transparent
          opacity={0.45}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          map={createUltraSoftRadialTexture("#14B8A6", 0.35, 0.0)}
        />
      </mesh>

      {/* 2. HIGH-DENSITY CONTACT OCCLUSION DIRECTLY UNDER LEFT SNEAKER SOLE */}
      <mesh rotation={[-Math.PI / 2, 0, -0.14]} position={[-0.33, 0.028, 0.01]}>
        <planeGeometry args={[0.55, 0.22]} />
        <meshBasicMaterial
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={THREE.NormalBlending}
          map={createUltraSoftRadialTexture("#010308", 0.98, 0.0)}
        />
      </mesh>

      {/* 3. HIGH-DENSITY CONTACT OCCLUSION DIRECTLY UNDER RIGHT SNEAKER SOLE */}
      <mesh rotation={[-Math.PI / 2, 0, 0.08]} position={[0.29, 0.002, -0.02]}>
        <planeGeometry args={[0.58, 0.24]} />
        <meshBasicMaterial
          transparent
          opacity={0.96}
          depthWrite={false}
          blending={THREE.NormalBlending}
          map={createUltraSoftRadialTexture("#010308", 0.98, 0.0)}
        />
      </mesh>

      {/* 4. TIGHT INTER-SOLE CONTACT SPREAD (Connects feet to ground without floating) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.02, 0.001, -0.02]}>
        <planeGeometry args={[1.2, 0.38]} />
        <meshBasicMaterial
          transparent
          opacity={0.65}
          depthWrite={false}
          blending={THREE.NormalBlending}
          map={createUltraSoftRadialTexture("#010308", 0.88, 0.0)}
        />
      </mesh>

      {/* 5. SOFT BROAD STUDIO FLOOR AMBIENT OCCLUSION (Smooth feathered falloff matching #050811) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.02, -0.004, -0.04]}>
        <planeGeometry args={[2.2, 0.75]} />
        <meshBasicMaterial
          transparent
          opacity={0.50}
          depthWrite={false}
          blending={THREE.NormalBlending}
          map={createUltraSoftRadialTexture("#02050E", 0.80, 0.0)}
        />
      </mesh>
    </group>
  );
}

// Procedural ultra-soft Gaussian-style radial gradient texture that dissolves 100% seamlessly into dark backgrounds
function createUltraSoftRadialTexture(colorHex: string, innerAlpha: number, outerAlpha: number): THREE.CanvasTexture {
  if (typeof document === "undefined") {
    return new THREE.CanvasTexture(null as unknown as HTMLCanvasElement);
  }
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    // Smooth cosine-weighted falloff for zero visible hard edges
    gradient.addColorStop(0, `rgba(1,3,8,${innerAlpha})`);
    gradient.addColorStop(0.25, `rgba(1,3,8,${innerAlpha * 0.78})`);
    gradient.addColorStop(0.55, `rgba(2,5,14,${innerAlpha * 0.32})`);
    gradient.addColorStop(0.82, `rgba(2,5,14,${innerAlpha * 0.08})`);
    gradient.addColorStop(1, `rgba(2,5,14,${outerAlpha})`);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function TypingHandsRig() {
  const leftFingersRef = useRef<THREE.Group>(null);
  const rightFingersRef = useRef<THREE.Group>(null);
  const ripple1Ref = useRef<THREE.Mesh>(null);
  const ripple2Ref = useRef<THREE.Mesh>(null);
  const keyLightRef = useRef<THREE.PointLight>(null);

  // Soft glowing ripple circle texture
  const rippleTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.strokeStyle = "#14B8A6";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(64, 64, 52, 0, Math.PI * 2);
    ctx.stroke();

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Fast, distinct finger tapping stroke on keyboard keys (12-16 Hz)
    const leftTap1 = Math.sin(t * 12.5);
    const leftTap2 = Math.cos(t * 16.2);
    const rightTap1 = Math.sin(t * 13.8 + 1.2);
    const rightTap2 = Math.cos(t * 17.5 + 0.8);

    if (leftFingersRef.current) {
      leftFingersRef.current.position.y = -0.05 + leftTap1 * 0.022; // 2.2cm visible stroke!
      leftFingersRef.current.rotation.x = 0.25 + leftTap2 * 0.12;
    }

    if (rightFingersRef.current) {
      rightFingersRef.current.position.y = -0.05 + rightTap1 * 0.022; // 2.2cm visible stroke!
      rightFingersRef.current.rotation.x = 0.25 + rightTap2 * 0.12;
    }

    // Dynamic Keystroke energy ripple expansion
    if (ripple1Ref.current) {
      const rScale1 = ((t * 2.5) % 1.0);
      ripple1Ref.current.scale.set(0.15 + rScale1 * 0.35, 0.15 + rScale1 * 0.35, 1);
      const mat = ripple1Ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = (1.0 - rScale1) * 0.75;
    }

    if (ripple2Ref.current) {
      const rScale2 = (((t * 2.5) + 0.5) % 1.0);
      ripple2Ref.current.scale.set(0.15 + rScale2 * 0.35, 0.15 + rScale2 * 0.35, 1);
      const mat = ripple2Ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = (1.0 - rScale2) * 0.75;
    }

    if (keyLightRef.current) {
      keyLightRef.current.intensity = 1.0 + (Math.sin(t * 14.0) * 0.5 + 0.5) * 1.8;
    }
  });

  return (
    <group position={[0, -0.06, 0.52]}>
      {/* Keystroke Typing Point Light */}
      <pointLight
        ref={keyLightRef}
        position={[0, 0.1, 0.08]}
        color="#14B8A6"
        distance={1.5}
        decay={2}
      />

      {/* Keystroke Energy Ripples on Keyboard Surface */}
      <mesh
        ref={ripple1Ref}
        position={[-0.15, -0.04, 0.02]}
        rotation={[-Math.PI * 0.35, 0, 0]}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={rippleTexture || undefined}
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh
        ref={ripple2Ref}
        position={[0.15, -0.04, 0.02]}
        rotation={[-Math.PI * 0.35, 0, 0]}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={rippleTexture || undefined}
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Left Hand Active Typing Finger Mesh */}
      <group ref={leftFingersRef} position={[-0.18, 0, 0]}>
        {/* Index Finger */}
        <mesh position={[0.04, 0, 0.04]} rotation={[0.3, 0, -0.1]} scale={[0.032, 0.024, 0.075]}>
          <boxGeometry />
          <meshStandardMaterial color="#8d593d" roughness={0.5} />
        </mesh>
        {/* Middle Finger */}
        <mesh position={[0.0, 0.005, 0.05]} rotation={[0.32, 0, 0]} scale={[0.032, 0.024, 0.08]}>
          <boxGeometry />
          <meshStandardMaterial color="#8d593d" roughness={0.5} />
        </mesh>
      </group>

      {/* Right Hand Active Typing Finger Mesh */}
      <group ref={rightFingersRef} position={[0.18, 0, 0]}>
        {/* Index Finger */}
        <mesh position={[-0.04, 0, 0.04]} rotation={[0.3, 0, 0.1]} scale={[0.032, 0.024, 0.075]}>
          <boxGeometry />
          <meshStandardMaterial color="#8d593d" roughness={0.5} />
        </mesh>
        {/* Middle Finger */}
        <mesh position={[0.0, 0.005, 0.05]} rotation={[0.32, 0, 0]} scale={[0.032, 0.024, 0.08]}>
          <boxGeometry />
          <meshStandardMaterial color="#8d593d" roughness={0.5} />
        </mesh>
      </group>
    </group>
  );
}

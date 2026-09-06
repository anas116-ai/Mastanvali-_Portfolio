"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// 3D Vibe Coder Battle-Station Desk & Holographic Screens
function VibeCoderRoom({ vibeTheme = "midnight" }: { vibeTheme: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const screen1Ref = useRef<THREE.Mesh>(null);
  const screen2Ref = useRef<THREE.Mesh>(null);
  const floatingHoloRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const { mouse } = useThree();
  const prefersReduced = useReducedMotion();

  // Ambient dust motes floating in room light
  const particlePositions = useMemo(() => {
    const p = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
      p[i * 3] = (Math.random() - 0.5) * 16;
      p[i * 3 + 1] = Math.random() * 8 - 2;
      p[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return p;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (!prefersReduced) {
      // Gentle camera mouse parallax looking around the room
      state.camera.position.x += (mouse.x * 2.5 - state.camera.position.x) * 0.04;
      state.camera.position.y += (mouse.y * 1.5 + 1.2 - state.camera.position.y) * 0.04;
      state.camera.lookAt(0, 0.5, 0);

      // Floating holographic windows oscillating
      if (floatingHoloRef.current) {
        floatingHoloRef.current.position.y = Math.sin(time * 1.5) * 0.08;
        floatingHoloRef.current.rotation.y = Math.sin(time * 0.8) * 0.04;
      }

      // Screen glow flicker / pulse
      if (screen1Ref.current && screen2Ref.current) {
        const glow = 0.9 + Math.sin(time * 4) * 0.05;
        (screen1Ref.current.material as THREE.MeshStandardMaterial).emissiveIntensity = glow;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y = time * 0.02;
      }
    }
  });

  // Dynamic light colors based on vibe mode
  const themeColors = {
    midnight: { primary: "#14B8A6", ambient: "#1e1b4b", screen: "#14B8A6", desk: "#18181b" },
    neon: { primary: "#00f0ff", ambient: "#581c87", screen: "#14B8A6", desk: "#0f172a" },
    amber: { primary: "#f59e0b", ambient: "#451a03", screen: "#fbbf24", desk: "#1c1917" },
  }[vibeTheme] || { primary: "#14B8A6", ambient: "#1e1b4b", screen: "#14B8A6", desk: "#18181b" };

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      {/* 01. Developer Wooden / Carbon Fiber Desk */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[7, 0.15, 3.2]} />
        <meshStandardMaterial color="#121216" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Desk Aluminum Stand Legs */}
      <mesh position={[-3, -1.5, 0]}>
        <boxGeometry args={[0.15, 3, 2.5]} />
        <meshStandardMaterial color="#27272a" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[3, -1.5, 0]}>
        <boxGeometry args={[0.15, 3, 2.5]} />
        <meshStandardMaterial color="#27272a" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* 02. Curved Ultrawide Primary Monitor (Main Code Screen) */}
      <group position={[0, 1.2, -0.5]}>
        {/* Monitor Frame */}
        <mesh>
          <boxGeometry args={[3.6, 1.8, 0.08]} />
          <meshStandardMaterial color="#09090b" roughness={0.3} metalness={0.9} />
        </mesh>
        {/* Glowing Screen Glass (Code Canvas) */}
        <mesh ref={screen1Ref} position={[0, 0, 0.05]}>
          <planeGeometry args={[3.5, 1.7]} />
          <meshStandardMaterial
            color="#050814"
            emissive={themeColors.screen}
            emissiveIntensity={0.85}
            roughness={0.2}
          />
        </mesh>
        {/* Monitor Stand Base */}
        <mesh position={[0, -1.0, 0.2]}>
          <boxGeometry args={[0.8, 0.05, 0.6]} />
          <meshStandardMaterial color="#27272a" metalness={0.9} />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 1, 16]} />
          <meshStandardMaterial color="#27272a" metalness={0.9} />
        </mesh>
      </group>

      {/* 03. Secondary Vertical Monitor (Terminal & Multi-Agent Logs) */}
      <group position={[2.4, 1.3, -0.3]} rotation={[0, -Math.PI / 6, 0]}>
        <mesh>
          <boxGeometry args={[1.2, 2.2, 0.06]} />
          <meshStandardMaterial color="#09090b" metalness={0.9} />
        </mesh>
        <mesh ref={screen2Ref} position={[0, 0, 0.04]}>
          <planeGeometry args={[1.15, 2.1]} />
          <meshStandardMaterial
            color="#040608"
            emissive={themeColors.primary}
            emissiveIntensity={0.65}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, -1.1, 0.1]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />
          <meshStandardMaterial color="#27272a" metalness={0.9} />
        </mesh>
      </group>

      {/* 04. RGB Mechanical Keyboard & Wireless Mouse */}
      <mesh position={[0, 0.1, 0.6]}>
        <boxGeometry args={[1.6, 0.06, 0.6]} />
        <meshStandardMaterial color="#18181b" roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Keyboard LED underglow */}
      <mesh position={[0, 0.08, 0.6]}>
        <boxGeometry args={[1.65, 0.02, 0.65]} />
        <meshBasicMaterial color={themeColors.primary} transparent opacity={0.6} />
      </mesh>
      {/* Mouse */}
      <mesh position={[1.2, 0.1, 0.6]}>
        <boxGeometry args={[0.25, 0.07, 0.4]} />
        <meshStandardMaterial color="#27272a" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* 05. Developer Coffee Mug / Beverage */}
      <group position={[-1.8, 0.25, 0.5]}>
        <mesh>
          <cylinderGeometry args={[0.18, 0.16, 0.4, 16]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} />
        </mesh>
      </group>

      {/* 06. Floating Interactive Holographic Code Panels */}
      <group ref={floatingHoloRef} position={[-2.2, 1.8, 0.4]} rotation={[0, Math.PI / 8, 0]}>
        <mesh>
          <planeGeometry args={[1.6, 1.1]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      </group>

      {/* 07. Ambient Dust Motes in Light Beam */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#A8B8C4" transparent opacity={0.4} />
      </points>

      {/* Volumetric Studio Lighting */}
      <ambientLight intensity={0.4} color={themeColors.ambient} />
      <pointLight position={[0, 2.5, 0.5]} intensity={3.5} color={themeColors.primary} distance={8} />
      <pointLight position={[-3, 2, -1]} intensity={2.0} color="#14B8A6" distance={6} />
      <directionalLight position={[5, 6, 4]} intensity={0.8} color="#ffffff" />
    </group>
  );
}

export function VibeCoderRoomScene({ vibeTheme = "midnight" }: { vibeTheme?: string }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
      <Canvas
        camera={{ position: [0, 1.2, 5.5], fov: 46 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <VibeCoderRoom vibeTheme={vibeTheme} />
      </Canvas>

      {/* Atmospheric Lofi Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(20, 184, 166, 0.08) 0%, transparent 65%), linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.92) 90%)",
        }}
      />
    </div>
  );
}

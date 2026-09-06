"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Stylized 3D Human Vibe Coder Character with Head Tracking & Typing Motion
function VibeCoderCharacter({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const aiCompanionRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 01. Head & Glasses smoothly tracking mouse cursor
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        mouseX * 0.45,
        0.08
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -mouseY * 0.3 + 0.1,
        0.08
      );
    }

    // 02. Natural typing arm animations on the mechanical keyboard
    if (leftArmRef.current && rightArmRef.current) {
      leftArmRef.current.position.y = 0.35 + Math.sin(time * 14) * 0.015;
      rightArmRef.current.position.y = 0.35 + Math.cos(time * 16) * 0.015;
      leftArmRef.current.rotation.z = -0.35 + Math.sin(time * 12) * 0.03;
      rightArmRef.current.rotation.z = 0.35 + Math.cos(time * 15) * 0.03;
    }

    // 03. Orbiting AI Bot Companion floating around the developer
    if (aiCompanionRef.current) {
      const radius = 1.6;
      aiCompanionRef.current.position.x = Math.cos(time * 1.5) * radius + 1.2;
      aiCompanionRef.current.position.y = Math.sin(time * 2.0) * 0.25 + 1.8;
      aiCompanionRef.current.position.z = Math.sin(time * 1.5) * radius;
      aiCompanionRef.current.rotation.y = time * 2;
    }
  });

  return (
    <group position={[0, -0.4, 1.2]}>
      {/* --- TORSO & HOODIE --- */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.42, 0.48, 0.85, 20]} />
        <meshStandardMaterial color="#1e1e24" roughness={0.7} />
      </mesh>

      {/* Developer Hoodie Neck Collar */}
      <mesh position={[0, 0.85, 0]}>
        <torusGeometry args={[0.22, 0.08, 16, 32]} />
        <meshStandardMaterial color="#2d2d38" roughness={0.6} />
      </mesh>

      {/* --- ARMS & HANDS (TYPING ON KEYBOARD) --- */}
      {/* Left Shoulder & Arm */}
      <group ref={leftArmRef} position={[-0.45, 0.35, 0.1]}>
        <mesh rotation={[0.6, 0.2, -0.4]}>
          <capsuleGeometry args={[0.1, 0.5, 8, 16]} />
          <meshStandardMaterial color="#1e1e24" roughness={0.7} />
        </mesh>
        {/* Left Hand on Keycaps */}
        <mesh position={[0.2, -0.3, -0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#d4a373" roughness={0.5} />
        </mesh>
      </group>

      {/* Right Shoulder & Arm */}
      <group ref={rightArmRef} position={[0.45, 0.35, 0.1]}>
        <mesh rotation={[0.6, -0.2, 0.4]}>
          <capsuleGeometry args={[0.1, 0.5, 8, 16]} />
          <meshStandardMaterial color="#1e1e24" roughness={0.7} />
        </mesh>
        {/* Right Hand on Keycaps */}
        <mesh position={[-0.2, -0.3, -0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#d4a373" roughness={0.5} />
        </mesh>
      </group>

      {/* --- HEAD, HAIR, HEADPHONES & SMART GLASSES --- */}
      <group ref={headRef} position={[0, 1.15, 0]}>
        {/* Head Mesh */}
        <mesh>
          <sphereGeometry args={[0.28, 24, 24]} />
          <meshStandardMaterial color="#d4a373" roughness={0.4} />
        </mesh>

        {/* Modern Stylized Hair */}
        <mesh position={[0, 0.12, -0.04]}>
          <sphereGeometry args={[0.3, 20, 20]} />
          <meshStandardMaterial color="#0f172a" roughness={0.9} />
        </mesh>

        {/* Developer Studio Headphones */}
        <group position={[0, 0, 0]}>
          {/* Headband */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.18, 0]}>
            <torusGeometry args={[0.3, 0.04, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#14B8A6" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Left Ear Cup */}
          <mesh position={[-0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
            <meshStandardMaterial color="#18181b" metalness={0.9} />
          </mesh>
          {/* Right Ear Cup */}
          <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
            <meshStandardMaterial color="#18181b" metalness={0.9} />
          </mesh>
        </group>

        {/* Glowing Cyber/AR Glasses */}
        <group position={[0, 0.04, 0.26]}>
          <mesh>
            <boxGeometry args={[0.38, 0.1, 0.04]} />
            <meshStandardMaterial
              color="#00f0ff"
              emissive="#00f0ff"
              emissiveIntensity={1.2}
              transparent
              opacity={0.85}
            />
          </mesh>
        </group>
      </group>

      {/* --- ORBITING AI COMPANION BOT --- */}
      <group ref={aiCompanionRef}>
        {/* Sphere Core */}
        <mesh>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial
            color="#14B8A6"
            emissive="#14B8A6"
            emissiveIntensity={1.5}
            roughness={0.2}
          />
        </mesh>
        {/* Orbital Halo */}
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[0.22, 0.015, 16, 32]} />
          <meshBasicMaterial color="#00ff9d" />
        </mesh>
        <pointLight color="#14B8A6" intensity={2} distance={3} />
      </group>
    </group>
  );
}

// Full 3D Vibe Coder Battle-Station Workspace
function WorkspaceScene() {
  const { mouse } = useThree();
  const screenGlowRef = useRef<THREE.Mesh>(null);
  const terminalScreenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (screenGlowRef.current) {
      (screenGlowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.85 + Math.sin(time * 5) * 0.08;
    }
  });

  return (
    <group position={[0, -0.6, -0.4]}>
      {/* 01. The Developer Character */}
      <VibeCoderCharacter mouseX={mouse.x} mouseY={mouse.y} />

      {/* 02. Ergonomic Developer Desk */}
      <mesh position={[0, 0.15, 0.3]} receiveShadow>
        <boxGeometry args={[5.2, 0.12, 2.2]} />
        <meshStandardMaterial color="#0f0f13" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* 03. Ultrawide Curved Code Monitor */}
      <group position={[0, 1.35, -0.3]}>
        {/* Frame */}
        <mesh>
          <boxGeometry args={[3.6, 1.7, 0.08]} />
          <meshStandardMaterial color="#09090b" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Active Code Canvas */}
        <mesh ref={screenGlowRef} position={[0, 0, 0.05]}>
          <planeGeometry args={[3.5, 1.6]} />
          <meshStandardMaterial
            color="#050814"
            emissive="#14B8A6"
            emissiveIntensity={0.85}
            roughness={0.1}
          />
        </mesh>
        {/* Stand */}
        <mesh position={[0, -0.95, 0.2]}>
          <boxGeometry args={[0.8, 0.04, 0.5]} />
          <meshStandardMaterial color="#1e1e24" metalness={0.9} />
        </mesh>
      </group>

      {/* 04. Vertical Secondary Monitor (Multi-Agent System Logs) */}
      <group position={[2.2, 1.45, -0.1]} rotation={[0, -Math.PI / 6, 0]}>
        <mesh>
          <boxGeometry args={[1.1, 1.9, 0.06]} />
          <meshStandardMaterial color="#09090b" metalness={0.9} />
        </mesh>
        <mesh ref={terminalScreenRef} position={[0, 0, 0.04]}>
          <planeGeometry args={[1.05, 1.8]} />
          <meshStandardMaterial
            color="#030712"
            emissive="#14B8A6"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>

      {/* 05. RGB Mechanical Keyboard */}
      <group position={[0, 0.25, 0.6]}>
        <mesh>
          <boxGeometry args={[1.4, 0.05, 0.5]} />
          <meshStandardMaterial color="#18181b" roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Underglow Glow Strip */}
        <mesh position={[0, -0.01, 0]}>
          <boxGeometry args={[1.45, 0.02, 0.55]} />
          <meshBasicMaterial color="#14B8A6" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* 06. Steaming Coffee Mug */}
      <group position={[-1.6, 0.35, 0.5]}>
        <mesh>
          <cylinderGeometry args={[0.14, 0.12, 0.32, 16]} />
          <meshStandardMaterial color="#f1f5f9" roughness={0.3} />
        </mesh>
      </group>

      {/* Studio Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 2.5, 0.8]} intensity={3.5} color="#14B8A6" distance={6} />
      <pointLight position={[-2, 1.8, -0.5]} intensity={2.0} color="#14B8A6" distance={5} />
      <directionalLight position={[4, 5, 3]} intensity={0.9} color="#ffffff" />
    </group>
  );
}

export function MoncyVibeAvatarScene() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
      <Canvas
        camera={{ position: [0, 0.9, 4.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {!prefersReduced && <WorkspaceScene />}
      </Canvas>

      {/* Cinematic Studio Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(20, 184, 166, 0.09) 0%, transparent 65%), linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.95) 92%)",
        }}
      />
    </div>
  );
}

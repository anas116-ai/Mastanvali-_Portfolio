"use client";

import { useRef, useMemo, useEffect, useState, Component } from "react";
import type { ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

// Custom Cybernetic Particle & Energy Core Shader
function AtmosphericCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowMeshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.25;
      meshRef.current.rotation.y = time * 0.35;
      const s = 1.35 + Math.sin(time * 2.5) * 0.08;
      meshRef.current.scale.set(s, s, s);
    }
    if (glowMeshRef.current) {
      glowMeshRef.current.rotation.z = -time * 0.15;
      const s = 0.85 + Math.sin(time * 3.0) * 0.05;
      glowMeshRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Holographic Wireframe Core */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.85}
          wireframe
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Plasma Energy Orb */}
      <mesh ref={glowMeshRef}>
        <icosahedronGeometry args={[0.75, 2]} />
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.4} wireframe />
      </mesh>

      {/* Internal High-Intensity Light Source */}
      <pointLight color="#00f0ff" intensity={4} distance={8} decay={2} />
      <pointLight color="#14B8A6" intensity={2.5} distance={6} decay={2} />
    </group>
  );
}

// 3-Axis Gyroscope Kinetic Rings
function GyroscopeRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ring1.current) {
      ring1.current.rotation.x = time * 0.22;
      ring1.current.rotation.y = time * 0.15;
    }
    if (ring2.current) {
      ring2.current.rotation.y = -time * 0.28;
      ring2.current.rotation.z = time * 0.18;
    }
    if (ring3.current) {
      ring3.current.rotation.z = time * 0.12;
      ring3.current.rotation.x = -time * 0.16;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={ring1}>
        <torusGeometry args={[2.8, 0.016, 16, 120]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.55} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[3.6, 0.012, 16, 120]} />
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.45} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[4.4, 0.01, 16, 120]} />
        <meshBasicMaterial color="#00ff9d" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

// 100-Node Neural Matrix with Real-Time Spline Connections
function NeuralMatrixSwarm() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const nodeCount = 85;

  const { positions, linePositions, nodeColors } = useMemo(() => {
    const pos = new Float32Array(nodeCount * 3);
    const linePos: number[] = [];
    const colorCyan = new THREE.Color("#00f0ff");
    const colorPurple = new THREE.Color("#14B8A6");
    const colorGreen = new THREE.Color("#00ff9d");
    const colorMuted = new THREE.Color("#1e293b");

    const posVectors: THREE.Vector3[] = [];
    const colors: THREE.Color[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 3.6 + (Math.random() - 0.5) * 3.2;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      posVectors.push(new THREE.Vector3(x, y, z));

      const rand = Math.random();
      if (rand > 0.72) colors.push(colorCyan);
      else if (rand > 0.48) colors.push(colorPurple);
      else if (rand > 0.35) colors.push(colorGreen);
      else colors.push(colorMuted);
    }

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = posVectors[i].distanceTo(posVectors[j]);
        if (dist < 2.4) {
          linePos.push(
            posVectors[i].x, posVectors[i].y, posVectors[i].z,
            posVectors[j].x, posVectors[j].y, posVectors[j].z
          );
        }
      }
    }

    return {
      positions: pos,
      linePositions: new Float32Array(linePos),
      nodeColors: colors,
    };
  }, []);

  const tempObj = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < nodeCount; i++) {
      tempObj.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      );
      tempObj.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObj.matrix);
      meshRef.current.setColorAt(i, nodeColors[i]);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [positions, nodeColors, tempObj]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current && linesRef.current) {
      meshRef.current.rotation.y = time * 0.045;
      meshRef.current.rotation.x = Math.sin(time * 0.035) * 0.08;
      linesRef.current.rotation.y = time * 0.045;
      linesRef.current.rotation.x = Math.sin(time * 0.035) * 0.08;

      for (let i = 0; i < nodeCount; i++) {
        tempObj.position.set(
          positions[i * 3],
          positions[i * 3 + 1] + Math.sin(time * 1.6 + i * 0.5) * 0.12,
          positions[i * 3 + 2]
        );
        tempObj.updateMatrix();
        meshRef.current.setMatrixAt(i, tempObj.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group>
      <instancedMesh ref={meshRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[0.065, 16, 16]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00f0ff" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

// Stardust Nebula Background Particles
function StardustNebula() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 300;

  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 35;
      p[i * 3 + 1] = (Math.random() - 0.5) * 35;
      p[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return p;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.012;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#dfe921" transparent opacity={0.45} />
    </points>
  );
}

// Master Camera Choreographer linked to Scroll Progress
function CameraScrollController({ scrollProgress }: { scrollProgress: number }) {
  const { mouse } = useThree();
  const prefersReduced = useReducedMotion();

  useFrame((state) => {
    if (prefersReduced) return;

    // Camera smoothly glides along a 3D spline as you traverse the page
    const targetZ = 8.0 - scrollProgress * 3.8;
    const targetY = -scrollProgress * 6.5;

    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;

    // Interactive mouse parallax
    state.camera.position.x += (mouse.x * 2.2 - state.camera.position.x) * 0.04;
    state.camera.lookAt(0, targetY, 0);
  });

  return null;
}

function webglAvailable(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

class SceneBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

function FallbackBackdrop() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 50% 30%, rgba(0,240,255,0.16), transparent 55%), radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.14), transparent 55%), linear-gradient(to bottom, #05070c, #030305)",
      }}
    />
  );
}

export function SpatialWorldScene() {
  const scrollProgress = useScrollProgress();
  const [supported] = useState(() => webglAvailable());

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030305]">
      {supported ? (
        <SceneBoundary>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 48 }}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: false,
            }}
          >
            <CameraScrollController scrollProgress={scrollProgress} />
            <ambientLight intensity={0.45} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} color="#00f0ff" />
            <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#14B8A6" />

            {/* 3D World Objects */}
            <AtmosphericCore />
            <GyroscopeRings />
            <NeuralMatrixSwarm />
            <StardustNebula />
          </Canvas>
        </SceneBoundary>
      ) : (
        <FallbackBackdrop />
      )}

      {/* Cinematic Vignette & Atmospheric Glow Filter */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(0, 240, 255, 0.07) 0%, transparent 65%), radial-gradient(circle at 80% 25%, rgba(20, 184, 166, 0.08) 0%, transparent 55%), linear-gradient(to bottom, rgba(3,3,5,0.15) 0%, rgba(3,3,5,0.85) 95%)",
        }}
      />
    </div>
  );
}

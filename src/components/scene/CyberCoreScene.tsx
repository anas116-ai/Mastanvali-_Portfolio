"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function NeuralMatrix() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  const prefersReduced = useReducedMotion();

  const nodeCount = 70;

  const { positions, linePositions, nodeColors } = useMemo(() => {
    const pos = new Float32Array(nodeCount * 3);
    const linePos: number[] = [];
    const colorCyan = new THREE.Color("#00f0ff");
    const colorPurple = new THREE.Color("#14B8A6");
    const colorMuted = new THREE.Color("#334155");
    const posVectors: THREE.Vector3[] = [];
    const colors: THREE.Color[] = [];

    for (let i = 0; i < nodeCount; i++) {
      // Golden spiral spherical distribution
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 3.5 + (Math.random() - 0.5) * 2.5;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      posVectors.push(new THREE.Vector3(x, y, z));

      const rand = Math.random();
      if (rand > 0.75) {
        colors.push(colorCyan);
      } else if (rand > 0.55) {
        colors.push(colorPurple);
      } else {
        colors.push(colorMuted);
      }
    }

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = posVectors[i].distanceTo(posVectors[j]);
        if (dist < 2.2) {
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

    // Central Core Pulse & Rotation
    if (coreRef.current && !prefersReduced) {
      coreRef.current.rotation.x = time * 0.25;
      coreRef.current.rotation.y = time * 0.35;
      const scale = 1 + Math.sin(time * 2) * 0.08;
      coreRef.current.scale.set(scale, scale, scale);
    }

    // Outer Gyroscope Rings
    if (ring1Ref.current && ring2Ref.current && !prefersReduced) {
      ring1Ref.current.rotation.x = time * 0.15;
      ring1Ref.current.rotation.y = time * 0.1;
      ring2Ref.current.rotation.y = -time * 0.2;
      ring2Ref.current.rotation.z = time * 0.12;
    }

    // Node Swarm Rotation
    if (meshRef.current && linesRef.current && !prefersReduced) {
      meshRef.current.rotation.y = time * 0.04;
      meshRef.current.rotation.x = Math.sin(time * 0.03) * 0.08;

      linesRef.current.rotation.y = time * 0.04;
      linesRef.current.rotation.x = Math.sin(time * 0.03) * 0.08;

      // Parallax interaction with mouse
      state.camera.position.x += (mouse.x * 2.0 - state.camera.position.x) * 0.04;
      state.camera.position.y += (mouse.y * 1.5 - state.camera.position.y) * 0.04;
      state.camera.lookAt(0, 0, 0);

      // Micro float oscillation
      for (let i = 0; i < nodeCount; i++) {
        tempObj.position.set(
          positions[i * 3],
          positions[i * 3 + 1] + Math.sin(time * 1.2 + i) * 0.08,
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
      {/* Central Geometric Holographic Core */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.6}
          wireframe
          wireframeLinewidth={2}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Internal Plasma Glow Core */}
      <mesh>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.3} />
      </mesh>

      {/* Orbital Gyroscope Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.4} />
      </mesh>

      {/* Orbital Gyroscope Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.2, 0.012, 16, 100]} />
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.3} />
      </mesh>

      {/* Instanced Neural Nodes */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>

      {/* Neural Connector Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00f0ff" transparent opacity={0.2} />
      </lineSegments>

      {/* Dynamic Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} color="#00f0ff" intensity={2.5} distance={10} />
      <pointLight position={[5, 8, 5]} color="#14B8A6" intensity={1.8} />
      <pointLight position={[-5, -8, -5]} color="#00ff9d" intensity={1.2} />
    </group>
  );
}

export function CyberCoreScene() {
  return (
    <div className="absolute inset-0 z-0 bg-[#030305] pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 48 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <NeuralMatrix />
      </Canvas>
      {/* Cinematic Vignette & Radial Light Gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.08) 0%, transparent 50%), linear-gradient(to bottom, transparent 40%, #030305 95%)",
        }}
      />
    </div>
  );
}

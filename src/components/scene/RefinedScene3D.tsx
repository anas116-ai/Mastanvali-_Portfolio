"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function ElegantMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const particleGroupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  const prefersReduced = useReducedMotion();

  const particleCount = 180;

  // Stardust field — denser, with color variation
  const particles = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorBlue = new THREE.Color("#14B8A6");
    const colorCyan = new THREE.Color("#06b6d4");
    const colorPurple = new THREE.Color("#14B8A6");

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // Color variation
      const t = Math.random();
      const color = new THREE.Color();
      if (t < 0.4) color.copy(colorBlue);
      else if (t < 0.7) color.copy(colorCyan);
      else color.copy(colorPurple);

      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;

      sizes[i] = 0.02 + Math.random() * 0.03;
    }

    return { pos, col, sizes };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (!prefersReduced) {
      // Smooth organic rotation
      if (meshRef.current) {
        meshRef.current.rotation.x = time * 0.12;
        meshRef.current.rotation.y = time * 0.18;
        const scale = 1.5 + Math.sin(time * 1.0) * 0.06;
        meshRef.current.scale.set(scale, scale, scale);
      }

      // Orbital rings rotation
      if (ring1Ref.current) {
        ring1Ref.current.rotation.x = time * 0.15;
        ring1Ref.current.rotation.z = time * 0.08;
      }
      if (ring2Ref.current) {
        ring2Ref.current.rotation.y = time * 0.12;
        ring2Ref.current.rotation.x = Math.PI / 2.5 + time * 0.06;
      }
      if (ring3Ref.current) {
        ring3Ref.current.rotation.z = time * 0.1;
        ring3Ref.current.rotation.y = Math.PI / 4 + time * 0.04;
      }

      if (particleGroupRef.current) {
        particleGroupRef.current.rotation.y = time * 0.035;
        particleGroupRef.current.rotation.x = Math.sin(time * 0.025) * 0.06;
      }

      // Parallax with dampening
      state.camera.position.x += (mouse.x * 1.2 - state.camera.position.x) * 0.025;
      state.camera.position.y += (mouse.y * 1.0 - state.camera.position.y) * 0.025;
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group>
      {/* Central High-End Refraction Icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#1e293b"
          emissive="#14B8A6"
          emissiveIntensity={0.3}
          roughness={0.08}
          metalness={0.95}
          clearcoat={1}
          clearcoatRoughness={0.08}
          wireframe
          wireframeLinewidth={1.5}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Internal Subtle Light Core — breathing */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.12} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.08} />
      </mesh>

      {/* Orbital Minimal Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.8, 0.006, 16, 120]} />
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.35} />
      </mesh>

      {/* Orbital Minimal Ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
        <torusGeometry args={[3.2, 0.005, 16, 120]} />
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.25} />
      </mesh>

      {/* Orbital Minimal Ring 3 */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[3.6, 0.004, 16, 120]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.2} />
      </mesh>

      {/* Floating Particles — multi-color */}
      <group ref={particleGroupRef}>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[particles.pos, 3]}
            />
            <bufferAttribute
              attach="attributes-color"
              args={[particles.col, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.035}
            vertexColors
            transparent
            opacity={0.6}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>
      </group>

      {/* Lighting — refined */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[0, 0, 0]} color="#14B8A6" intensity={2.5} distance={10} />
      <pointLight position={[-5, -5, -3]} color="#14B8A6" intensity={1.2} distance={8} />
      <pointLight position={[4, 3, -4]} color="#06b6d4" intensity={0.8} distance={6} />
    </group>
  );
}

export function RefinedScene3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ElegantMesh />
      </Canvas>

      {/* Subtle radial luxury vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(20, 184, 166, 0.06) 0%, transparent 55%), radial-gradient(circle at 30% 60%, rgba(20, 184, 166, 0.04) 0%, transparent 45%), linear-gradient(to bottom, transparent 30%, #000000 92%)",
        }}
      />
    </div>
  );
}

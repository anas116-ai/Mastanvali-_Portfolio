"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Scene() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { mouse } = useThree();
  const prefersReducedMotion = useReducedMotion();

  const nodeCount = 50;

  const { positions, linePositions, nodeColors } = useMemo(() => {
    const pos = new Float32Array(nodeCount * 3);
    const linePos: number[] = [];
    const colorAccent = new THREE.Color("#14B8A6");
    const colorMuted = new THREE.Color("#52525b");
    const positionsArr: THREE.Vector3[] = [];
    const colors: THREE.Color[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 8;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      positionsArr.push(new THREE.Vector3(x, y, z));
      const isAccent = Math.random() > 0.8;
      colors.push(isAccent ? colorAccent : colorMuted);
    }

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = positionsArr[i].distanceTo(positionsArr[j]);
        if (dist < 3.2) {
          linePos.push(
            positionsArr[i].x,
            positionsArr[i].y,
            positionsArr[i].z,
            positionsArr[j].x,
            positionsArr[j].y,
            positionsArr[j].z
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
    if (!meshRef.current || !linesRef.current || prefersReducedMotion) return;

    const time = state.clock.getElapsedTime();

    meshRef.current.rotation.y = time * 0.02;
    meshRef.current.rotation.x = Math.sin(time * 0.04) * 0.05;

    linesRef.current.rotation.y = time * 0.02;
    linesRef.current.rotation.x = Math.sin(time * 0.04) * 0.05;

    // Smooth subtle mouse parallax
    state.camera.position.x +=
      (mouse.x * 1.2 - state.camera.position.x) * 0.03;
    state.camera.position.y +=
      (mouse.y * 1.2 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);

    for (let i = 0; i < nodeCount; i++) {
      tempObj.position.set(
        positions[i * 3],
        positions[i * 3 + 1] + Math.sin(time * 0.6 + i * 0.5) * 0.15,
        positions[i * 3 + 2]
      );
      tempObj.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObj.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      <instancedMesh ref={meshRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3f3f46" transparent opacity={0.25} />
      </lineSegments>

      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} color="#14B8A6" intensity={1.2} />
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 bg-[var(--color-bg)] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, var(--color-bg) 95%)",
        }}
      />
    </div>
  );
}

"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Signature ivory tone — low-poly abstract coder, deliberately no face.
const IVORY = "#E8E2D4";

interface CoderManProps {
  /** overall vertical bob amplitude while walking */
  bob?: number;
  pose?: "walk" | "stand";
}

function L({ children, position }: { children: React.ReactNode; position?: [number, number, number] }) {
  return <group position={position}>{children}</group>;
}

/**
 * Procedural low-poly humanoid made from primitive meshes with jointed
 * limbs so the legs/arms can swing in a real walk cycle. Ivory, no face.
 */
export function CoderMan({ bob = 0.06, pose = "walk" }: CoderManProps) {
  const root = useRef<THREE.Group>(null);
  const hip = useRef<THREE.Group>(null);
  const leftLeg = useRef<THREE.Group>(null);
  const rightLeg = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const swing = Math.sin(t * 7) * (pose === "walk" ? 0.55 : 0.03);

    if (leftLeg.current) leftLeg.current.rotation.x = swing;
    if (rightLeg.current) rightLeg.current.rotation.x = -swing;
    if (leftArm.current) leftArm.current.rotation.x = -swing * 0.8;
    if (rightArm.current) rightArm.current.rotation.x = swing * 0.8;
    if (hip.current) hip.current.rotation.x = Math.sin(t * 7) * 0.05;
    if (root.current) root.current.position.y = Math.abs(Math.sin(t * 7)) * bob;
  });

  const limbMat = <meshStandardMaterial color={IVORY} roughness={0.82} metalness={0.06} />;
  const bodyMat = <meshStandardMaterial color={IVORY} roughness={0.78} metalness={0.08} />;

  return (
    <group ref={root}>
      {/* hips — the joint everything rotates at */}
      <group ref={hip} position={[0, 0.9, 0]}>
        {/* LEGS */}
        <group ref={leftLeg} position={[-0.18, 0, 0]}>
          <mesh position={[0, -0.22, 0]}>
            <capsuleGeometry args={[0.07, 0.34, 4, 12]} />
            {limbMat}
          </mesh>
          <mesh position={[0, -0.46, 0]}>
            <boxGeometry args={[0.14, 0.12, 0.24]} />
            {limbMat}
          </mesh>
        </group>
        <group ref={rightLeg} position={[0.18, 0, 0]}>
          <mesh position={[0, -0.22, 0]}>
            <capsuleGeometry args={[0.07, 0.34, 4, 12]} />
            {limbMat}
          </mesh>
          <mesh position={[0, -0.46, 0]}>
            <boxGeometry args={[0.14, 0.12, 0.24]} />
            {limbMat}
          </mesh>
        </group>
      </group>

      {/* slim tapered torso (abstract / minimal, not cartoon) */}
      <mesh position={[0, 0.55, 0]}>
        <capsuleGeometry args={[0.22, 0.4, 6, 16]} />
        {bodyMat}
      </mesh>

      {/* ARMS — jointed at shoulder */}
      <group ref={leftArm} position={[-0.3, 0.85, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <capsuleGeometry args={[0.055, 0.4, 4, 12]} />
          {limbMat}
        </mesh>
        <mesh position={[0, -0.66, 0]}>
          <boxGeometry args={[0.11, 0.09, 0.14]} />
          {limbMat}
        </mesh>
      </group>
      <group ref={rightArm} position={[0.3, 0.85, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <capsuleGeometry args={[0.055, 0.4, 4, 12]} />
          {limbMat}
        </mesh>
        <mesh position={[0, -0.66, 0]}>
          <boxGeometry args={[0.11, 0.09, 0.14]} />
          {limbMat}
        </mesh>
      </group>

      {/* HEAD — abstract low-poly sphere, NO face */}
      <mesh position={[0, 1.28, 0]}>
        <icosahedronGeometry args={[0.24, 1]} />
        <meshStandardMaterial color={IVORY} roughness={0.7} flatShading metalness={0.05} />
      </mesh>
    </group>
  );
}

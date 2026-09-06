"use client";

import React from "react";
import * as THREE from "three";

export function ReflectiveFloor() {
  return (
    <group position={[0, -2.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Floor Base Plane */}
      <mesh receiveShadow>
        <planeGeometry args={[10, 10, 32, 32]} />
        <meshStandardMaterial
          color="#050914"
          roughness={0.65}
          metalness={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Volumetric Floor Glow (Oceanic Cyan) */}
      <mesh position={[0, 0, 0.01]}>
        <circleGeometry args={[1.6, 32]} />
        <meshBasicMaterial
          color="#14B8A6"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Sharp Contact Shadow Circle (Under Shoes) */}
      <mesh position={[0, -0.05, 0.02]}>
        <ellipseCurve
          aX={0}
          aY={0}
          xRadius={0.75}
          yRadius={0.35}
          aStartAngle={0}
          aEndAngle={2 * Math.PI}
          aClockwise={false}
          aRotation={0}
        />
        <circleGeometry args={[0.75, 32]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.75} />
      </mesh>
    </group>
  );
}

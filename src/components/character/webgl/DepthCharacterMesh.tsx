"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { createCharacterShaderMaterial } from "./CharacterShaderMaterial";

interface DepthCharacterMeshProps {
  diffuseSrc: string;
  closedEyesSrc?: string;
  depthSrc: string;
  normalSrc: string;
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
}

export function DepthCharacterMesh({
  diffuseSrc,
  closedEyesSrc = "/images/avatar/style_01_eyes_closed.png",
  depthSrc,
  normalSrc,
  mousePosition,
}: DepthCharacterMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load all master textures
  const [diffuseTex, closedTex, depthTex, normalTex] = useLoader(
    THREE.TextureLoader,
    [diffuseSrc, closedEyesSrc, depthSrc, normalSrc]
  );

  // Configure texture parameters for razor-sharp 4K clarity
  useEffect(() => {
    [diffuseTex, closedTex, depthTex, normalTex].forEach((tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
    });
  }, [diffuseTex, closedTex, depthTex, normalTex]);

  // Create Shader Material
  const shaderMat = useMemo(() => {
    return createCharacterShaderMaterial(
      diffuseTex,
      closedTex,
      depthTex,
      normalTex
    );
  }, [diffuseTex, closedTex, depthTex, normalTex]);

  // Target mouse values for smooth physical inertia
  const currentMouse = useRef(new THREE.Vector2(0, 0));
  const currentRotY = useRef(0);
  const currentRotX = useRef(0);

  useFrame(({ clock }) => {
    if (!meshRef.current || !shaderMat) return;

    const time = clock.getElapsedTime();
    shaderMat.uniforms.uTime.value = time;

    // Smooth damp mouse position with realistic physical mass
    const targetX = mousePosition.current.x;
    const targetY = mousePosition.current.y;

    currentMouse.current.x += (targetX - currentMouse.current.x) * 0.04;
    currentMouse.current.y += (targetY - currentMouse.current.y) * 0.04;

    shaderMat.uniforms.uMouse.value.copy(currentMouse.current);

    // Realistic directional light position following cursor
    shaderMat.uniforms.uLightPosition.value.set(
      currentMouse.current.x * 2.5,
      currentMouse.current.y * 1.8 + 1.2,
      3.0
    );

    // Fluid organic 3D tilt responding naturally to pointer with physical mass & inertia
    const targetRotY = currentMouse.current.x * 0.12;
    const targetRotX = -currentMouse.current.y * 0.055;

    currentRotY.current += (targetRotY - currentRotY.current) * 0.045;
    currentRotX.current += (targetRotX - currentRotX.current) * 0.045;

    meshRef.current.rotation.y = currentRotY.current;
    meshRef.current.rotation.x = currentRotX.current;

    // Organic idle micro-motion (gentle physical breathing baseline centered at BASE_Y)
    const BASE_Y = -0.05;
    meshRef.current.position.y = BASE_Y + Math.sin(time * 1.3) * 0.010;
    meshRef.current.position.x = Math.sin(time * 0.65) * 0.005;
  });

  return (
    <mesh ref={meshRef} position={[0, -0.05, 0]} scale={[0.81, 0.81, 0.81]} castShadow receiveShadow>
      {/* High-res mesh for smooth lighting and depth */}
      <planeGeometry args={[3.2, 4.28, 128, 128]} />
      <primitive object={shaderMat} attach="material" />
    </mesh>
  );
}

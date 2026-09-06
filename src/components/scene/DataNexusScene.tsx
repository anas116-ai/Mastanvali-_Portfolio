"use client";

import { useRef, useMemo, useEffect, useState, Component } from "react";
import type { ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/* =====================================================================
   NEXUS // DATA -> INTELLIGENCE
   A Kage-style scroll-driven procedural 3D world themed as a data nexus:
   streaming pipeline floor, a silent central core, and a rain of data
   packets feeding it. No external assets — everything is generated.
   ===================================================================== */

const TAU = Math.PI * 2;
const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* The camera walks a path of chapters. Each keyframe is {p: position, t: target, fov}.
   Scroll progress is continuous across the page; we blend neighbouring keyframes in
   the current chapter to keep the walk fluid (Kage idiom, simplified). */
interface CamKey {
  p: [number, number, number];
  t: [number, number, number];
  fov: number;
}
const CAM: CamKey[] = [
  { p: [0, 4.6, 0], t: [0, 4.6, -9], fov: 44 },
  { p: [0, 5.6, -14], t: [0, 4.6, -30], fov: 46 },
  { p: [0.4, 6.4, -30], t: [0, 5.2, -48], fov: 47 },
  { p: [-0.6, 7.4, -48], t: [0, 6.2, -66], fov: 48 },
  { p: [0.6, 8.4, -66], t: [0, 7.4, -86], fov: 49 },
  { p: [0, 9.6, -88], t: [0, 8.6, -108], fov: 50 },
];

/* Fallback backdrop when the 3D world sits far away or is unavailable */
function FallbackBackdrop() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 50% 32%, rgba(0,240,255,0.14), transparent 52%), radial-gradient(circle at 82% 68%, rgba(20, 184, 166, 0.13), transparent 52%), linear-gradient(to bottom, #04070b, #020305)",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* The streaming pipeline floor: rows of light flowing toward the camera */
function DataStreamFloor() {
  const gridRef = useRef<THREE.GridHelper>(null);
  const streamRef = useRef<THREE.LineSegments>(null);

  const { streamPositions, streamAmounts } = useMemo(() => {
    const lanes = 46;
    const segments = 34;
    const positions: number[] = [];
    const amounts: number[] = [];
    const span = 44;
    for (let l = 0; l < lanes; l++) {
      const x = (l / (lanes - 1) - 0.5) * span;
      const a = 0.06 + (l % 7) * 0.02;
      for (let s = 0; s <= segments; s++) {
        const z = -4 - (s / segments) * 130;
        positions.push(x, 0, z);
        amounts.push(a);
      }
    }
    return { streamPositions: new Float32Array(positions), streamAmounts: new Float32Array(amounts) };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (gridRef.current) gridRef.current.position.z = 0;
    if (streamRef.current) {
      streamRef.current.rotation.x = -Math.PI / 2;
      /* each node flows +z (toward camera) over the shader uniform-less line;
         simpler: pulse opacity via material — keep alive */
    }
  });

  return (
    <group position={[0, -0.01, 0]}>
      <gridHelper ref={gridRef} args={[140, 70, "#0b3b44", "#0a2530"]} position={[0, 0, -30]} />
      <lineSegments ref={streamRef} position={[0, 0.01, -70]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[streamPositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#00f0ff" transparent opacity={0.18} />
      </lineSegments>
    </group>
  );
}

/* The central data core: a wireframe monolith + inner orb of light */
function DataCore() {
  const outer = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outer.current) {
      outer.current.rotation.y = t * 0.18;
      outer.current.rotation.x = Math.sin(t * 0.12) * 0.25;
    }
    if (inner.current) {
      const s = 1 + Math.sin(t * 2.2) * 0.08;
      inner.current.scale.set(s, s, s);
    }
    if (ring.current) {
      ring.current.rotation.x = t * 0.4;
      ring.current.rotation.y = t * 0.3;
    }
  });

  return (
    <group position={[0, 3.6, -40]}>
      <mesh ref={outer}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.55}
          wireframe
          transparent
          opacity={0.7}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>
      <mesh ref={inner}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshBasicMaterial color="#00ff9d" transparent opacity={0.5} wireframe />
      </mesh>
      <mesh ref={ring}>
        <torusGeometry args={[3.1, 0.014, 16, 120]} />
        <meshBasicMaterial color="#14B8A6" transparent opacity={0.6} />
      </mesh>
      {/* rising column of light through the core */}
      <mesh position={[0, -8, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 14, 16, 1, true]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.28} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <pointLight color="#00f0ff" intensity={40} distance={28} decay={2} position={[0, 4, -40]} />
      <pointLight color="#14B8A6" intensity={24} distance={22} decay={2} position={[6, 8, -36]} />
    </group>
  );
}

/* Neural node network arcing into the nexus */
function NeuralSwarm() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const count = 120;

  const { positions, linePositions, nodeColors, perNodePhase } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const colors: THREE.Color[] = [];
    const phase: number[] = [];
    const vectors: THREE.Vector3[] = [];
    const linePos: number[] = [];
    const cCyan = new THREE.Color("#00f0ff");
    const cPurple = new THREE.Color("#14B8A6");
    const cGreen = new THREE.Color("#00ff9d");
    const cMuted = new THREE.Color("#1e293b");
    const rnd = mulberry32(2024);

    for (let i = 0; i < count; i++) {
      const x = (rnd() - 0.5) * 60;
      const y = rnd() * 18 + 1;
      const z = (rnd() - 0.5) * 100 - 20;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      vectors.push(new THREE.Vector3(x, y, z));
      phase.push(rnd() * TAU);
      const r = rnd();
      if (r > 0.8) colors.push(cCyan);
      else if (r > 0.6) colors.push(cPurple);
      else if (r > 0.45) colors.push(cGreen);
      else colors.push(cMuted);
    }

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (vectors[i].distanceTo(vectors[j]) < 5.5) {
          linePos.push(
            vectors[i].x, vectors[i].y, vectors[i].z,
            vectors[j].x, vectors[j].y, vectors[j].z
          );
        }
      }
    }
    return { positions: pos, linePositions: new Float32Array(linePos), nodeColors: colors, perNodePhase: phase };
  }, []);

  const tmp = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      tmp.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      tmp.updateMatrix();
      meshRef.current.setMatrixAt(i, tmp.matrix);
      meshRef.current.setColorAt(i, nodeColors[i]);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  }, [positions, nodeColors, tmp]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      tmp.position.set(
        positions[i * 3],
        positions[i * 3 + 1] + Math.sin(t * 1.4 + perNodePhase[i]) * 0.18,
        positions[i * 3 + 2]
      );
      tmp.updateMatrix();
      meshRef.current.setMatrixAt(i, tmp.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (linesRef.current) {
      linesRef.current.rotation.z = Math.sin(t * 0.1) * 0.02;
    }
  });

  return (
    <group>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#00f0ff" transparent opacity={0.14} />
      </lineSegments>
    </group>
  );
}

/* Data-rain: instanced packets streaming toward the core (Kage leaf-fall idiom) */
function DataRain() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 320;

  const { attr, speeds } = useMemo(() => {
    const a = new Float32Array(count * 3);
    const s = new Float32Array(count);
    const rnd = mulberry32(77);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (rnd() - 0.5) * 70;
      a[i * 3 + 1] = rnd() * 40 - 4;
      a[i * 3 + 2] = -10 - rnd() * 120;
      s[i] = 1.2 + rnd() * 3;
    }
    return { attr: a, speeds: s };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const pos = attr as Float32Array;
    const coreY = 3.6;
    for (let i = 0; i < count; i++) {
      /* pull toward core along a shallow cone */
      pos[i * 3 + 1] -= speeds[i] * delta * 0.6;
      pos[i * 3 + 2] += speeds[i] * delta * 0.35;
      if (pos[i * 3 + 1] < coreY - 10 || pos[i * 3 + 2] > -20) {
        pos[i * 3] = (Math.random() - 0.5) * 70;
        pos[i * 3 + 1] = coreY + 16;
        pos[i * 3 + 2] = -110 - Math.random() * 40;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[attr, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.14} color="#00ff9d" transparent opacity={0.5} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

/* Ambient nebula dust */
function NebulaDust() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 260;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 120;
      p[i * 3 + 1] = Math.random() * 30 - 2;
      p[i * 3 + 2] = (Math.random() - 0.5) * 140 - 20;
    }
    return p;
  }, []);
  useFrame((state) => {
    if (pointsRef.current) pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#dfe921" transparent opacity={0.28} sizeAttenuation />
    </points>
  );
}

/* Camera walks the chapter keyframe path with the scroll progress */
function CameraScrollController({ progress }: { progress: number }) {
  const { mouse } = useThree();
  const reduced = useReducedMotion();

  const targetPos = useMemo(() => new THREE.Vector3(), []);
  const targetLook = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    if (reduced) return;

    /* map page progress 0..1 onto the keyframe spline */
    const F = (CAM.length - 1) * clamp(progress, 0, 1);
    const i = clamp(Math.floor(F), 0, CAM.length - 2);
    const k = clamp(F - i, 0, 1);
    const a = CAM[i];
    const b = CAM[i + 1];
    const e = k * k * (3 - 2 * k); // smoothstep between keyframes

    targetPos.set(
      lerp(a.p[0], b.p[0], e),
      lerp(a.p[1], b.p[1], e),
      lerp(a.p[2], b.p[2], e)
    );
    targetLook.set(
      lerp(a.t[0], b.t[0], e),
      lerp(a.t[1], b.t[1], e),
      lerp(a.t[2], b.t[2], e)
    );

    /* mouse parallax + exponential damping (frame-rate independent) */
    const damp = 1 - Math.exp(-2.2 * delta);
    state.camera.position.x += (targetPos.x + mouse.x * 1.6 - state.camera.position.x) * damp;
    state.camera.position.y += (targetPos.y - state.camera.position.y) * damp;
    state.camera.position.z += (targetPos.z + mouse.y * 0.6 - state.camera.position.z) * damp;
    state.camera.lookAt(targetLook);

    const cam = state.camera as THREE.PerspectiveCamera;
    const fov = lerp(a.fov, b.fov, e);
    if (cam.fov !== undefined) {
      if (Math.abs(cam.fov - fov) > 0.02) {
        cam.fov += (fov - cam.fov) * damp;
        cam.updateProjectionMatrix();
      }
    }
  });
  return null;
}

class SceneBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

function webglAvailable(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function DataNexusScene() {
  const progress = useScrollProgress();
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(webglAvailable());
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020305]">
      {supported ? (
        <SceneBoundary>
          <Canvas
            camera={{ position: [0, 4.6, 0], fov: 44 }}
            dpr={[1, 1.8]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: false,
            }}
          >
            <fog attach="fog" args={["#020305", 14, 78]} />
            <CameraScrollController progress={progress} />
            <ambientLight intensity={0.35} />
            <directionalLight position={[12, 16, 8]} intensity={1.1} color="#14B8A6" />
            <directionalLight position={[-10, 6, -12]} intensity={0.8} color="#14B8A6" />

            <DataStreamFloor />
            <DataCore />
            <NeuralSwarm />
            <DataRain />
            <NebulaDust />
          </Canvas>
        </SceneBoundary>
      ) : (
        <FallbackBackdrop />
      )}

      {/* cinematic grade: vignette + upward fade so text stays legible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,3,5,0.55) 0%, rgba(2,3,5,0.05) 34%, rgba(2,3,5,0.05) 60%, rgba(2,3,5,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 160px rgba(0,0,0,0.85)",
        }}
      />
    </div>
  );
}

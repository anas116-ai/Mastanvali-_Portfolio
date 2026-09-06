"use client";

import React, { useState, Suspense, useRef, useEffect } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Check, Sparkles, Cpu, Layers, Database, Eye, Terminal, ExternalLink, Globe, Compass, Monitor } from "lucide-react";

// --- CHARACTER IMPORTS ---
import { V2CharacterRig } from "@/components/v2/character/V2CharacterRig";
import { DepthCharacterMesh } from "@/components/character/webgl/DepthCharacterMesh";
import { GroundShadow3D } from "@/components/character/webgl/GroundShadow3D";
import { VolumetricParticleSystem } from "@/components/character/webgl/VolumetricParticleSystem";
import { CharacterLighting } from "@/components/character/CharacterLighting";
import { CharacterShadow } from "@/components/character/CharacterShadow";
import { LaptopFloatingStreams } from "@/components/character/LaptopFloatingStreams";
import { GlitterShimmerParticles } from "@/components/character/GlitterShimmerParticles";
import { HeroScene } from "@/components/hero/HeroScene";

// --- PROJECTS IMPORTS ---
import { ProjectsSection } from "@/components/creator/ProjectsSection";
import { V2SelectedWork } from "@/components/v2/work/V2SelectedWork";
import { SpatialProjects } from "@/components/sections/SpatialProjects";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Projects as EditorialProjects } from "@/components/editorial/Projects";

// Version 2: Pure 3D GPU Depth Mesh + Volumetric Dust (NO TEXT, PURE THREE.JS)
function CharacterV2RealDepth() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const normX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const normY = -((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2));
      mousePosition.current.x = Math.max(-1, Math.min(1, normX));
      mousePosition.current.y = Math.max(-1, Math.min(1, normY));
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[540px] sm:h-[600px] flex items-end justify-center select-none"
    >
      <Canvas
        camera={{ position: [0, 0.05, 5.7], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full pointer-events-auto"
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[2.5, 3.0, 3.5]} intensity={1.6} color="#14B8A6" />
        <pointLight position={[-2.5, 2.0, 2.5]} intensity={1.2} color="#F47A18" />

        <Suspense fallback={null}>
          <DepthCharacterMesh
            diffuseSrc="/images/avatar/style_01_4k_transparent.png"
            closedEyesSrc="/images/avatar/style_01_eyes_closed.png"
            depthSrc="/images/avatar/style_01_depth.png"
            normalSrc="/images/avatar/style_01_normal.png"
            mousePosition={mousePosition}
          />
          <GroundShadow3D mousePosition={mousePosition} />
          <VolumetricParticleSystem count={650} mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Version 4: Pure Minimalist Studio Avatar (2D tilt + Studio Rim Lighting + Contact Shadow)
function CharacterV4StudioPure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 20 });
  const rotateY = useTransform(springX, [-1, 1], [-12, 12]);
  const rotateX = useTransform(springY, [-1, 1], [10, -10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const normX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const normY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mouseX.set(Math.max(-1, Math.min(1, normX)));
      mouseY.set(Math.max(-1, Math.min(1, normY)));
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[460px] mx-auto h-[520px] flex flex-col items-center justify-end select-none"
      style={{ perspective: "1000px" }}
    >
      <CharacterLighting accentColor="#F47A18" secondaryAccent="#E2E8F0" isNearCursor={true} />
      <CharacterShadow accentColor="#F47A18" />
      <motion.div
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative z-10 w-full flex justify-center items-end"
      >
        <img
          src="/images/avatar/style_01_4k_transparent.png"
          alt="Shaik Mastan Vali"
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
        />
      </motion.div>
    </div>
  );
}

// Version 5: Sequenced Laptop Code Stream Capsules
function CharacterV5LaptopStreams() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 20 });
  const rotateY = useTransform(springX, [-1, 1], [-12, 12]);
  const rotateX = useTransform(springY, [-1, 1], [10, -10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const normX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const normY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mouseX.set(Math.max(-1, Math.min(1, normX)));
      mouseY.set(Math.max(-1, Math.min(1, normY)));
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] mx-auto h-[530px] flex flex-col items-center justify-end select-none"
      style={{ perspective: "1000px" }}
    >
      <CharacterLighting accentColor="#F47A18" secondaryAccent="#E2E8F0" isNearCursor={true} />
      <CharacterShadow accentColor="#F47A18" />
      <motion.div
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative z-10 w-full flex justify-center items-end"
      >
        <img
          src="/images/avatar/style_01_4k_transparent.png"
          alt="Shaik Mastan Vali"
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
        />
      </motion.div>
      <LaptopFloatingStreams />
    </div>
  );
}

// Version 6: ThreeUI Glitter Diamonds
function CharacterV6Glitter() {
  return (
    <div
      className="relative w-full max-w-[480px] mx-auto h-[530px] flex flex-col items-center justify-end select-none"
      style={{ perspective: "1000px" }}
    >
      <CharacterLighting accentColor="#F47A18" secondaryAccent="#E2E8F0" isNearCursor={true} />
      <CharacterShadow accentColor="#F47A18" />
      <div className="relative z-10 w-full flex justify-center items-end">
        <img
          src="/images/avatar/style_01_4k_transparent.png"
          alt="Shaik Mastan Vali"
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
        />
      </div>
      <GlitterShimmerParticles />
    </div>
  );
}

// Version 1: Abstract Three.js Network
function CharacterV1Abstract3D() {
  return (
    <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-[#050914]">
      <HeroScene />
      <div className="absolute bottom-6 left-6 font-mono text-xs text-[#14B8A6]">
        + THREE.JS PROCEDURAL NETWORK // 60 INSTANCED DATA NODES
      </div>
    </div>
  );
}

export default function VersionsShowcasePage() {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("v3");
  const [selectedProject, setSelectedProject] = useState<string>("pv1");
  const [activeEdition, setActiveEdition] = useState<string>("/");

  const websiteEditions = [
    {
      id: "v1",
      path: "/",
      tag: "EDITION 1 (CURRENT HOMEPAGE)",
      title: "Keynote Creator & Vibe Coder",
      desc: "Warpaint bold headline, 3D WebGL character with rotating orbital matrix rings, 2-row Marquee, About Bento, Fortune 500 Enterprise Data Pipeline, 6 Services, Sticky-Stacking Projects, Luxury Horizon Contact.",
      accent: "#F47A18",
      features: ["3D Character Rig", "Orbit Rings", "Sticky Projects", "Pipeline Flow"],
    },
    {
      id: "v2",
      path: "/v2",
      tag: "EDITION 2 (MODULAR TECH)",
      title: "V2 Modular Engineering & Deep Accordion",
      desc: "Minimal floating pill navigation, cinematic hero with tech badges, V2 Selected Work with interactive click-expand architecture accordion, 4-domain capabilities, interactive ETL pipeline, AI philosophy manifesto.",
      accent: "#14B8A6",
      features: ["Floating Pill Nav", "Expandable Accordion", "AI Manifesto", "ETL Process"],
    },
    {
      id: "v3",
      path: "/redesign",
      tag: "EDITION 3 (STUDIO LUXURY)",
      title: "Quiet Luxury Studio Editorial",
      desc: "Minimal quiet luxury aesthetic, 2.5D tilt avatar, technology signal strip, 'How I Think About Building' philosophy, enterprise credibility timeline, capabilities-first stack, system archive.",
      accent: "#38BDF8",
      features: ["Studio Dark", "Signal Strip", "Editorial Philosophy", "Systems Archive"],
    },
    {
      id: "v4",
      path: "/kage",
      tag: "EDITION 4 (3D SPATIAL)",
      title: "ThreeUI 3D Cyber Temple World",
      desc: "Full-screen interactive 3D WebGL cyber-temple world with dynamic lighting, spatial camera controls, particle fields, ambient cybernetic temple aesthetic.",
      accent: "#E0231C",
      features: ["Full WebGL World", "3D Camera Navigation", "Cyber Temple", "Spatial Lighting"],
    },
  ];

  const characterOptions = [
    {
      id: "v3",
      tag: "V3 (V2 MASTER RIG)",
      title: "Real 3D Depth + Side Code Chips + Greeting",
      desc: "Three.js WebGL canvas with GPU vertex depth parallax, blinking eyes, 650 volumetric dust motes, and sleek side-flanking code chips. User favorite.",
      accent: "#14B8A6",
    },
    {
      id: "v2",
      tag: "V2 (PURE 3D)",
      title: "Real 3D GPU Depth Mesh + Volumetric Dust",
      desc: "Pure Three.js canvas. 256x256 GPU depth displacement, eye blinking, 650 drifting dust particles. Zero text or chips.",
      accent: "#14B8A6",
    },
    {
      id: "v5",
      tag: "V5 (LAPTOP SEQUENCED)",
      title: "Sequenced Laptop Code Stream Capsules",
      desc: "Obsidian glass capsules emerging strictly one by one from laptop sides (BODS, SQL, LLMs) and fading to 0 away from the face.",
      accent: "#F47A18",
    },
    {
      id: "v4",
      tag: "V4 (STUDIO PURE)",
      title: "Pure Minimalist Studio Avatar",
      desc: "Clean 4K avatar with 3D mouse tilt, dual-tone studio rim lighting, and ground contact shadow. Zero floating elements.",
      accent: "#CBD5E1",
    },
    {
      id: "v6",
      tag: "V6 (GLITTER)",
      title: "ThreeUI Diamond Star Glitter",
      desc: "16 rotating diamond stars and glimmer crosses around laptop and hands.",
      accent: "#FCD34D",
    },
    {
      id: "v1",
      tag: "V1 (ABSTRACT 3D)",
      title: "Abstract 3D Network Scene",
      desc: "Procedural Three.js sphere network with camera parallax and data line mesh. No avatar image.",
      accent: "#14B8A6",
    },
  ];

  const projectOptions = [
    {
      id: "pv1",
      tag: "PV1 (STICKY STACKING)",
      title: "Sticky-Stacking Perception Cards",
      desc: "4 Projects (AnPharmacy, AnsiQ, Anasify, Qode-Sync) that slide over and stack on top of each other as you scroll with 3D perception scaling.",
      accent: "#14B8A6",
    },
    {
      id: "pv2",
      tag: "PV2 (V2 ACCORDION)",
      title: "V2 Expandable Case Studies Accordion",
      desc: "Numbered badges (01-04) that click-expand to reveal complete technical architecture, capabilities, and repository verification.",
      accent: "#14B8A6",
    },
    {
      id: "pv3",
      tag: "PV3 (SPATIAL 3D)",
      title: "3D Spatial Depth Cards",
      desc: "Glass-morphic 3D panels with cyan glow borders, interactive expanders, and architecture diagrams.",
      accent: "#38BDF8",
    },
    {
      id: "pv4",
      tag: "PV4 (CLASSIC BENTO)",
      title: "Classic Bento Architecture",
      desc: "Structured bento panels with technical capabilities checklists and repository buttons.",
      accent: "#F47A18",
    },
    {
      id: "pv5",
      tag: "PV5 (EDITORIAL)",
      title: "Editorial Magazine Grid",
      desc: "Large typographic titles with full-width preview screenshots and narrative columns.",
      accent: "#F47A18",
    },
  ];

  return (
    <div className="min-h-screen bg-[#060A14] text-[#F3F1E8] font-sans antialiased selection:bg-[#F47A18]/30 selection:text-[#F47A18]">
      {/* --- TOP PERSISTENT CONTROLLER BAR --- */}
      <header className="sticky top-0 z-50 bg-[#080E1A]/95 backdrop-blur-2xl border-b border-white/10 px-5 sm:px-8 py-4 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-[#B8C4CC] hover:text-white transition-all"
            >
              <ArrowLeft size={13} />
              <span>Back to Home</span>
            </Link>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Version Comparison Studio
              </h1>
              <p className="text-[11px] text-[#B8C4CC]">
                Click any button to test that exact version live on this page!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs bg-[#040810] px-3.5 py-1.5 rounded-lg border border-white/10 text-[#B8C4CC]">
            <span>Active:</span>
            <span className="text-[#14B8A6] font-bold">{selectedCharacter.toUpperCase()}</span>
            <span>+</span>
            <span className="text-[#14B8A6] font-bold">{selectedProject.toUpperCase()}</span>
          </div>
        </div>

        {/* CONTROLLER SWITCHERS */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 pt-3 mt-3 border-t border-white/5">
          {/* 1. Character Selector */}
          <div>
            <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <Eye size={12} className="text-[#14B8A6]" />
              <span>Select Character Version:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {characterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedCharacter(opt.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-all border ${
                    selectedCharacter === opt.id
                      ? "bg-white text-black border-white shadow-lg scale-105"
                      : "bg-[#0A101C] text-[#B8C4CC] border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {opt.tag}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Projects Selector */}
          <div>
            <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <Layers size={12} className="text-[#14B8A6]" />
              <span>Select 4 Projects Version:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {projectOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedProject(opt.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-all border ${
                    selectedProject === opt.id
                      ? "bg-emerald-400 text-black border-emerald-400 shadow-lg scale-105"
                      : "bg-[#0A101C] text-[#B8C4CC] border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {opt.tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* --- LIVE STAGE PREVIEW --- */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-10 space-y-20">
        {/* ========================================================= */}
        {/* SECTION 0: 4 COMPLETE WEBSITE EDITIONS LIVE PREVIEW */}
        {/* ========================================================= */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F47A18]/15 text-[#F47A18] border border-[#F47A18]/30 shadow-[0_0_15px_rgba(244,122,24,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#F47A18] animate-pulse" />
                <span>4 COMPLETE WEBSITE EDITIONS PREVIEW</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-[family-name:var(--font-outfit)]">
                Preview All 4 Complete Website Editions
              </h2>
              <p className="text-xs sm:text-sm text-[#B8C4CC] max-w-2xl mt-1">
                Select any edition to test it live inside the interactive browser frame below, or click &quot;Open Full Screen&quot; to test each version directly.
              </p>
            </div>
          </div>

          {/* 4 Edition Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {websiteEditions.map((ed) => {
              const isSelected = activeEdition === ed.path;

              return (
                <div
                  key={ed.id}
                  onClick={() => setActiveEdition(ed.path)}
                  className={`rounded-2xl border p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 relative overflow-hidden group ${
                    isSelected
                      ? "bg-[#0B1424] border-white/40 shadow-[0_0_30px_rgba(20,184,166,0.18)] ring-2 ring-[#14B8A6]/60"
                      : "bg-[#070D18]/90 border-white/10 hover:border-white/25 hover:bg-[#0A1220]"
                  }`}
                >
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border"
                        style={{
                          color: ed.accent,
                          borderColor: `${ed.accent}40`,
                          backgroundColor: `${ed.accent}12`,
                        }}
                      >
                        {ed.tag}
                      </span>

                      <Link
                        href={ed.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-md bg-white/5 hover:bg-white/15 text-[#B8C4CC] hover:text-white border border-white/10 transition-colors"
                        title="Open in new tab"
                      >
                        <ExternalLink size={13} />
                      </Link>
                    </div>

                    <h3 className="text-base font-bold text-white font-[family-name:var(--font-outfit)]">
                      {ed.title}
                    </h3>

                    <p className="text-xs text-[#CBD5E1] font-light leading-relaxed">
                      {ed.desc}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {ed.features.map((f) => (
                        <span
                          key={f}
                          className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/[0.04] text-[#B8C4CC] border border-white/[0.06]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                    <span className={isSelected ? "text-emerald-400 font-bold" : "text-[#B8C4CC]"}>
                      {isSelected ? "● ACTIVE PREVIEW" : "Click to Preview"}
                    </span>
                    <Link
                      href={ed.path}
                      className="inline-flex items-center gap-1 text-[#14B8A6] hover:underline"
                    >
                      <span>Open Page</span>
                      <ArrowLeft size={11} className="rotate-180" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Website Frame */}
          <div className="rounded-3xl border border-white/15 bg-[#03060D] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-5 py-3 bg-[#080E1A] border-b border-white/10 text-xs font-mono text-[#B8C4CC]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-3 text-white font-semibold flex items-center gap-1.5">
                  <Monitor size={13} className="text-[#14B8A6]" />
                  <span>Interactive Live Preview:</span>
                  <span className="text-emerald-400">{activeEdition}</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={activeEdition}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#14B8A6] hover:bg-[#0D9488] text-black font-bold text-xs transition-colors"
                >
                  <span>Open Full Screen</span>
                  <ExternalLink size={12} />
                </Link>
              </div>
            </div>

            <iframe
              key={activeEdition}
              src={activeEdition}
              title={`Live Preview of ${activeEdition}`}
              className="w-full h-[780px] bg-[#050912] border-0"
            />
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 1: CHARACTER LIVE STAGE */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/20">
                CHARACTER PREVIEW // {selectedCharacter.toUpperCase()}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {characterOptions.find((c) => c.id === selectedCharacter)?.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#B8C4CC] max-w-2xl mt-0.5">
                {characterOptions.find((c) => c.id === selectedCharacter)?.desc}
              </p>
            </div>
          </div>

          {/* Render Active Character */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#080E1A] via-[#050912] to-[#080E1A] p-6 sm:p-10 relative overflow-hidden shadow-2xl min-h-[580px] flex items-center justify-center">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

            <div className="relative z-10 w-full">
              {selectedCharacter === "v3" && <V2CharacterRig />}
              {selectedCharacter === "v2" && <CharacterV2RealDepth />}
              {selectedCharacter === "v5" && <CharacterV5LaptopStreams />}
              {selectedCharacter === "v4" && <CharacterV4StudioPure />}
              {selectedCharacter === "v6" && <CharacterV6Glitter />}
              {selectedCharacter === "v1" && <CharacterV1Abstract3D />}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: 4 PROJECTS LIVE STAGE */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/20">
                PROJECTS PREVIEW // {selectedProject.toUpperCase()}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {projectOptions.find((p) => p.id === selectedProject)?.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#B8C4CC] max-w-2xl mt-0.5">
                {projectOptions.find((p) => p.id === selectedProject)?.desc}
              </p>
            </div>
          </div>

          {/* Render Active Projects Component */}
          <div className="rounded-3xl border border-white/10 bg-[#050912] relative overflow-visible shadow-2xl">
            {selectedProject === "pv1" && <ProjectsSection />}
            {selectedProject === "pv2" && <V2SelectedWork />}
            {selectedProject === "pv3" && <SpatialProjects />}
            {selectedProject === "pv4" && <SelectedWork />}
            {selectedProject === "pv5" && <EditorialProjects />}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: CONFIRMATION HELPER */}
        {/* ========================================================= */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 sm:p-8 text-center space-y-4">
          <h3 className="text-lg font-bold text-white">
            Which combination do you want on the main website?
          </h3>
          <p className="text-xs sm:text-sm text-[#B8C4CC] max-w-xl mx-auto">
            Right now you are viewing{" "}
            <span className="text-emerald-400 font-mono font-bold">
              Character {selectedCharacter.toUpperCase()} + Projects {selectedProject.toUpperCase()}
            </span>
            . Tell me which one you like, and I will set that exact configuration as the permanent default on the homepage!
          </p>
        </div>
      </main>
    </div>
  );
}

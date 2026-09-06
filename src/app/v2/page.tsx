"use client";

import React from "react";
import { V2Header } from "@/components/v2/navigation/V2Header";
import { V2Hero } from "@/components/v2/hero/V2Hero";
import { V2SelectedWork } from "@/components/v2/work/V2SelectedWork";
import { V2Capabilities } from "@/components/v2/capabilities/V2Capabilities";
import { V2Experience } from "@/components/v2/experience/V2Experience";
import { V2AiPhilosophy } from "@/components/v2/philosophy/V2AiPhilosophy";
import { V2Contact } from "@/components/v2/contact/V2Contact";
import { V2Footer } from "@/components/v2/footer/V2Footer";

export default function V2PortfolioPage() {
  return (
    <main className="relative bg-[#050914] min-h-screen text-[#F3F1E8] antialiased overflow-x-clip selection:bg-cyan-500/30 selection:text-cyan-200" id="top">
      {/* 01. Minimal Floating Navigation Header */}
      <V2Header />

      {/* 02. Asymmetric Cinematic Hero with 3D WebGL Character */}
      <V2Hero />

      {/* 03. Curated Selected Work & Flagship Case Studies */}
      <V2SelectedWork />

      {/* 04. Structured Domains of Technical Competence */}
      <V2Capabilities />

      {/* 05. Verified Enterprise Experience & Interactive ETL Pipeline (TCS / Grainger) */}
      <V2Experience />

      {/* 06. AI & Vibe Coding Philosophy */}
      <V2AiPhilosophy />

      {/* 07. Interactive Communications & Contact Portal */}
      <V2Contact />

      {/* 08. Editorial Minimalist Footer */}
      <V2Footer />
    </main>
  );
}

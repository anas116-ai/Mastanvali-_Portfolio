"use client";

import React from "react";
import { RedesignNav } from "@/components/redesign/RedesignNav";
import { RedesignHero } from "@/components/redesign/RedesignHero";
import { RedesignSignal } from "@/components/redesign/RedesignSignal";
import { RedesignPhilosophy } from "@/components/redesign/RedesignPhilosophy";
import { RedesignExperience } from "@/components/redesign/RedesignExperience";
import { RedesignStack } from "@/components/redesign/RedesignStack";
import { RedesignCapabilities } from "@/components/redesign/RedesignCapabilities";
import { RedesignProjects } from "@/components/redesign/RedesignProjects";
import { RedesignContact } from "@/components/redesign/RedesignContact";
import { RedesignFooter } from "@/components/redesign/RedesignFooter";

export default function RedesignPreviewPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F3F1E8] antialiased selection:bg-[#14B8A6]/30 selection:text-white overflow-x-clip">
      {/* Subtle Studio Ambient Depth Filter */}
      <div
        className="fixed inset-0 pointer-events-none z-[40]"
        style={{
          background: "radial-gradient(130% 100% at 50% 20%, transparent 65%, rgba(0, 0, 0, 0.75) 100%)",
        }}
        aria-hidden="true"
      />

      {/* 01. Minimal Quiet Navigation */}
      <RedesignNav />

      {/* 02. Cinematic Hero & Integrated 2.5D Character */}
      <RedesignHero />

      {/* 03. Restrained Technology & Engineering Signal Strip */}
      <RedesignSignal />

      {/* 04. Editorial Narrative: How I Think About Building */}
      <RedesignPhilosophy />

      {/* 05. Enterprise Credibility & Production Evidence (VHS / TCS / Grainger) */}
      <RedesignExperience />

      {/* 06. Systems I Work Across (Capabilities First) */}
      <RedesignStack />

      {/* 07. What I Build (Disciplines Grounded in Shipped Work) */}
      <RedesignCapabilities />

      {/* 08. Expansive Featured Projects & System Archive */}
      <RedesignProjects />

      {/* 09. High-Status Closing Contact */}
      <RedesignContact />

      {/* 10. Minimal Dignified Footer */}
      <RedesignFooter />
    </div>
  );
}

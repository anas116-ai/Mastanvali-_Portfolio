import { KoiStudies } from "@/shaders/koi-studies/KoiStudies";
import "@/shaders/threeui.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Koi Studies — ThreeUI Interactive 3D Stack | Shaik Mastan Vali",
  description:
    "A tactile stack of three Japanese koi studies with CSS 3D depth, pointer tilt, drag and keyboard navigation, pixel-mask reveals, and animated halftone imagery.",
};

export default function KoiPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#080e18]">
      {/* Return to Portfolio Nav Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0e12]/80 hover:bg-[#0a0e12] border border-white/20 text-[#dfe7e0] hover:text-white text-xs font-mono tracking-wider backdrop-blur-md transition-all shadow-lg group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>PORTFOLIO</span>
        </Link>
      </div>

      <div className="shader-frame w-full h-full">
        <KoiStudies />
      </div>
    </div>
  );
}

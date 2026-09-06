import { KageLandingPage } from "@/shaders/landing-pages/KageLandingPage";
import "@/shaders/threeui.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Kage — ThreeUI Interactive 3D World | Shaik Mastan Vali",
  description: "A five-chapter night walk through a Kyoto mountain temple rendered live in WebGL.",
};

export default function KagePage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#05070a]">
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
        <KageLandingPage
          headingFont="onest"
          bodyFont="onest"
          headingWeight="400"
          bodyWeight="300"
          primaryColor="#e0231c"
          headingSize={46}
          bodySize={17}
          headingLetterSpacing={-0.012}
        />
      </div>
    </div>
  );
}

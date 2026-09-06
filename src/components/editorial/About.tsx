"use client";

import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";
import { FadeIn } from "./FadeIn";

const BIO =
  "I'm a software engineer from Andhra Pradesh, India. My career began in enterprise data — building SAP BODS ETL pipelines and managing SAP production support for TCS and Grainger. Driven by curiosity, I expanded into AI-assisted product building, shipping real applications like AnPharmacy, AnsiQ, and Anasify with rigorous engineering: system architecture, database design, and methodical debugging.";

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-x-clip px-5 sm:px-8 md:px-10 py-20">
      {/* Decorative corner marks (pure gradients — no external assets) */}
      <div className="pointer-events-none absolute top-[6%] left-[2%] w-[120px] sm:w-[160px] md:w-[200px] h-[120px] sm:h-[160px] md:h-[200px] rounded-full bg-gradient-to-br from-[#3a3f47] to-transparent opacity-60 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[6%] right-[2%] w-[150px] sm:w-[190px] md:hidden h-[150px] rounded-full bg-gradient-to-tl from-[#2b2f36] to-transparent opacity-50 blur-2xl" />

      <div className="relative flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 max-w-5xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-extrabold uppercase leading-none tracking-tight text-[clamp(3rem,12vw,150px)]">
            About&nbsp;Me
          </h2>
        </FadeIn>

        <AnimatedText
          text={BIO}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[620px] text-[clamp(1rem,2vw,1.35rem)]"
        />

        <FadeIn delay={0.2} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}

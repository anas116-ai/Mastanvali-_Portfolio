"use client";

import { FadeIn } from "./FadeIn";
import { ContactButton } from "./ContactButton";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center overflow-x-clip px-5 sm:px-8 md:px-10 py-24 text-center">
      <FadeIn y={40}>
        <h2 className="hero-heading font-extrabold uppercase leading-none tracking-tight text-[clamp(3rem,12vw,150px)]">
          Let&rsquo;s&nbsp;Build
        </h2>
      </FadeIn>

      <FadeIn y={20} delay={0.15}>
        <p className="mt-8 text-[#D7E2EA] font-light leading-relaxed max-w-xl text-[clamp(0.9rem,1.6vw,1.25rem)]">
          Open to enterprise data engineering and AI product roles.
          Based in India — open to relocation and remote work.
        </p>
      </FadeIn>

      <FadeIn y={20} delay={0.3}>
        <div className="mt-12">
          <ContactButton href="mailto:sk.mastanvali0116@gmail.com" />
        </div>
      </FadeIn>

      <FadeIn y={20} delay={0.45}>
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-[#D7E2EA]/60 text-sm">
          <a
            href="https://github.com/anas116-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E8E2D4] transition-colors"
          >
            GitHub — anas116-ai
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E8E2D4] transition-colors"
          >
            LinkedIn
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href="mailto:sk.mastanvali0116@gmail.com"
            className="hover:text-[#E8E2D4] transition-colors"
          >
            sk.mastanvali0116@gmail.com
          </a>
        </div>
      </FadeIn>

      <FadeIn y={20} delay={0.6}>
        <p className="absolute bottom-6 left-0 right-0 text-[#D7E2EA]/40 text-xs tracking-widest uppercase">
          Shaik Mastan Vali — {new Date().getFullYear()}
        </p>
      </FadeIn>
    </section>
  );
}

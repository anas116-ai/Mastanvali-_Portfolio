"use client";

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Logo } from "./Logo";
import { ContactButton } from "./Buttons";

export function Final() {
  return (
    <section id="contact" className="bg-ink relative overflow-hidden border-t hairline">
      {/* CTA panel */}
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <FadeIn y={30}>
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-10 text-center md:p-20">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle,#c2d900,transparent 65%)" }} />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle,#dfe921,transparent 65%)" }} />
            <div className="relative">
              <p className="eyebrow mb-5">Available for work</p>
              <h2 className="font-heading text-soft-gradient mx-auto max-w-2xl text-[clamp(2.2rem,5.5vw,4rem)] font-normal leading-[1.05] tracking-tight text-balance">
                Have a problem worth <span className="text-accent-gradient font-brand">solving?</span>
              </h2>
              <p className="text-mist mx-auto mt-6 max-w-md text-[15px] font-light leading-relaxed">
                If you have messy, high-stakes data and need products that hold up,
                let&apos;s build something that lasts.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <ContactButton label="Start a Project" href="mailto:shaikmastanvali@gmail.com" />
                <a
                  href="mailto:shaikmastanvali@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 font-ui text-[13px] font-medium text-ivory transition-colors duration-300 hover:border-[#dfe921]/60 hover:text-[#dfe921]"
                >
                  <Mail className="h-4 w-4" /> shaikmastanvali@gmail.com
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* footer */}
      <footer className="border-t hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
          <Logo />

          <nav className="font-ui flex flex-wrap items-center justify-center gap-7">
            {[
              { label: "About", href: "#about" },
              { label: "What I Do", href: "#services" },
              { label: "Work", href: "#projects" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-mist text-[13px] font-medium transition-colors duration-200 hover:text-ivory">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <FooterIcon href="https://github.com/anas116-ai" label="GitHub"><Github className="h-4 w-4" /></FooterIcon>
            <FooterIcon href="https://www.linkedin.com/in/shaikmastanvali" label="LinkedIn"><Linkedin className="h-4 w-4" /></FooterIcon>
            <FooterIcon href="mailto:shaikmastanvali@gmail.com" label="Email"><Mail className="h-4 w-4" /></FooterIcon>
          </div>
        </div>

        <div className="border-t hairline">
          <p className="text-mist mx-auto max-w-6xl px-6 py-5 text-center font-ui text-[11px] tracking-wider md:flex md:items-center md:justify-between md:px-10 md:text-left">
            <span>&copy; 2026 Shaik Mastan Vali</span>
            <span className="mt-1 block md:mt-0">Data &rarr; AI &middot; Built with Next.js &amp; a lot of strong coffee</span>
          </p>
        </div>
      </footer>
    </section>
  );
}

function FooterIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-mist flex h-9 w-9 items-center justify-center rounded-full border border-white/12 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dfe921]/60 hover:text-[#dfe921]"
    >
      {children}
    </a>
  );
}
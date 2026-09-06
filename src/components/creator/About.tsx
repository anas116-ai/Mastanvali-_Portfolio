"use client";

import { FadeIn } from "./FadeIn";
import { Briefcase, Package, Target, Network } from "lucide-react";

const stats = [
  { value: "1+", label: "Year in enterprise data", icon: Briefcase },
  { value: "4", label: "Flagship products built", icon: Package },
  { value: "100%", label: "ATS scoring accuracy", icon: Target },
  { value: "4", label: "LLM providers routed", icon: Network },
];

const skillGroups = [
  { title: "Enterprise Data", skills: ["SAP BODS", "SAP ECC", "SAP BW", "SAP HANA", "SQL Server", "ETL", "Data Validation", "Reconciliation"] },
  { title: "AI Engineering", skills: ["LLMs", "AI Agents", "Prompt Engineering", "Orchestration", "Multi-Model"] },
  { title: "Product Building", skills: ["Python", "TypeScript", "React", "Next.js", "Electron", "FastAPI", "SQLite", "PostgreSQL", "Tailwind"] },
];

export function About() {
  return (
    <section id="about" className="bg-ink relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[6fr_5fr] md:gap-20 md:px-10">
        {/* story */}
        <div>
          <FadeIn y={30}>
            <p className="eyebrow mb-6">About Me</p>
            <h2 className="font-heading text-soft-gradient max-w-xl text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[1.1] tracking-tight text-balance">
              From enterprise data to <span className="text-accent-gradient font-brand">products that think</span>
            </h2>
          </FadeIn>
          <FadeIn y={30} delay={0.1}>
            <div className="text-mist font-body mt-8 max-w-xl space-y-5 text-[15px] font-light leading-relaxed">
              <p>
                I spent over a year as a Software Engineer at VHS Consulting on a TCS account —
                writing SAP BODS ETL jobs, validating data across SAP systems, and keeping
                production pipelines healthy. That world taught me rigor: sources, targets,
                and truth.
              </p>
              <p>
                Then I taught myself to build. I design and ship products with AI at their
                core — an offline-first pharmacy desktop app, a multi-agent orchestration
                framework, an ATS resume platform, and a developer workflow tool — all with
                real users, real data, and real tests.
              </p>
              <p>
                I believe dependable engineering and thoughtful product design belong
                together. That&apos;s what I bring to every build.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* stats + skills */}
        <div className="flex flex-col gap-8">
          <FadeIn x={40} delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass group rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <p className="font-brand text-accent-gradient text-[clamp(1.8rem,4vw,2.6rem)] font-normal leading-none">
                      {s.value}
                    </p>
                    <s.icon className="h-4 w-4 text-[#dfe921]/60 transition-colors duration-300 group-hover:text-[#dfe921]" strokeWidth={1.5} />
                  </div>
                  <p className="text-mist mt-2 font-ui text-xs tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn x={40} delay={0.25}>
            <div className="glass rounded-2xl p-6">
              <p className="eyebrow mb-5">Capabilities</p>
              <div className="space-y-5">
                {skillGroups.map((g) => (
                  <div key={g.title}>
                    <p className="font-label mb-2.5 text-[11px] tracking-[0.25em] text-[#cfe3e0]">
                      {g.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {g.skills.map((s) => (
                        <span key={s} className="text-mist rounded-full border border-white/10 px-3 py-1 font-ui text-[11px] transition-colors duration-200 hover:border-[#dfe921]/50 hover:text-[#dfe921]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
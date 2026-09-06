"use client";

import { FadeIn } from "./FadeIn";
import { Database, BrainCircuit, MonitorSmartphone, Zap, LifeBuoy } from "lucide-react";

const services = [
  {
    no: "01",
    icon: Database,
    title: "Data Engineering",
    desc: "Reliable, well-tested ETL pipelines that move and validate enterprise data — SAP BODS, SQL Server, and source-to-target reconciliation.",
    tags: ["SAP BODS", "ETL", "SQL", "Validation"],
  },
  {
    no: "02",
    icon: BrainCircuit,
    title: "AI Engineering",
    desc: "Agentic AI and LLM orchestration — multi-agent frameworks, persistent memory, and smart routing across local and cloud models.",
    tags: ["Agents", "LLMs", "Prompt Design", "Memory"],
  },
  {
    no: "03",
    icon: MonitorSmartphone,
    title: "Product Building",
    desc: "Full products from idea to ship — offline-first desktop apps, intelligent web platforms, and AI workflows engineered to be dependable.",
    tags: ["React", "Next.js", "Electron", "FastAPI"],
  },
  {
    no: "04",
    icon: Zap,
    title: "AI-Assisted Automation",
    desc: "OCR-driven workflows, batch processing, and intelligent pipelines that remove repetitive toil and bring structure to chaos.",
    tags: ["OCR", "Automation", "Pipelines"],
  },
  {
    no: "05",
    icon: LifeBuoy,
    title: "Production Support",
    desc: "Monitoring, incident investigation, and log analysis for systems that never sleep — and the discipline of keeping them running well.",
    tags: ["Monitoring", "Incidents", "SLA Mindset"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-ink relative border-y hairline py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn y={30}>
          <div className="mb-16 md:mb-20">
            <p className="eyebrow mb-6">What I Do</p>
            <h2 className="font-heading text-soft-gradient max-w-2xl text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[1.08] tracking-tight text-balance">
              Engineering &middot; design &middot; <span className="text-accent-gradient font-brand">AI</span> — end to end
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <FadeIn key={s.no} y={24} delay={i * 0.06}>
              <div className="group relative hairline flex flex-col gap-4 border-t py-8 transition-colors duration-300 md:grid md:grid-cols-[110px_60px_1fr] md:items-start md:gap-8 md:py-10 last:border-b">
                <span className="text-mist font-brand text-[clamp(1.6rem,4vw,2.2rem)] leading-none transition-colors duration-300 group-hover:text-[#dfe921] md:pt-1">
                  {s.no}
                </span>
                <div className="text-mist transition-colors duration-300 group-hover:text-[#dfe921] md:pt-1">
                  <s.icon className="h-7 w-7" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="font-heading text-ivory text-lg font-medium tracking-wide">{s.title}</h3>
                  <p className="text-mist font-body mt-2.5 max-w-2xl text-[14px] font-light leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-mist rounded-full border border-white/10 px-3 py-1 font-ui text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-mist absolute right-0 bottom-8 hidden font-ui text-[12px] tracking-wide opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
                  View work &rarr;
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
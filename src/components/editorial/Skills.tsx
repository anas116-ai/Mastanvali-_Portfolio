"use client";

import { FadeIn } from "./FadeIn";
import { skillClusters } from "@/data/skills";
import { experience } from "@/data/experience";

const CLUSTER_DESC: Record<string, string> = {
  "Enterprise Data":
    "End-to-end ETL engineering on SAP BODS 4.3 — extraction, transformation, validation, and reconciliation across SAP ECC, BW, HANA, and SQL Server.",
  "Production Support":
    "Keeping enterprise data pipelines running in production — monitoring, incident investigation, log analysis, and clear stakeholder communication.",
  "AI & Building":
    "Shipping real applications with AI as an engineering partner — full-stack systems with rigorous architecture, database design, and debugging.",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-x-clip -mt-10 sm:-mt-12 z-10"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn y={40}>
          <h2 className="text-[#0C0C0C] font-extrabold uppercase text-center mb-16 sm:mb-20 md:mb-28 text-[clamp(3rem,12vw,150px)] leading-none tracking-tight">
            Expertise
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {skillClusters.map((cluster, index) => (
            <FadeIn key={cluster.title} delay={index * 0.1} y={30}>
              <div className="py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                <span className="text-[#0C0C0C] font-extrabold leading-none text-[clamp(2rem,7vw,90px)] md:w-40 shrink-0">
                  {`0${index + 1}`}
                </span>
                <div className="space-y-3 md:pt-3">
                  <h3 className="text-[#0C0C0C] font-semibold uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                    {cluster.title}
                  </h3>
                  <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {CLUSTER_DESC[cluster.title]}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cluster.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] sm:text-xs font-medium uppercase tracking-wide text-[#0C0C0C]/70 border border-[rgba(12,12,12,0.2)] rounded-full px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Experience */}
        <FadeIn y={30} className="mt-6">
          <div className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
            <span className="text-[#0C0C0C] font-extrabold leading-none text-[clamp(2rem,7vw,90px)] md:w-40 shrink-0">
              04
            </span>
            <div className="space-y-3 md:pt-3">
              <h3 className="text-[#0C0C0C] font-semibold uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                {experience.title}
              </h3>
              <p className="text-[#0C0C0C] font-light opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                {experience.company} &middot; Client: {experience.client} &middot;{" "}
                {experience.project} &middot; {experience.period}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 pt-2 max-w-3xl">
                {experience.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="text-[13px] text-[#0C0C0C]/70 font-normal flex items-start gap-2"
                  >
                    <span className="text-[#0C0C0C]/40 mt-1.5">—</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

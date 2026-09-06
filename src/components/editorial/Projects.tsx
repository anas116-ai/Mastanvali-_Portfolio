"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { primaryProjects } from "@/data/projects";
import { LiveProjectButton } from "./LiveProjectButton";
import { FadeIn } from "./FadeIn";

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof primaryProjects)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const initialFeatures = (project.caseStudy?.build ?? []).slice(0, 6);

  return (
    <div ref={ref} className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="w-full max-w-5xl rounded-[32px] sm:rounded-[40px] md:rounded-[48px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-8 relative"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-baseline gap-4">
            <span className="hero-heading font-extrabold text-[clamp(3rem,10vw,120px)] leading-none">
              {`0${index + 1}`}
            </span>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-widest text-[#D7E2EA]/60">
                {project.status}
              </p>
              <h3 className="text-[#E7EAEE] font-semibold uppercase leading-none text-[clamp(1.4rem,3.4vw,3rem)]">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.repository} label="View Code" />
        </div>

        <p className="mt-5 text-[#D7E2EA]/70 font-light leading-relaxed max-w-2xl text-[clamp(0.9rem,1.6vw,1.2rem)]">
          {project.tagline} — {project.description}
        </p>

        {/* Tech + features */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 8).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium uppercase tracking-wide text-[#D7E2EA]/60 border border-[#D7E2EA]/20 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {initialFeatures.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {initialFeatures.map((f) => (
              <div key={f} className="flex items-start gap-2 text-[13px] text-[#D7E2EA]/70">
                <span className="text-[#E8E2D4] mt-1">•</span>
                {f}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function Projects() {
  const stack = primaryProjects.slice(0, 3);

  return (
    <section id="projects" className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 overflow-x-clip">
      <FadeIn y={40}>
        <h2 className="hero-heading font-extrabold uppercase text-center mb-20 md:mb-28 text-[clamp(3rem,12vw,150px)] leading-none tracking-tight">
          Selected Work
        </h2>
      </FadeIn>

      <div className="flex flex-col">
        {stack.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            total={stack.length}
          />
        ))}
      </div>
    </section>
  );
}

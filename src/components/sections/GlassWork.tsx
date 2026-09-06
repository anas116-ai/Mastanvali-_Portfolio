"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { primaryProjects, secondaryProjects, Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

function ProjectVisual({ project }: { project: Project }) {
  // Deterministic diagrammatic visual per project (no external images).
  const seed = project.slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = seed % 360;

  return (
    <svg
      viewBox="0 0 200 130"
      preserveAspectRatio="xMidYMid slice"
      className="h-40 w-full sm:h-56"
      aria-hidden
    >
      <defs>
        <linearGradient id={`bg-${project.slug}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 70% 14%)`} />
          <stop offset="100%" stopColor={`hsl(${(hue + 60) % 360} 70% 8%)`} />
        </linearGradient>
      </defs>
      <rect width="200" height="130" fill={`url(#bg-${project.slug})`} />
      <circle cx="40" cy="34" r="3" fill="rgba(255,255,255,0.5)" />
      <circle cx="160" cy="96" r="4" fill="rgba(255,255,255,0.3)" />
      <g stroke="rgba(255,255,255,0.25)" fill="none" strokeWidth="1.5">
        <line x1="30" y1="90" x2="90" y2="50" />
        <line x1="90" y1="50" x2="150" y2="60" />
        <line x1="90" y1="50" x2="110" y2="100" />
      </g>
      <g fill="rgba(255,255,255,0.7)">
        <rect x="26" y="85" width="8" height="8" rx="2" />
        <rect x="145" y="55" width="10" height="10" rx="2" />
        <rect x="106" y="95" width="8" height="8" rx="2" />
      </g>
      <line x1="20" y1="20" x2="180" y2="20" stroke="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export function GlassWork() {
  return (
    <section id="work" className="section-spacing relative">
      <div className="container-portfolio">
        <div className="mb-14 max-w-2xl">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Featured Work
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Systems I&apos;ve shipped
          </h2>
          <p className="text-base leading-relaxed text-gray-400">
            Real, functional applications and agentic frameworks — each a verified public repository.
          </p>
        </div>

        {/* Primary projects grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 md:grid-cols-2"
        >
          {primaryProjects.map((project) => (
            <motion.a
              key={project.slug}
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="glass-card group block overflow-hidden rounded-2xl"
            >
              {/* Image with scale-on-hover */}
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-500 group-hover:scale-105">
                  <ProjectVisual project={project} />
                </div>
                {/* Black gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
                <ExternalLink
                  size={18}
                  className="absolute right-4 top-4 text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              {/* Slide-up title bar */}
              <div className="relative -mt-16 translate-y-6 p-5 transition-transform duration-300 group-hover:translate-y-0">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
                      project.status === "Functional"
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                        : "border-blue-500/20 bg-blue-500/10 text-blue-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-300">{project.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Secondary projects row */}
        <div className="mt-10">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Github size={15} className="text-blue-400" />
            More projects &amp; prototypes
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryProjects.map((project) => (
              <a
                key={project.slug}
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h4>
                  <ArrowUpRight size={15} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{project.tagline}</p>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-gray-400">
                  <span>{project.technologies[0]}</span>
                  <span className="text-gray-400 group-hover:text-white">View &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

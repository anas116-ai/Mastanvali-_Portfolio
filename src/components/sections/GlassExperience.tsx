"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { experience } from "@/data/experience";
import { Building2, Calendar, CheckCircle2, Briefcase } from "lucide-react";

export function GlassExperience() {
  return (
    <section id="experience" className="section-spacing relative">
      <div className="container-portfolio">
        <div className="mb-14 max-w-2xl">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Experience
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Enterprise data engineering
          </h2>
          <p className="text-base leading-relaxed text-gray-400">
            Mission-critical ETL integration and production support for global enterprise clients.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 sm:p-8">
            {/* Header */}
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white">
                  <Briefcase size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-bold text-white">{experience.title}</h3>
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-400">
                      {experience.company}
                    </span>
                  </div>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-400">
                    <Building2 size={14} className="text-gray-500" />
                    Client: <strong className="text-white">{experience.client}</strong> · Project: {experience.project}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                    <Calendar size={13} />
                    {experience.period}
                  </p>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mt-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Responsibilities &amp; deliverables
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {experience.responsibilities.map((resp) => (
                  <div key={resp} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-400" />
                    <span className="text-sm leading-relaxed text-gray-300">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Environment chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
              <span className="mr-1 text-xs text-gray-500">Environment:</span>
              {experience.environment.map((env) => (
                <span key={env} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                  {env}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

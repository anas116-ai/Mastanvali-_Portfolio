"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check } from "lucide-react";

export function GlassContact() {
  const [copied, setCopied] = useState(false);
  const email = "sk.mastanvali0116@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-spacing relative border-t border-white/10">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="container-portfolio relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-3xl space-y-8 text-center"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="animate-pulse h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to opportunities
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something great.
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-400">
              Whether it&apos;s SAP Data Engineering, AI &amp; Agentic Systems, or Software Development — I&apos;d love to connect.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition-colors"
            >
              <Mail size={16} />
              Send an email
              <ArrowUpRight size={14} />
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-gray-400" />
                  Copy email
                </>
              )}
            </button>
            <a
              href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-4 text-sm text-gray-500">
            {email}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

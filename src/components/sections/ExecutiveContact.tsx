"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { Mail, Linkedin, Github, FileText, ArrowUpRight, Copy, Check, Phone, Sparkles, MessageCircle } from "lucide-react";

export function ExecutiveContact() {
  const [copied, setCopied] = useState(false);
  const email = "sk.mastanvali0116@gmail.com";

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section id="contact" className="section-spacing relative border-t border-white/[0.06]">
      {/* Background Accent â dual glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-purple-600/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-portfolio relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center space-y-10"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Open to New Opportunities &bull; Immediate Joiner</span>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
              style={{
                background: "linear-gradient(180deg, #ffffff 0%, #A8B8C4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let&apos;s build something
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #14B8A6, #14B8A6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                great together.
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
              Whether you have an opening in <span className="text-white font-medium">SAP Data Engineering</span>, <span className="text-white font-medium">AI & Agentic Systems</span>, or <span className="text-white font-medium">Software Development</span>, I&apos;d love to connect.
            </p>
          </motion.div>

          {/* Action Buttons Hub â polished */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a
              href={`mailto:${email}`}
              className="group px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <Mail size={16} />
              <span>Send an Email</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopy}
              className="px-6 py-4 rounded-full bg-[#141418] hover:bg-[#1e1e24] border border-white/10 hover:border-white/20 text-white font-medium text-sm transition-all duration-300 flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-full bg-[#141418] hover:bg-[#1e1e24] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-full bg-[#141418] hover:bg-[#1e1e24] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-full bg-[#141418] hover:bg-[#1e1e24] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Contact Details Footer Bar */}
          <motion.div
            variants={fadeUp}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-xs text-slate-400"
          >
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <Phone size={14} className="text-blue-400" />
              <span className="font-mono">+91 8374882630</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <Mail size={14} className="text-blue-400" />
              <span className="font-mono">{email}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Copy, Check, ArrowUpRight, MessageSquare, Terminal } from "lucide-react";

export function V2Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#050914] text-[#F3F1E8] font-[family-name:var(--font-outfit)] border-t border-[rgba(100,210,225,0.08)]">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#14B8A6]/10 rounded-full blur-[180px]" />

      <div className="w-full max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/25">
            <span>[ 05 // INITIATE CONTACT ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F3F1E8]">
            LET&apos;S BUILD <span className="text-[#14B8A6]">SOMETHING</span> EXTRAORDINARY
          </h2>
          <p className="text-[#B8C4CC] text-sm sm:text-base leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
            Open to full-time Software Engineer, SAP BODS Developer, and AI Engineer roles. Immediate joiner, open to relocation across India and globally.
          </p>
        </div>

        {/* Interactive Contact Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Portal (7 Cols): Direct Communications Terminal */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl border border-[rgba(100,210,225,0.16)] bg-[#08131D]/85 backdrop-blur-xl space-y-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[rgba(100,210,225,0.1)] pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#14B8A6]">
                  <Terminal size={14} />
                  <span>DIRECT COMMUNICATION ENDPOINTS</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE &bull; 24H RESPONSE TIME</span>
                </div>
              </div>

              {/* Email Contact Card */}
              <div className="p-5 rounded-xl border border-[rgba(100,210,225,0.12)] bg-[#050914]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#B8C4CC]">Primary Email</div>
                    <a
                      href="mailto:sk.mastanvali0116@gmail.com"
                      className="font-bold text-sm sm:text-base text-[#F3F1E8] hover:text-[#14B8A6] transition-colors"
                    >
                      sk.mastanvali0116@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard("sk.mastanvali0116@gmail.com", "email")}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[rgba(100,210,225,0.08)] text-[#B8C4CC] hover:text-[#14B8A6] border border-[rgba(100,210,225,0.14)] transition-all flex items-center gap-1.5 self-start sm:self-auto"
                >
                  {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone Contact Card */}
              <div className="p-5 rounded-xl border border-[rgba(100,210,225,0.12)] bg-[#050914]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#F47A18]/10 text-[#F47A18]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#B8C4CC]">Phone / WhatsApp</div>
                    <a
                      href="tel:8374882630"
                      className="font-bold text-sm sm:text-base text-[#F3F1E8] hover:text-[#F47A18] transition-colors"
                    >
                      +91 8374882630
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard("8374882630", "phone")}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[rgba(100,210,225,0.08)] text-[#B8C4CC] hover:text-[#F47A18] border border-[rgba(100,210,225,0.14)] transition-all flex items-center gap-1.5 self-start sm:self-auto"
                >
                  {copiedPhone ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-4 border-t border-[rgba(100,210,225,0.1)] flex flex-wrap items-center gap-4">
              <a
                href="mailto:sk.mastanvali0116@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14B8A6] text-[#050914] font-extrabold text-xs font-mono uppercase tracking-wider hover:bg-[#38BDF8] shadow-[0_0_20px_rgba(20, 184, 166, 0.3)] transition-all hover:scale-105"
              >
                <Mail size={14} />
                <span>Send Direct Email</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://wa.me/918374882630"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#08131D] text-[#F3F1E8] font-bold text-xs font-mono uppercase tracking-wider hover:border-[#14B8A6] border border-[rgba(100,210,225,0.2)] transition-all"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Message</span>
              </a>
            </div>
          </div>

          {/* Right Portal (5 Cols): Professional Network Hub */}
          <div className="lg:col-span-5 p-6 sm:p-10 rounded-2xl border border-[rgba(100,210,225,0.16)] bg-[#08131D]/85 backdrop-blur-xl space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#F47A18] uppercase tracking-wider font-bold">
                VERIFIED PROFESSIONAL PROFILES
              </div>
              <h3 className="text-xl font-bold uppercase text-[#F3F1E8]">
                CONNECT &amp; EXPLORE CODE
              </h3>
              <p className="text-xs text-[#B8C4CC] leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
                Review all open-source repositories, architectural commits, and professional endorsements across official networks.
              </p>
            </div>

            <div className="space-y-3">
              {/* GitHub Card */}
              <a
                href="https://github.com/anas116-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-[rgba(100,210,225,0.14)] bg-[#050914]/80 flex items-center justify-between group hover:border-[#14B8A6] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Github size={20} className="text-[#14B8A6]" />
                  <div>
                    <div className="font-bold text-sm text-[#F3F1E8] group-hover:text-[#14B8A6] transition-colors">
                      github.com/anas116-ai
                    </div>
                    <div className="text-[10px] font-mono text-[#B8C4CC]">
                      7 Active Repositories &bull; Open Source
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#B8C4CC] group-hover:text-[#14B8A6] transition-colors" />
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-[rgba(100,210,225,0.14)] bg-[#050914]/80 flex items-center justify-between group hover:border-[#F47A18] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={20} className="text-[#F47A18]" />
                  <div>
                    <div className="font-bold text-sm text-[#F3F1E8] group-hover:text-[#F47A18] transition-colors">
                      linkedin.com/in/mastan-vali-shaik
                    </div>
                    <div className="text-[10px] font-mono text-[#B8C4CC]">
                      Verified Professional Network
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#B8C4CC] group-hover:text-[#F47A18] transition-colors" />
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[11px] font-mono text-[#14B8A6] flex items-center justify-between">
              <span>Relocation: Available Worldwide</span>
              <span>Notice: Immediate (0 Days)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

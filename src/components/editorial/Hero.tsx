"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { ContactButton } from "./ContactButton";
import { Magnet } from "./Magnet";

const SOCIALS = [
  { href: "https://github.com/anas116-ai", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/mastan-vali-shaik-86952725/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20"
    >
      <a href="#top" className="text-sm font-medium tracking-widest uppercase text-[#D7E2EA]">
        Mastan&nbsp;Vali
      </a>
      <div className="flex items-center gap-6 md:gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[11px] md:text-sm lg:text-[1rem] font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200"
          >
            {link.label}
          </a>
        ))}
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="text-[#D7E2EA]/70 hover:text-[#E8E2D4] transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative h-screen flex flex-col overflow-x-clip">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex-1 flex items-center justify-center px-2"
      >
        <h1 className="hero-heading font-extrabold uppercase tracking-tight leading-[0.9] text-center w-full whitespace-nowrap overflow-hidden text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw]">
          Shaik&nbsp;Mastan
          <span className="block">Vali</span>
        </h1>
      </motion.div>

      {/* Center monogram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
      >
        <Magnet padding={150} strength={3}>
          <div className="w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[190px] md:h-[190px] rounded-full bg-[#E8E2D4] flex items-center justify-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            <span className="text-[#0C0C0C] font-bold text-5xl sm:text-6xl md:text-7xl">
              MV
            </span>
          </div>
        </Magnet>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10"
      >
        <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
          Software engineer bridging enterprise data systems and AI product building
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton href="#contact" />
        </motion.div>
      </motion.div>
    </section>
  );
}

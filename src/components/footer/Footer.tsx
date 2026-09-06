import { Github, Linkedin, Mail, Cpu } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 bg-[#020204] py-12 relative overflow-hidden"
    >
      <div className="container-portfolio">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-accent)]">
              <Cpu size={16} />
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-white tracking-wider">
                SHAIK MASTAN VALI
              </p>
              <p className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                ENTERPRISE DATA &bull; AI AGENTIC SYSTEMS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/anas116-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-[var(--color-accent)] transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-[var(--color-accent)] transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:sk.mastanvali0116@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-[var(--color-accent)] transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="font-mono text-[11px] text-slate-500">
            &copy; {year} Shaik Mastan Vali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

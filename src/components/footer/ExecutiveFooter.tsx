import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function ExecutiveFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#000000] py-10">
      <div className="container-portfolio flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        {/* Brand */}
        <div className="flex items-center gap-2.5 text-slate-400">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-500 blur-sm opacity-60" />
          </div>
          <span className="font-semibold text-white">Shaik Mastan Vali</span>
          <span>&bull;</span>
          <span>SAP BODS Developer &amp; AI Builder</span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/anas116-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.04]"
          >
            <Github size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.04]"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="mailto:sk.mastanvali0116@gmail.com"
            aria-label="Email"
            className="text-slate-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.04]"
          >
            <Mail size={14} />
          </a>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-1.5 font-mono">
          <span>&copy; {year}</span>
          <span className="text-slate-400">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

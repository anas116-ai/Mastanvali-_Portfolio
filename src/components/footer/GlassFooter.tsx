import { Github, Linkedin, Mail } from "lucide-react";

export function GlassFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="container-portfolio flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-[10px] font-bold text-white">
            SMV
          </span>
          <div className="text-xs text-gray-500">
            <div className="font-semibold text-white">Shaik Mastan Vali</div>
            <div>SAP BODS Developer &amp; AI Builder</div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/anas116-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/mastan-vali-shaik-86952725/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:sk.mastanvali0116@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>

        <div className="text-xs text-gray-500">
          &copy; {year} Shaik Mastan Vali. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

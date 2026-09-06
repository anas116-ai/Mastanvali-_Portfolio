"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { href: "https://github.com/anas116-ai", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/mastan-vali-shaik-86952725/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:sk.mastanvali0116@gmail.com", label: "Email", Icon: Mail },
];

export function SocialRail() {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6 hidden lg:flex">
      <span className="w-px h-16 bg-[#D7E2EA]/20" />
      {LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          title={label}
          className="text-[#D7E2EA]/60 hover:text-[#E8E2D4] transition-colors"
        >
          <Icon size={18} />
        </a>
      ))}
      <span className="w-px h-16 bg-[#D7E2EA]/20" />
    </div>
  );
}

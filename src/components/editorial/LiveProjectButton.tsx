"use client";

interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function LiveProjectButton({
  href,
  label = "View Repository",
  className,
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors ${className ?? ""}`}
    >
      {label}
    </a>
  );
}

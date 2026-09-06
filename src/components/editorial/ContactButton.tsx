"use client";

interface ContactButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function ContactButton({
  href = "mailto:sk.mastanvali0116@gmail.com",
  label = "Contact Me",
  className,
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-[#E8E2D4] text-[#0C0C0C] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:opacity-85 transition-opacity ${className ?? ""}`}
    >
      {label}
    </a>
  );
}

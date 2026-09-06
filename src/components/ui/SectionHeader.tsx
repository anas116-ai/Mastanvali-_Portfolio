"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  number,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("flex flex-col gap-2", className)}
    >
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-[var(--color-accent)]">
          {number}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          {title}
        </h2>
        <div className="h-px bg-[var(--color-border)] flex-1 ml-4" />
      </div>
      {subtitle && (
        <p className="text-sm text-[var(--color-text-secondary)] ml-12 md:ml-14">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

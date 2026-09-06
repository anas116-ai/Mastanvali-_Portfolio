"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, duration = 0.5, y = 40, x = 0, className }: FadeInProps) {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ type: "tween", duration, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

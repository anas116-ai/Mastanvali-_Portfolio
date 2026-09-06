"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, wordIndex) => {
        const start = wordIndex / words.length;
        const end = start + 1 / (words.length * 1.4);
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        return (
          <motion.span
            key={wordIndex}
            className="inline-block mr-[0.25em]"
            style={{ opacity }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

// Kept import-free helper type for clarity if a consumer needs the motion value type.
export type { MotionValue };

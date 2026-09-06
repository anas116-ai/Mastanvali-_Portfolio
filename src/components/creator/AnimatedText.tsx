"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.4"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center gap-x-1.5 gap-y-1 leading-relaxed ${className}`}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = Math.min(start + 1.2 / words.length, 1);
        return (
          <Word
            key={index}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: import("framer-motion").MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block transition-colors duration-200"
    >
      {word}
    </motion.span>
  );
}

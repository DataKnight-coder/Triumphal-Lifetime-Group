"use client";

import { m } from "motion/react";
import { useReducedMotion } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function TextReveal({ 
  text, 
  className = "", 
  delay = 0,
  as: Component = "h2" 
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Split text into words for staggered animation
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <m.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="inline-block"
    >
      <Component className={className}>
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-1 mr-[0.25em]">
            <m.span variants={child} className="inline-block">
              {word}
            </m.span>
          </span>
        ))}
      </Component>
    </m.div>
  );
}

"use client";

import { m, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
  once?: boolean;
}

export default function Reveal({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "",
  duration = 0.7,
  once = true
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const getDirectionOffset = () => {
    if (direction === "up") return { y: 24, x: 0 };
    if (direction === "down") return { y: -24, x: 0 };
    if (direction === "left") return { x: 24, y: 0 };
    if (direction === "right") return { x: -24, y: 0 };
    return { x: 0, y: 0 };
  };

  const offset = getDirectionOffset();

  if (prefersReducedMotion) {
    return (
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once }}
        transition={{ duration, delay }}
        className={className}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Premium ease-out curve
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

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

  const offset = prefersReducedMotion ? {} : getDirectionOffset();
  const transitionSettings = prefersReducedMotion 
    ? { duration: 0, delay: 0 }
    : { duration, delay, ease: [0.21, 0.47, 0.32, 0.98] as any };
    
  const viewportSettings = prefersReducedMotion
    ? { once }
    : { once, margin: "-50px" };

  return (
    <m.div
      initial={prefersReducedMotion ? false : { opacity: 1, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportSettings}
      transition={transitionSettings}
      className={className}
    >
      {children}
    </m.div>
  );
}

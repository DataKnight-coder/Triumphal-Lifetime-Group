"use client";

import { m, AnimatePresence, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={pathname}
        initial={prefersReducedMotion ? false : { y: 15 }}
        animate={{ y: 0 }}
        exit={prefersReducedMotion ? undefined : { y: -15 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex-1 flex flex-col"
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}

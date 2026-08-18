"use client";

import { useRef, useState, ReactNode } from "react";
import { m, useReducedMotion } from "motion/react";

export default function MagneticButton({ children, className = "" }: { children: ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Max movement is 8px
    const moveX = (middleX / (width / 2)) * 8;
    const moveY = (middleY / (height / 2)) * 8;
    
    setPosition({ x: moveX, y: moveY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (prefersReducedMotion) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </m.div>
  );
}

"use client";

import { useRef, useState, ReactNode } from "react";
import { m } from "motion/react";
import Link from "next/link";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType | typeof Link;
  href?: string;
}

export default function MagneticButton({ 
  children, 
  className = "", 
  onClick,
  as: Component = "button",
  href
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (buttonRef.current) {
      const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const props = {
    ref: buttonRef as any,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    onClick,
    ...(href ? { href } : {}),
    className: `relative inline-flex items-center justify-center overflow-hidden transition-colors duration-300 group ${className}`,
  };

  return (
    <m.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {href && Component === "button" ? (
        <Link {...(props as any)} href={href}>
          <span className="absolute inset-0 bg-tlg-signatureGold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 rounded-[inherit]"></span>
          <span className="relative z-10 group-hover:text-tlg-midnight transition-colors duration-300 flex items-center justify-center w-full h-full">
            {children}
          </span>
        </Link>
      ) : (
        <Component {...props}>
          <span className="absolute inset-0 bg-tlg-signatureGold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 rounded-[inherit]"></span>
          <span className="relative z-10 group-hover:text-tlg-midnight transition-colors duration-300 flex items-center justify-center w-full h-full">
            {children}
          </span>
        </Component>
      )}
    </m.div>
  );
}

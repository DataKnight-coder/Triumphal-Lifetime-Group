"use client";

import { useEffect, useState } from "react";
import { m, useScroll, useSpring } from "motion/react";

export default function ReadingProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar only after scrolling past the hero section
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <m.div 
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-tlg-signatureGold/20 origin-left"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}
    >
      <m.div 
        className="absolute top-0 left-0 bottom-0 right-0 bg-tlg-signatureGold origin-left shadow-[0_0_10px_rgba(208,154,58,0.5)]" 
        style={{ scaleX }} 
      />
    </m.div>
  );
}

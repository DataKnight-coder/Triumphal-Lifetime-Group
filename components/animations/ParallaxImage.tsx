"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ParallaxImageProps {
 src: string;
 alt: string;
 className?: string;
 imageClassName?: string;
}

export default function ParallaxImage({ src, alt, className = "", imageClassName = "" }: ParallaxImageProps) {
 const containerRef = useRef<HTMLDivElement>(null);
 const prefersReducedMotion = useReducedMotion();
 
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start end", "end start"]
 });

 // -4% to +4% movement as requested
 const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

 return (
 <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
 {prefersReducedMotion ? (
 <Image src={src} alt={alt} fill className={`object-cover ${imageClassName}`} />
 ) : (
 <m.div style={{ y, width: "100%", height: "108%", top: "-4%", position: "absolute" }}>
 <Image src={src} alt={alt} fill className={`object-cover ${imageClassName}`} />
 </m.div>
 )}
 </div>
 );
}

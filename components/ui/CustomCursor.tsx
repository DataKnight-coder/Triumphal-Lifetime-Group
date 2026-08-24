"use client";

import { useEffect, useState } from "react";
import { m, useReducedMotion } from "motion/react";

export default function CustomCursor() {
 const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
 const [cursorVariant, setCursorVariant] = useState("default");
 const [cursorText, setCursorText] = useState("");
 const prefersReducedMotion = useReducedMotion();
 const [isTouchDevice, setIsTouchDevice] = useState(false);

 useEffect(() => {
 // Check for coarse pointer (touch devices)
 if (window.matchMedia("(pointer: coarse)").matches) {
 setIsTouchDevice(true);
 return;
 }

 const mouseMove = (e: MouseEvent) => {
 setMousePosition({
 x: e.clientX,
 y: e.clientY
 });
 };

 window.addEventListener("mousemove", mouseMove);

 // Global hover detection for links and buttons
 const handleMouseOver = (e: MouseEvent) => {
 const target = e.target as HTMLElement;
 
 const isLinkOrBtn = target.closest("a") || target.closest("button") || target.tagName === "A" || target.tagName === "BUTTON";
 const isCard = target.closest("[data-cursor='card']");

 if (isCard) {
 setCursorVariant("card");
 setCursorText(target.closest("[data-cursor='card']")?.getAttribute("data-cursor-text") || "EXPLORE");
 } else if (isLinkOrBtn) {
 setCursorVariant("interactive");
 setCursorText("");
 } else {
 setCursorVariant("default");
 setCursorText("");
 }
 };

 window.addEventListener("mouseover", handleMouseOver);

 return () => {
 window.removeEventListener("mousemove", mouseMove);
 window.removeEventListener("mouseover", handleMouseOver);
 };
 }, []);

 if (isTouchDevice || prefersReducedMotion) return null;

 const variants = {
 default: {
 x: mousePosition.x - 4,
 y: mousePosition.y - 4,
 width: 8,
 height: 8,
 backgroundColor: "#D09A3A",
 border: "0px solid transparent",
 opacity: 1
 },
 interactive: {
 x: mousePosition.x - 20,
 y: mousePosition.y - 20,
 width: 40,
 height: 40,
 backgroundColor: "transparent",
 border: "1.5px solid #D09A3A",
 opacity: 1
 },
 card: {
 x: mousePosition.x - 36,
 y: mousePosition.y - 36,
 width: 72,
 height: 72,
 backgroundColor: "#D09A3A",
 border: "0px solid #D09A3A",
 opacity: 1
 }
 };

 return (
 <>
 <style>{`
 @media (pointer: fine) {
 body * {
 cursor: none !important;
 }
 }
 `}</style>
 
 <m.div
 className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-exclusion"
 variants={variants}
 animate={cursorVariant}
 transition={{
 type: "spring",
 stiffness: 800,
 damping: 35,
 mass: 0.2
 }}
 >
 {cursorVariant === "card" && (
 <span className="text-[11px] font-bold tracking-widest text-white uppercase">{cursorText}</span>
 )}
 </m.div>
 </>
 );
}

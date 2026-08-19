"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { useRef } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "motion/react";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.9]);

  return (
    <footer ref={containerRef} className="bg-white px-2 md:px-6 pb-2 md:pb-6 pt-12 md:pt-24 relative z-0">
      <div className="bg-tlg-midnight text-white rounded-[40px] md:rounded-[80px] pt-24 md:pt-32 pb-12 relative overflow-hidden flex flex-col items-center">
        
        <div className="max-w-[1600px] w-full mx-auto px-8 md:px-16 relative z-10 flex flex-col">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start border-b border-white/10 pb-16 md:pb-24 gap-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight text-white tracking-tight">
                Building Businesses.<br />
                Empowering People.<br />
                <span className="italic font-light text-white/70">Creating Lasting Value.</span>
              </h2>
              <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-semibold mt-12">
                &copy; {new Date().getFullYear()} Triumphal Lifetime Group.<br/>All rights reserved.
              </div>
            </div>

            {/* Links and Contact Info */}
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              
              {/* Column 1: Navigation */}
              <div className="flex flex-col">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-8">Navigation</h4>
                <ul className="flex flex-col gap-4 text-sm text-white/80 font-light">
                  <li><Link href="/" className="hover:text-tlg-signatureGold transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-tlg-signatureGold transition-colors">About Us</Link></li>
                  <li><Link href="/companies" className="hover:text-tlg-signatureGold transition-colors">Our Companies</Link></li>
                  <li><Link href="/insights" className="hover:text-tlg-signatureGold transition-colors">Insights</Link></li>
                  <li><Link href="/impact" className="hover:text-tlg-signatureGold transition-colors">Social Impact</Link></li>
                </ul>
              </div>

              {/* Column 2: Support */}
              <div className="flex flex-col">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-8">Support</h4>
                <ul className="flex flex-col gap-4 text-sm text-white/80 font-light">
                  <li><Link href="/contact" className="hover:text-tlg-signatureGold transition-colors">Contact Us</Link></li>
                  <li><Link href="/book" className="hover:text-tlg-signatureGold transition-colors text-white font-medium">Book Consultation</Link></li>
                  <li><Link href="/privacy" className="hover:text-tlg-signatureGold transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-tlg-signatureGold transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>

              {/* Column 3: Get In Touch */}
              <div className="flex flex-col">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-8">Get In Touch</h4>
                <ul className="flex flex-col gap-4 text-sm text-white/80 font-light">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-white w-16">CANADA</span> 
                    <a href="tel:+16477740409" className="hover:text-tlg-signatureGold transition-colors">+1 647 774 0409</a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-white w-16">UAE</span> 
                    <a href="tel:+971551995483" className="hover:text-tlg-signatureGold transition-colors">055 199 5483</a>
                  </li>
                  <li className="pt-2">
                    <a href="mailto:info@triumphallifetimegroup.com" className="hover:text-tlg-signatureGold transition-colors border-b border-white/20 pb-0.5">
                      info@triumphallifetimegroup.com
                    </a>
                  </li>
                  <li className="pt-2">
                    <a href="https://www.triumphallifetimegroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-tlg-signatureGold transition-colors text-xs text-white/50">
                      www.triumphallifetimegroup.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: Follow Us */}
              <div className="flex flex-col">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-8">Follow Us</h4>
                <div className="flex items-center gap-5 text-white/60 mb-6">
                  <a href="#" className="hover:text-tlg-signatureGold transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:border-tlg-signatureGold"><Facebook size={16} /></a>
                  <a href="#" className="hover:text-tlg-signatureGold transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:border-tlg-signatureGold"><Linkedin size={16} /></a>
                  <a href="#" className="hover:text-tlg-signatureGold transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:border-tlg-signatureGold"><Instagram size={16} /></a>
                </div>
                <span className="text-xs font-semibold tracking-widest text-white/80">
                  @triumphallifetimegroup
                </span>
              </div>

            </div>
          </div>
          
        </div>

        {/* Oversized Brand Typography */}
        <div className="w-full overflow-hidden flex justify-center items-center mt-12 md:mt-24 px-4 select-none pointer-events-none perspective-[1000px]">
          {prefersReducedMotion ? (
             <span className="font-serif font-black tracking-tighter text-white text-[18vw] leading-[0.75] opacity-90 block">
               triumphal
             </span>
          ) : (
            <m.span 
              style={{ y, scale, opacity }}
              className="font-serif font-black tracking-tighter text-white text-[18vw] leading-[0.75] block origin-bottom"
            >
              triumphal
            </m.span>
          )}
        </div>
        
      </div>
    </footer>
  );
}

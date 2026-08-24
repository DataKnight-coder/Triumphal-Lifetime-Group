"use client";

import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { useRef } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "motion/react";

const contacts = [
  {
    region: "Nigeria",
    type: "email",
    label: "africa@triumphallifetimegroup.com",
    href: "mailto:africa@triumphallifetimegroup.com",
  },
  {
    region: "Canada",
    type: "tel",
    label: "+1 647 774 0409",
    href: "tel:+16477740409",
  },
  {
    region: "UAE",
    type: "tel",
    label: "+971 55 199 5483",
    href: "tel:+971551995483",
  },
  {
    region: "General",
    type: "email",
    label: "info@triumphallifetimegroup.com",
    href: "mailto:info@triumphallifetimegroup.com",
  },
];

const socials = [
  { href: "https://www.facebook.com/triuphalifetimeagency.hr", icon: Facebook, label: "Facebook" },
  { href: "https://www.linkedin.com/company/triumphal-lifetime/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/triumphallifetimehr/", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/channel/UCDYT-iFYM6yfD5yk596mX_w", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.9]);

  return (
    <footer ref={containerRef} className="bg-white px-2 md:px-6 pb-2 md:pb-6 pt-12 md:pt-24 relative z-0">
      <div className="bg-tlg-midnight text-white rounded-[40px] md:rounded-[80px] pt-16 md:pt-32 pb-12 relative overflow-hidden flex flex-col items-center">

        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-16 relative z-10 flex flex-col">

          {/* ── TOP GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-white/10 pb-12 md:pb-24 w-full">

            {/* Brand column */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <h2 className="text-2xl md:text-4xl lg:text-[40px] font-serif leading-[1.1] text-white tracking-tight">
                Building Businesses.<br />
                Empowering People.<br />
                <span className="italic font-normal text-white/90">Creating Lasting Value.</span>
              </h2>

              {/* Social icons — shown here on mobile, hidden on desktop (shown in contact col) */}
              <div className="flex items-center gap-3 lg:hidden">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/80 hover:text-tlg-midnight transition-colors bg-white/10 hover:bg-tlg-signatureGold flex items-center justify-center w-11 h-11 rounded-full"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <div className="text-[11px] text-white/70 uppercase tracking-widest font-semibold">
                &copy; {new Date().getFullYear()} Triumphal Lifetime Group.<br />All rights reserved.
              </div>
            </div>

            {/* ── MOBILE: Nav + Support side-by-side ── */}
            <div className="lg:hidden grid grid-cols-2 gap-8">
              {/* Navigation */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-5">Navigation</h4>
                <ul className="flex flex-col gap-4 text-sm text-white/90 font-normal">
                  <li><Link href="/" className="hover:text-tlg-signatureGold transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-tlg-signatureGold transition-colors">About Us</Link></li>
                  <li><Link href="/companies" className="hover:text-tlg-signatureGold transition-colors">Our Companies</Link></li>
                  <li><Link href="/insights" className="hover:text-tlg-signatureGold transition-colors">Insights</Link></li>
                  <li><Link href="/impact" className="hover:text-tlg-signatureGold transition-colors">Social Impact</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-5">Support</h4>
                <ul className="flex flex-col gap-4 text-sm text-white/90 font-normal">
                  <li><Link href="/contact" className="hover:text-tlg-signatureGold transition-colors">Contact Us</Link></li>
                  <li><Link href="?book=true" className="hover:text-tlg-signatureGold transition-colors font-medium">Book Consultation</Link></li>
                  <li><Link href="/privacy" className="hover:text-tlg-signatureGold transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-tlg-signatureGold transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>

            {/* ── MOBILE: Contact cards stacked ── */}
            <div className="lg:hidden flex flex-col gap-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-1">Get In Touch</h4>
              {contacts.map(({ region, label, href }) => (
                <a
                  key={region}
                  href={href}
                  className="flex flex-col gap-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-5 py-4 transition-colors group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold">{region}</span>
                  <span className="text-sm text-white/90 group-hover:text-white transition-colors break-all leading-snug">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            {/* ── DESKTOP: Nav ── */}
            <div className="hidden lg:flex lg:col-span-2 flex-col lg:pl-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-8">Navigation</h4>
              <ul className="flex flex-col gap-4 text-sm text-white/90 font-normal">
                <li><Link href="/" className="hover:text-tlg-signatureGold transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-tlg-signatureGold transition-colors">About Us</Link></li>
                <li><Link href="/companies" className="hover:text-tlg-signatureGold transition-colors">Our Companies</Link></li>
                <li><Link href="/insights" className="hover:text-tlg-signatureGold transition-colors">Insights</Link></li>
                <li><Link href="/impact" className="hover:text-tlg-signatureGold transition-colors">Social Impact</Link></li>
              </ul>
            </div>

            {/* ── DESKTOP: Support ── */}
            <div className="hidden lg:flex lg:col-span-2 flex-col">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-8">Support</h4>
              <ul className="flex flex-col gap-4 text-sm text-white/90 font-normal">
                <li><Link href="/contact" className="hover:text-tlg-signatureGold transition-colors">Contact Us</Link></li>
                <li><Link href="?book=true" className="hover:text-tlg-signatureGold transition-colors font-medium">Book Consultation</Link></li>
                <li><Link href="/privacy" className="hover:text-tlg-signatureGold transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-tlg-signatureGold transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* ── DESKTOP: Contact + Socials ── */}
            <div className="hidden lg:flex lg:col-span-4 flex-col">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-8">Get In Touch</h4>
              <ul className="flex flex-col gap-5 text-sm text-white/90 font-normal mb-10">
                {contacts.map(({ region, label, href }) => (
                  <li key={region} className="flex flex-col gap-1">
                    <span className="font-bold text-white/70 text-[10px] uppercase tracking-widest">{region}</span>
                    <a href={href} className="hover:text-tlg-signatureGold transition-colors break-all leading-snug">{label}</a>
                  </li>
                ))}
              </ul>

              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/80 hover:text-tlg-midnight transition-colors bg-white/10 hover:bg-tlg-signatureGold p-3 rounded-full flex items-center justify-center w-10 h-10"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Oversized brand wordmark */}
        <div className="w-full overflow-hidden flex justify-center items-center mt-12 md:mt-24 px-4 select-none pointer-events-none">
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

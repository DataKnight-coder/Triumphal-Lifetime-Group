"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { X } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";

function BookingModalContent({ siteKey }: { siteKey?: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const open = params.get("book") === "true";
  const service = params.get("service") || "";
  useEffect(() => { document.body.style.overflow = open ? "hidden" : "unset"; return () => { document.body.style.overflow = "unset"; }; }, [open]);
  function close() { const next = new URLSearchParams(params.toString()); next.delete("book"); next.delete("service"); router.replace(`${window.location.pathname}${next.size ? `?${next}` : ""}`, { scroll: false }); }
  return <AnimatePresence>{open && <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"><m.button aria-label="Close consultation form" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={close} className="fixed inset-0 bg-tlg-midnight/70 backdrop-blur-md" /><m.div role="dialog" aria-modal="true" aria-labelledby="booking-title" initial={{opacity:0,scale:.96,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.96,y:20}} className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-white p-7 md:p-12 shadow-2xl"><button onClick={close} aria-label="Close" className="absolute top-5 right-5 rounded-full bg-tlg-ivory p-2"><X size={20} /></button><span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest">Confidential enquiry</span><h2 id="booking-title" className="text-3xl md:text-4xl font-serif text-tlg-midnight mt-3 mb-2">Book a Consultation</h2><p className="text-sm text-gray-700 mb-8">Tell us what support you need. Do not include identity documents, financial records or passwords.</p><EnquiryForm siteKey={siteKey} initialService={service} compact /></m.div></div>}</AnimatePresence>;
}

export default function BookingModal({ siteKey }: { siteKey?: string }) {
  return <Suspense fallback={null}><BookingModalContent siteKey={siteKey} /></Suspense>;
}

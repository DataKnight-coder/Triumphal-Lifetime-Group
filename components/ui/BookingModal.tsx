"use client";

import { Suspense, useCallback, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { X } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";

function BookingModalContent({ siteKey }: { siteKey?: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const open = params.get("book") === "true";
  const service = params.get("service") || "";
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    const next = new URLSearchParams(params.toString());
    next.delete("book");
    next.delete("service");
    router.replace(`${window.location.pathname}${next.size ? `?${next}` : ""}`, { scroll: false });
  }, [params, router]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    previouslyFocused.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [close, open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <m.button
            type="button"
            aria-label="Close consultation form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-tlg-midnight/70 backdrop-blur-md"
          />
          <m.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-white p-7 shadow-2xl md:p-12"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close consultation form"
              className="absolute right-5 top-5 rounded-full bg-tlg-ivory p-2"
            >
              <X size={20} />
            </button>
            <span className="text-xs font-bold uppercase tracking-widest text-tlg-signatureGold">Confidential enquiry</span>
            <h2 id="booking-title" className="mb-2 mt-3 font-serif text-3xl text-tlg-midnight md:text-4xl">Book a Consultation</h2>
            <p className="mb-8 text-sm text-gray-700">Tell us what support you need. Do not include identity documents, financial records or passwords.</p>
            <EnquiryForm siteKey={siteKey} initialService={service} compact />
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function BookingModal({ siteKey }: { siteKey?: string }) {
  return <Suspense fallback={null}><BookingModalContent siteKey={siteKey} /></Suspense>;
}

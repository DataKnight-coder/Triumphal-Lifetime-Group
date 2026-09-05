"use client";

type SafeEvent = "consultation_click" | "enquiry_submit" | "phone_click" | "whatsapp_click" | "email_click" | "cv_submit" | "download" | "product_purchase";

declare global { interface Window { dataLayer?: Record<string, unknown>[] } }

export function trackEvent(event: SafeEvent, detail: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...detail });
}

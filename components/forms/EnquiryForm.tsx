"use client";

import Script from "next/script";
import Link from "next/link";
import { FormEvent, useEffect, useId, useState } from "react";
import { trackEvent } from "@/lib/analytics";

declare global {
  interface Window { tlgTurnstileVerified?: (token: string) => void; tlgTurnstileExpired?: () => void; }
}

type EnquiryFormProps = { siteKey?: string; initialService?: string; compact?: boolean; onSuccess?: (reference: string) => void };

export default function EnquiryForm({ siteKey = "", initialService = "", compact = false, onSuccess }: EnquiryFormProps) {
  const id = useId().replace(/:/g, "");
  const [token, setToken] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  useEffect(() => {
    window.tlgTurnstileVerified = (value) => setToken(value);
    window.tlgTurnstileExpired = () => setToken("");
    return () => { delete window.tlgTurnstileVerified; delete window.tlgTurnstileExpired; };
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("sending"); setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.turnstile_token = token;
    try {
      const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json() as { message?: string; reference?: string };
      if (!response.ok) throw new Error(result.message || "The enquiry could not be sent.");
      const reference = result.reference || ""; setState("success"); setMessage(result.message || "Your enquiry has been sent."); form.reset(); trackEvent("enquiry_submit", { form_type: compact ? "consultation" : "contact" }); onSuccess?.(reference);
    } catch (error) { setState("error"); setMessage(error instanceof Error ? error.message : "The enquiry could not be sent."); }
  }

  if (state === "success") return <div role="status" className="border border-green-300 bg-green-50 rounded-xl p-7 text-green-900"><h3 className="font-serif text-2xl mb-2">Request received</h3><p>{message}</p></div>;
  return <form onSubmit={submit} className={compact ? "space-y-4" : "space-y-6"}>
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5"><label className="text-xs font-bold uppercase tracking-widest">Full name<input required name="name" maxLength={120} className="mt-2 w-full border border-tlg-stone bg-white p-3 font-normal normal-case tracking-normal" /></label><label className="text-xs font-bold uppercase tracking-widest">Email<input required name="email" type="email" maxLength={190} className="mt-2 w-full border border-tlg-stone bg-white p-3 font-normal normal-case tracking-normal" /></label></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5"><label className="text-xs font-bold uppercase tracking-widest">Phone (optional)<input name="phone" maxLength={50} className="mt-2 w-full border border-tlg-stone bg-white p-3 font-normal normal-case tracking-normal" /></label><label className="text-xs font-bold uppercase tracking-widest">Country<input required name="country" maxLength={100} className="mt-2 w-full border border-tlg-stone bg-white p-3 font-normal normal-case tracking-normal" /></label></div>
    <input type="hidden" name="formType" value={compact ? "consultation" : "contact"} />
    <label className="block text-xs font-bold uppercase tracking-widest">Division / subject<select required name="service" defaultValue={({"hr-consulting":"HR & Business Consulting","HR Consulting":"HR & Business Consulting","real-estate":"Real Estate Advisory","Real Estate":"Real Estate Advisory","education":"Global Education Advisory","Education Advisory":"Global Education Advisory","global-mobility":"Global Mobility Services","Global Mobility":"Global Mobility Services","technology":"Information Technology","IT":"Information Technology","digital-learning":"Digital Products & E-commerce","Digital Products":"Digital Products & E-commerce","foundation":"Charity Foundation","Foundation":"Charity Foundation"} as Record<string,string>)[initialService] || initialService} className="mt-2 w-full border border-tlg-stone bg-white p-3 font-normal normal-case tracking-normal"><option value="">Select a division</option><option>HR &amp; Business Consulting</option><option>Real Estate Advisory</option><option>Global Education Advisory</option><option>Global Mobility Services</option><option>Information Technology</option><option>Digital Products &amp; E-commerce</option><option>Charity Foundation</option><option>General Enquiry</option></select></label>
    <label className="block text-xs font-bold uppercase tracking-widest">Message<textarea required name="message" rows={compact ? 3 : 5} minLength={10} maxLength={3000} className="mt-2 w-full border border-tlg-stone bg-white p-3 font-normal normal-case tracking-normal" /></label>
    <label className="sr-only">Leave this field empty<input name="company_website" tabIndex={-1} autoComplete="off" /></label>
    <label className="flex gap-3 text-xs font-normal normal-case tracking-normal"><input required name="consent" value="yes" type="checkbox" className="mt-1" />I agree to the processing of my enquiry in accordance with the <Link href="/privacy" className="underline">Privacy Policy</Link>.</label>
    {siteKey ? <div id={`turnstile-${id}`} className="cf-turnstile" data-sitekey={siteKey} data-callback="tlgTurnstileVerified" data-expired-callback="tlgTurnstileExpired" /> : <p role="alert" className="text-sm text-amber-800">Secure form verification is not configured. Please contact us by email.</p>}
    {message && <p role="alert" className={state === "error" ? "text-sm text-red-700" : "text-sm"}>{message}</p>}
    <button disabled={state === "sending" || !siteKey || !token} type="submit" className="w-full bg-tlg-midnight text-white p-4 text-xs font-bold uppercase tracking-[0.2em] disabled:opacity-50">{state === "sending" ? "Sending…" : "Send Enquiry"}</button>
  </form>;
}

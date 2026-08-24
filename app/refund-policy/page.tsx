import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Refund & Cancellation Policy | Triumphal Lifetime Group",
 description: "Our policy regarding service fees, refunds, and cancellations.",
};

export default function RefundPolicyPage() {
 return (
 <main className="bg-white pt-32 pb-24">
 <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
 <div className="max-w-[1000px] mx-auto px-6 md:px-12">
 <div className="max-w-3xl animate-reveal-up">
 <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Legal</span>
 <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
 Refund & Cancellation Policy.
 </h1>
 <p className="text-xl text-gray-800 font-normal leading-relaxed">
 Transparent terms governing service fees, retainers, and cancellations across all TLG divisions.
 </p>
 </div>
 </div>
 </section>

 <section className="py-24">
 <div className="max-w-[1000px] mx-auto px-6 md:px-12 prose prose-lg prose-headings:font-serif prose-headings:text-tlg-midnight prose-p:text-gray-800 prose-p:font-normal prose-a:text-tlg-signatureGold hover:prose-a:text-tlg-midnight max-w-none">

 <h2>1. General Principles</h2>
 <p>
   At Triumphal Lifetime Group (&ldquo;TLG&rdquo;), we are committed to delivering measurable value to every client engagement. Due to the professional advisory and consultative nature of our services, all fees paid are generally non-refundable once work has commenced. This policy outlines the specific conditions and exceptions applicable across our divisions.
 </p>

 <h2>2. Initial Consultation Fees</h2>
 <p>
   Any fees paid for an initial paid consultation session are non-refundable if the consultation has taken place. Where a client has paid for a consultation and is unable to attend, a one-time rescheduling may be granted if notice is provided at least 48 hours in advance. Failure to provide 48 hours&rsquo; notice will result in forfeiture of the consultation fee.
 </p>

 <h2>3. Retainer and Project Fees</h2>
 <p>
   For project-based engagements governed by a signed Service Agreement, the following applies:
 </p>
 <ul>
   <li><strong>Cancellation before commencement:</strong> A full refund of any advance payment will be issued, less a 15% administration fee to cover onboarding and scoping costs already incurred.</li>
   <li><strong>Cancellation after commencement:</strong> Fees corresponding to work already delivered or in progress will be retained. Any advance payments in excess of work completed will be refunded within 14 business days of the cancellation date.</li>
   <li><strong>Cancellation after project completion:</strong> No refund is applicable.</li>
 </ul>

 <h2>4. Real Estate Advisory Fees</h2>
 <p>
   Advisory fees paid in relation to property identification, negotiation, and due diligence are non-refundable once the advisory service has been rendered. In the event that a property transaction does not proceed to completion for reasons outside TLG&rsquo;s control (e.g., developer delays, client financing issues, regulatory changes), TLG retains the right to charge for advisory work completed to that point.
 </p>
 <p>
   Holiday home booking deposits are refundable in full if cancelled more than 7 days before the check-in date. Cancellations within 7 days of check-in are non-refundable.
 </p>

 <h2>5. Global Mobility and Education Advisory</h2>
 <p>
   Immigration and education advisory services involve significant preparatory work including profile assessments, documentation review, and application preparation. Once an engagement has commenced:
 </p>
 <ul>
   <li>Fees for completed assessments or submitted applications are non-refundable.</li>
   <li>Visa or application outcomes are subject to the decisions of independent government authorities. TLG does not guarantee any specific immigration or admission outcome, and fees are not refunded on the basis of an unsuccessful application.</li>
 </ul>

 <h2>6. Digital Learning Products</h2>
 <p>
   Access to digital learning courses and materials is granted upon payment. Due to the immediate nature of digital access, refunds are not available once course content has been accessed. Where a course has been purchased but not yet accessed, a refund may be requested within 7 days of purchase.
 </p>

 <h2>7. How to Request a Refund</h2>
 <p>
   All refund requests must be submitted in writing to <a href="mailto:info@triumphallifetimegroup.com">info@triumphallifetimegroup.com</a> with the subject line <strong>&ldquo;Refund Request - [Your Name] - [Service]&rdquo;</strong>. Please include your engagement reference number, the date of payment, and the grounds for your request. We will acknowledge receipt within two business days and issue a decision within ten business days.
 </p>

 <h2>8. Currency and Processing</h2>
 <p>
   Where a refund is approved, it will be processed in the original currency of payment. TLG is not liable for any currency exchange losses or bank processing fees incurred during the refund transaction.
 </p>

 <h2>9. Amendments</h2>
 <p>
   TLG reserves the right to amend this Refund & Cancellation Policy at any time. The version in effect at the time of your engagement will govern your specific arrangement. For project-specific terms, the signed Service Agreement shall take precedence over this general policy.
 </p>

 <div className="mt-16 pt-8 border-t border-tlg-stone text-sm text-gray-700">
   Last Updated: August 2026
 </div>
 </div>
 </section>
 </main>
 );
}

import type { Metadata } from "next";
import { getGlobalSettings } from "@/lib/wordpress/client";

export const metadata: Metadata = {
 title: "Accessibility Statement | Triumphal Lifetime Group",
 description: "Our commitment to digital accessibility for all users.",
};

export default async function AccessibilityStatementPage() {
 const settings = await getGlobalSettings();
 return (
 <main className="bg-white pt-32 pb-24">
 <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
 <div className="max-w-[1000px] mx-auto px-6 md:px-12">
 <div className="max-w-3xl animate-reveal-up">
 <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Legal</span>
 <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
 Accessibility Statement.
 </h1>
 <p className="text-xl text-gray-800 font-normal leading-relaxed">
 Our commitment to digital accessibility for all users across our global platforms.
 </p>
 </div>
 </div>
 </section>

 <section className="py-24">
 <div className="max-w-[1000px] mx-auto px-6 md:px-12 prose prose-lg prose-headings:font-serif prose-headings:text-tlg-midnight prose-p:text-gray-800 prose-p:font-normal prose-a:text-tlg-signatureGold hover:prose-a:text-tlg-midnight max-w-none">

 <h2>1. Our Commitment</h2>
 <p>
   Triumphal Lifetime Group is committed to ensuring digital accessibility for people with disabilities and diverse abilities. We continually improve the user experience for all visitors and apply relevant accessibility standards to our digital platforms. We believe that access to information and professional advisory services should not be limited by a user&rsquo;s physical or cognitive ability.
 </p>

 <h2>2. Conformance Status</h2>
 <p>
   We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines explain how to make web content more accessible to people with disabilities. Conformance to these guidelines will help make the web more user-friendly for everyone.
 </p>
 <p>
   We are partially conformant with WCAG 2.1 Level AA. &ldquo;Partially conformant&rdquo; means that some parts of the content do not yet fully conform to the accessibility standard. We are actively working to improve our conformance.
 </p>

 <h2>3. Technical Specifications</h2>
 <p>
   Our website relies on the following technologies for conformance with WCAG 2.1:
 </p>
 <ul>
   <li>HTML5 semantic markup</li>
   <li>CSS for visual presentation</li>
   <li>JavaScript for interactive components</li>
   <li>ARIA (Accessible Rich Internet Applications) attributes where applicable</li>
 </ul>

 <h2>4. Known Limitations</h2>
 <p>
   We are aware of the following limitations and are actively working to address them:
 </p>
 <ul>
   <li>Some older PDF documents may not yet be fully accessible. We are converting these to accessible formats on an ongoing basis.</li>
   <li>Certain interactive map embeds provided by third-party services may have limited keyboard accessibility.</li>
   <li>Some video content may not currently have full closed-caption support. We are implementing this systematically.</li>
 </ul>

 <h2>5. Feedback and Contact</h2>
 <p>
   We welcome your feedback on the accessibility of our digital platforms. If you experience any barriers or wish to report an accessibility issue, please contact us at:
 </p>
 <p>
   {settings.general_email && <><strong>Email:</strong> <a href={`mailto:${settings.general_email}`}>{settings.general_email}</a><br /></>}
   We aim to respond to accessibility-related feedback within five business days.
 </p>

 <h2>6. Formal Complaints</h2>
 <p>
   If you are not satisfied with our response, you may contact the relevant national or regional regulatory body responsible for digital accessibility compliance in your jurisdiction. In Nigeria, this falls under the Federal Competition and Consumer Protection Commission (FCCPC). In Canada, federally regulated entities fall under the Canadian Human Rights Commission. In the UAE, the relevant authority is the Telecommunications and Digital Government Regulatory Authority (TDRA).
 </p>

 <h2>7. Assessment Approach</h2>
 <p>
   Triumphal Lifetime Group assesses the accessibility of our digital products through self-evaluation during development, and we periodically commission independent accessibility audits to validate our progress. Our development team receives ongoing training in inclusive design practices.
 </p>

 <div className="mt-16 pt-8 border-t border-tlg-stone text-sm text-gray-700">
   Last Updated: August 2026
 </div>
 </div>
 </section>
 </main>
 );
}

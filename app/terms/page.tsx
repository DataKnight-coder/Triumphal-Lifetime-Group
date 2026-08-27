import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Terms of Service",
 description: "Terms and conditions outlining the rules and regulations for the use of Triumphal Lifetime Group's services.",
};

export default function TermsPage() {
 return (
 <main className="bg-white min-h-screen">
 {/* Hero */}
 <section className="pt-40 pb-16 bg-tlg-ivory border-b border-tlg-stone">
 <div className="max-w-[800px] mx-auto px-6 md:px-12">
 <span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Legal</span>
 <h1 className="text-4xl md:text-5xl font-serif text-tlg-midnight leading-[1.1] mb-4">Terms of Service</h1>
 <p className="text-sm text-gray-800 font-normal">Last updated: August 2026</p>
 </div>
 </section>

 {/* Body */}
 <section className="py-20">
 <div className="max-w-[800px] mx-auto px-6 md:px-12">
 <div className="space-y-12 text-[15px] text-gray-800 font-normal leading-[1.85]">

 <p>
 These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Triumphal Lifetime Group website and services. By accessing our website, engaging our services, or interacting with our content, you accept these Terms in full. If you disagree with any part of these Terms, you must not use our services.
 </p>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">1. Advisory Disclaimer</h2>
 <p className="mb-4">Triumphal Lifetime Group operates across multiple specialized divisions. It is important to understand the nature of our advisory services:</p>
 <ul className="space-y-3 list-disc list-inside">
 <li><strong className="text-tlg-midnight font-medium">Real Estate Advisory:</strong> We provide strategic property consulting and market analysis. We do not guarantee specific property yields, investment returns, or capital appreciation. All property investments carry inherent risks. Regulated valuation or legal conveyancing must be performed by appropriately licensed local professionals.</li>
 <li><strong className="text-tlg-midnight font-medium">Global Mobility:</strong> We facilitate the administrative, logistical, and strategic aspects of cross-border relocation. We are not a government agency and do not issue visas or permits. We cannot guarantee application outcomes or processing times. Regulated immigration legal advice must be provided by authorized professionals in the relevant jurisdiction.</li>
 <li><strong className="text-tlg-midnight font-medium">Business Consulting:</strong> Operational and strategic advice is based on available market data and client information. We do not guarantee specific financial outcomes or corporate success resulting from the implementation of our recommendations.</li>
 </ul>
 </div>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">2. Intellectual Property Rights</h2>
 <p>
 Unless otherwise stated, Triumphal Lifetime Group and/or its licensors own the intellectual property rights for all material on this website. This includes, but is not limited to, text, graphics, logos, images, methodologies, and frameworks. All intellectual property rights are reserved. You may view and print pages for personal, non-commercial use, subject to restrictions set out in these terms.
 </p>
 <p className="mt-4">You must not:</p>
 <ul className="space-y-2 list-disc list-inside mt-2">
 <li>Republish material from our website without proper attribution.</li>
 <li>Sell, rent, or sub-license material from our website.</li>
 <li>Reproduce, duplicate, or copy material for commercial purposes without explicit written consent.</li>
 </ul>
 </div>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">3. User Obligations</h2>
 <p>
 When using our website or engaging our services, you agree to provide accurate and complete information. You are prohibited from using our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful.
 </p>
 </div>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">4. Limitation of Liability</h2>
 <p>
 To the maximum extent permitted by applicable law, Triumphal Lifetime Group excludes all representations, warranties, and conditions relating to our website and the use of this website. We will not be liable for any direct, indirect, special, or consequential loss or damage arising under these terms or in connection with our website, whether arising in tort, contract, or otherwise.
 </p>
 </div>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">5. Third-Party Links</h2>
 <p>
 Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies or terms of service.
 </p>
 </div>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">6. Governing Law &amp; Jurisdiction</h2>
 <p>
 These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which the relevant Triumphal Lifetime Group operating entity is registered (e.g., Nigeria, UAE, or Canada), depending on the nature of the engagement. Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts of that respective jurisdiction.
 </p>
 </div>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">7. Modifications to Terms</h2>
 <p>
 We reserve the right to revise these Terms at any time. We will post the revised Terms on the website, and by using this website you are expected to review these Terms on a regular basis. Your continued use of the website following any changes signifies your acceptance of the updated Terms.
 </p>
 </div>

 {/* Contact Box */}
 <div className="bg-tlg-ivory border border-tlg-stone p-8 mt-4">
 <p className="text-sm text-tlg-midnight font-semibold mb-2">Legal &amp; Compliance Inquiries</p>
 <p className="text-sm text-gray-700 font-normal mb-3">If you have any questions or require clarification regarding these Terms of Service, please contact our legal team.</p>
 <a href="mailto:legal@triumphallifetimegroup.com" className="text-sm text-tlg-signatureGold hover:text-tlg-midnight transition-colors font-medium">
 legal@triumphallifetimegroup.com
 </a>
 </div>

 </div>
 </div>
 </section>

 {/* Footer Nav */}
 <section className="py-10 border-t border-tlg-stone bg-tlg-ivory">
 <div className="max-w-[800px] mx-auto px-6 md:px-12 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest text-gray-800">
 <Link href="/privacy" className="hover:text-tlg-midnight transition-colors">Privacy Policy</Link>
 <Link href="/cookies" className="hover:text-tlg-midnight transition-colors">Cookie Policy</Link>
 <Link href="/contact" className="hover:text-tlg-midnight transition-colors">Contact Us</Link>
 </div>
 </section>
 </main>
 );
}

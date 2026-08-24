import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Legal Disclaimer | Triumphal Lifetime Group",
 description: "Important legal information and limitations of liability for Triumphal Lifetime Group.",
};

export default function LegalDisclaimerPage() {
 return (
 <main className="bg-white pt-32 pb-24">
 <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
 <div className="max-w-[1000px] mx-auto px-6 md:px-12">
 <div className="max-w-3xl animate-reveal-up">
 <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Legal</span>
 <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
 Legal Disclaimer.
 </h1>
 <p className="text-xl text-gray-800 font-normal leading-relaxed">
 Important legal information and limitations of liability governing use of our services and platforms.
 </p>
 </div>
 </div>
 </section>

 <section className="py-24">
 <div className="max-w-[1000px] mx-auto px-6 md:px-12 prose prose-lg prose-headings:font-serif prose-headings:text-tlg-midnight prose-p:text-gray-800 prose-p:font-normal prose-a:text-tlg-signatureGold hover:prose-a:text-tlg-midnight max-w-none">

 <h2>1. General Information Only</h2>
 <p>
   The information contained on this website and in any materials published by Triumphal Lifetime Group (&ldquo;TLG&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is provided for general informational and marketing purposes only. It does not constitute, and should not be construed as, professional legal, financial, investment, immigration, or real estate advice.
 </p>
 <p>
   While we endeavour to keep information current and accurate, TLG makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of any information contained on this website.
 </p>

 <h2>2. No Professional Advice</h2>
 <p>
   Nothing on this website constitutes a solicitation, recommendation, endorsement, or offer to buy or sell any securities, financial instruments, real estate, or other assets. Any reliance you place on general information from this website is strictly at your own risk. Before making any financial, legal, or business decision, you should seek independent professional advice tailored to your specific circumstances.
 </p>

 <h2>3. Investment and Real Estate Risk</h2>
 <p>
   All investments involve risk, including the possible loss of principal. Past performance of any investment product or real estate asset described or referenced on this site is not indicative of future results. Property values can decrease as well as increase. Any projections, forecasts, or forward-looking statements represent our current expectations and are subject to change without notice.
 </p>
 <p>
   Triumphal Lifetime Group acts as an advisory intermediary and is not a licensed real estate agent, broker, or financial institution unless expressly stated and evidenced in the applicable jurisdiction.
 </p>

 <h2>4. Immigration and Mobility Information</h2>
 <p>
   Information relating to immigration, visa pathways, and global mobility is provided for general guidance only and reflects our understanding of the prevailing regulatory environment at the time of publication. Immigration law is subject to frequent and rapid change. TLG is not a licensed immigration attorney. Any specific immigration matter should be reviewed by a qualified, licensed immigration lawyer in the relevant jurisdiction.
 </p>

 <h2>5. Limitation of Liability</h2>
 <p>
   To the fullest extent permitted by applicable law, Triumphal Lifetime Group, its directors, officers, employees, partners, and agents shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from your use of, or reliance on, any information or materials on this website or our advisory services, even if TLG has been advised of the possibility of such damages.
 </p>

 <h2>6. Third-Party Links</h2>
 <p>
   This website may contain links to third-party websites. These links are provided for your convenience only. TLG has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
 </p>

 <h2>7. Jurisdiction</h2>
 <p>
   This disclaimer is governed by the laws of the Federal Republic of Nigeria, the United Arab Emirates, and Canada, as applicable to the specific operating entity of Triumphal Lifetime Group engaged in the relevant service. Any disputes shall be resolved under the laws of the applicable jurisdiction.
 </p>

 <h2>8. Updates</h2>
 <p>
   We reserve the right to update this disclaimer at any time. The most current version will always be available on this page. Continued use of our website or services following any changes constitutes acceptance of the revised disclaimer.
 </p>

 <div className="mt-16 pt-8 border-t border-tlg-stone text-sm text-gray-700">
   Last Updated: August 2026
 </div>
 </div>
 </section>
 </main>
 );
}

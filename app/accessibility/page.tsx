import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Our commitment to digital accessibility for all users.",
};

export default function AccessibilityStatementPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl animate-reveal-up">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Legal</span>
            <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
              Accessibility Statement.
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Our commitment to digital accessibility for all users.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 prose prose-lg prose-headings:font-serif prose-headings:text-tlg-midnight prose-p:text-gray-600 prose-p:font-light prose-a:text-tlg-signatureGold hover:prose-a:text-tlg-midnight max-w-none">
          <h2>1. Introduction</h2>
          <p>
            This is a placeholder for the Accessibility Statement. Please provide the official legal text to replace this content. We are committed to maintaining the highest standards of corporate governance, transparency, and compliance across all our operating jurisdictions, including the UAE, Canada, and Nigeria.
          </p>
          
          <h2>2. Scope and Application</h2>
          <p>
            This policy applies to all users of our digital platforms and clients engaging with our services globally. By continuing to use our services, you acknowledge that you have read, understood, and agreed to these terms.
          </p>

          <h2>3. Updates to this Policy</h2>
          <p>
            We may update this policy periodically to reflect changes in legal requirements or our operational practices. The most current version will always be available on this page.
          </p>

          <div className="mt-16 pt-8 border-t border-tlg-stone text-sm text-gray-500">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </section>
    </main>
  );
}

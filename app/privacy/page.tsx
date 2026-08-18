import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Triumphal Lifetime Group collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <span className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Legal</span>
          <h1 className="text-4xl md:text-5xl font-serif text-tlg-midnight leading-[1.1] mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-400 font-light">Last updated: August 2025</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <div className="space-y-12 text-[15px] text-gray-600 font-light leading-[1.85]">

            <p>
              Triumphal Lifetime Group (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Group&rdquo;) is committed to protecting the personal data you share with us. This Privacy Policy explains what information we collect when you use our website or services, why we collect it, and how we protect it.
            </p>

            <div>
              <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">1. Information We Collect</h2>
              <p className="mb-4">When you interact with our website, we may collect the following categories of personal data:</p>
              <ul className="space-y-2 list-none">
                {[
                  ["Identity Data", "Your name, title, and similar identifiers you provide when contacting us or submitting a form."],
                  ["Contact Data", "Your email address, phone number, and country of residence."],
                  ["Inquiry Data", "The content of messages you send us, including your area of interest or service enquiry."],
                  ["Technical Data", "Your IP address, browser type, device type, and pages visited, collected automatically through standard web server logs."],
                ].map(([term, def]) => (
                  <li key={term} className="flex flex-col sm:flex-row gap-1">
                    <span className="font-semibold text-tlg-midnight min-w-[160px] shrink-0">{term}:</span>
                    <span>{def}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">2. How We Use Your Data</h2>
              <p className="mb-4">We process your personal data only where we have a lawful basis to do so. The main purposes are:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>To respond to your inquiry or consultation request.</li>
                <li>To provide the advisory services you have requested.</li>
                <li>To maintain communication records and service logs.</li>
                <li>To comply with applicable legal or regulatory obligations.</li>
              </ul>
              <p className="mt-4">We do not use your personal data for automated decision-making or profiling, and we do not sell it to third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">3. Data Retention</h2>
              <p>
                We retain personal data only for as long as it is necessary for the purpose for which it was collected, or as required by applicable law. Inquiry and consultation records are typically retained for up to 3 years from the date of last contact.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">4. Data Security</h2>
              <p>
                We apply appropriate technical and organisational measures to safeguard personal data against unauthorised access, loss, alteration, or disclosure. Access to personal data is restricted to team members and authorised service providers who require it to perform their responsibilities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">5. Your Rights</h2>
              <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data, subject to legal obligations.</li>
                <li>Object to or restrict certain types of processing.</li>
                <li>Withdraw consent where processing is consent-based.</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us using the details below.</p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">6. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies. Please refer to our{" "}
                <Link href="/cookies" className="text-tlg-signatureGold underline underline-offset-4 hover:text-tlg-midnight transition-colors">Cookie Policy</Link>{" "}
                for a full explanation of what cookies we use and how to manage them.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">7. Third-Party Services</h2>
              <p>
                We may use third-party services (such as analytics providers or communication tools) that process data on our behalf. Where we do, we ensure appropriate data processing agreements are in place and that those providers offer adequate data protection standards.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The &ldquo;Last updated&rdquo; date at the top of this page indicates when it was last revised. Continued use of the website after any changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-tlg-ivory border border-tlg-stone p-8 mt-4">
              <p className="text-sm text-tlg-midnight font-semibold mb-2">Privacy Inquiries &amp; Data Requests</p>
              <p className="text-sm text-gray-500 font-light mb-3">For privacy-related questions, data access requests, or deletion requests, please contact our team directly.</p>
              <a href="mailto:legal@triumphallifetimegroup.com" className="text-sm text-tlg-signatureGold hover:text-tlg-midnight transition-colors font-medium">
                legal@triumphallifetimegroup.com
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <section className="py-10 border-t border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
          <Link href="/terms" className="hover:text-tlg-midnight transition-colors">Terms &amp; Conditions</Link>
          <Link href="/cookies" className="hover:text-tlg-midnight transition-colors">Cookie Policy</Link>
          <Link href="/contact" className="hover:text-tlg-midnight transition-colors">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}

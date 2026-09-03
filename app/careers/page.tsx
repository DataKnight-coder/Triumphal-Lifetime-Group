import type { Metadata } from "next";
import Link from "next/link";
import { getCareers } from "@/lib/wordpress/client";

export const metadata: Metadata = {
 title: "Careers",
 description: "Join a global network of experts.",
};

export default async function CareersPage() {
 const openCareers = await getCareers();

  return (
 <main className="bg-white pt-32 pb-24">
 <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12">
 <div className="max-w-4xl animate-reveal-up">
 <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Careers</span>
 <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
 Join a Global Network of Experts.
 </h1>
 <p className="text-xl text-gray-800 font-normal leading-relaxed">
 Hiring at Triumphal Lifetime Group is division-specific. Open roles are based on current operational needs across our consulting, real estate, education, and technology divisions.
 </p>
 </div>
 </div>
 </section>

 <section className="py-24">
 <div className="max-w-[1000px] mx-auto px-6 md:px-12">
 
 <h2 className="text-3xl font-serif text-tlg-midnight mb-12 border-b border-tlg-stone pb-4">Why Triumphal Lifetime?</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
 <div>
 <h4 className="text-lg font-serif text-tlg-midnight mb-3">Global Exposure</h4>
 <p className="text-sm text-gray-800 font-normal leading-relaxed">Work on cross-border projects spanning North America, the Middle East, and Africa, gaining significant international business experience.</p>
 </div>
 <div>
 <h4 className="text-lg font-serif text-tlg-midnight mb-3">Integrated Ecosystem</h4>
 <p className="text-sm text-gray-800 font-normal leading-relaxed">Collaborate daily with specialists in HR, real estate, and technology, broadening your professional perspective beyond a single discipline.</p>
 </div>
 <div>
 <h4 className="text-lg font-serif text-tlg-midnight mb-3">Meritocratic Growth</h4>
 <p className="text-sm text-gray-800 font-normal leading-relaxed">Advancement is based strictly on performance, client impact, and leadership capability - not tenure.</p>
 </div>
 <div>
 <h4 className="text-lg font-serif text-tlg-midnight mb-3">Continuous Learning</h4>
 <p className="text-sm text-gray-800 font-normal leading-relaxed">Leverage our internal Digital Learning division to continually upskill and stay ahead of industry trends.</p>
 </div>
 </div>

 {openCareers.length > 0 ? (
  <div className="space-y-4">
    {openCareers.map((c) => (
      <div key={c.slug} className="border border-tlg-stone p-6 bg-white">
        <h4 className="text-xl font-serif text-tlg-midnight mb-2">{c.title}</h4>
        <p className="text-xs uppercase tracking-widest text-tlg-signatureGold mb-3">
          {[c.department, c.location, c.employment_type].filter(Boolean).join(" · ")}
        </p>
        <div className="text-sm text-gray-800 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: c.content }} />
        {c.application_url && (
          <a href={c.application_url} className="inline-flex mt-5 text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
            Apply Now
          </a>
        )}
      </div>
    ))}
  </div>
) : null}

 <div className="bg-tlg-ivory border border-tlg-stone p-12 text-center">
 <h3 className="text-2xl font-serif text-tlg-midnight mb-4">General Applications</h3>
 <p className="text-gray-800 font-normal mb-8 max-w-lg mx-auto">
 Our vacancies are managed directly through our HR Consulting division. Please submit your CV and a brief cover letter outlining your target division.
 </p>
 <Link href="/contact" className="inline-flex items-center justify-center bg-tlg-midnight text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-tlg-signatureGold transition-colors">
 Submit Application
 </Link>
 </div>

 </div>
 </section>
 </main>
 );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { m } from "motion/react";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Navigating the Canadian Express Entry System in 2026 | Triumphal Lifetime Group",
  description: "A comprehensive breakdown of the 2026 CRS score stabilization, Category-Based selection priorities, and strategic pathways for highly skilled professionals.",
};

export default function ArticlePage() {
  return (
    <main className="bg-white pt-32 pb-24">
      {/* Header */}
      <section className="relative pt-16 pb-12 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <Link href="/insights" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-800 hover:text-tlg-midnight transition-colors mb-8">
              <ArrowRight size={14} className="mr-2 rotate-180" /> Back to Insights
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Global Mobility</span>
            <h1 className="text-3xl md:text-5xl font-serif text-tlg-midnight leading-[1.2] mb-8">
              Navigating the Canadian Express Entry System in 2026
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-6 text-xs text-gray-700 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-2"><Calendar size={14} /> Jul 24, 2026</span>
              <span className="flex items-center gap-2"><User size={14} /> Mobility & Immigration Desk</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <Reveal delay={0.3}>
            <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden bg-tlg-stone">
              <Image src="/visuals/global-mobility.jpg" alt="Canadian Global Mobility" fill className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <Reveal delay={0.4}>
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-tlg-midnight prose-p:text-gray-800 prose-p:font-normal prose-p:leading-relaxed prose-a:text-tlg-signatureGold max-w-none">
              <p className="lead text-xl text-tlg-midnight font-medium border-l-2 border-tlg-signatureGold pl-6 italic">
                The Canadian immigration environment has undergone a paradigm shift. Moving away from the broad, point-heavy draws of the early 2020s, the 2026 Express Entry system is a hyper-targeted, economically driven selection matrix. For international professionals, simply having a high degree and good English is no longer a guaranteed ticket to permanent residency.
              </p>

              <h2 className="text-3xl mt-12 mb-6">The End of the General Draw Dominance</h2>
              <p>
                In 2026, the era of relying solely on general Comprehensive Ranking System (CRS) score draws has decisively ended. While general draws still occur, the CRS cut-off scores have stabilized at historically high baselines - often hovering above the 520 mark. This renders the general pathway exceptionally difficult for candidates without Canadian work experience, provincial nominations, or validated LMIA-backed job offers.
              </p>
              <p>
                Immigration, Refugees and Citizenship Canada (IRCC) has pivoted almost entirely to <strong>Category-Based Selection</strong>, ensuring that economic migration directly addresses acute labor shortages in specific sectors of the Canadian economy.
              </p>

              <div className="my-10 bg-tlg-ivory p-8 rounded-xl border border-tlg-stone">
                <h4 className="text-sm font-bold uppercase tracking-widest text-tlg-signatureGold mb-4 mt-0">The 2026 High-Priority Categories</h4>
                <ul className="space-y-3 m-0 p-0 list-none">
                  <li className="flex gap-3"><span className="text-tlg-signatureGold">◆</span> <strong>Artificial Intelligence & Deep Tech:</strong> A new category introduced to support Canada's national AI strategy.</li>
                  <li className="flex gap-3"><span className="text-tlg-signatureGold">◆</span> <strong>Healthcare Operations:</strong> Continued aggressive intake of nursing, clinical, and healthcare administrative professionals.</li>
                  <li className="flex gap-3"><span className="text-tlg-signatureGold">◆</span> <strong>French-Language Proficiency:</strong> The absolute strongest "hack" for 2026; candidates with NCLC level 7 or higher in French receive vastly lower CRS cut-offs.</li>
                  <li className="flex gap-3"><span className="text-tlg-signatureGold">◆</span> <strong>Green Energy & Cleantech Trades:</strong> Addressing the infrastructure demands of the national net-zero transition.</li>
                </ul>
              </div>

              <h2 className="text-3xl mt-12 mb-6">Provincial Nominee Programs (PNPs) in a Restricted Housing Market</h2>
              <p>
                Another defining factor of 2026 is the recalibration of Provincial Nominee Programs (PNPs). In response to intense domestic pressure regarding housing affordability and infrastructure strain in major hubs like Toronto and Vancouver, provinces have significantly tightened their allocations.
              </p>
              <p>
                Ontario and British Columbia now heavily prioritize candidates who have already secured regional employment outside of their respective metropolitan cores. Conversely, provinces like Alberta and Saskatchewan remain highly attractive alternatives, offering streamlined pathways for professionals willing to commit to growing their economies. A successful 2026 mobility strategy must look beyond the traditional GTA/GVA borders.
              </p>

              <h2 className="text-3xl mt-12 mb-6">Strategic Imperatives for Applicants</h2>
              <p>
                To succeed in this highly competitive environment, prospective immigrants must adopt a strategic, multi-layered approach:
              </p>
              <ol>
                <li><strong>Upskill Strategically:</strong> If your profession falls outside the priority categories, consider rapid upskilling or pivoting into tech-adjacent roles (e.g., transitioning from general marketing to AI-driven growth marketing) that align with IRCC's National Occupational Classification (NOC) targets.</li>
                <li><strong>Master French:</strong> We cannot overstate this. Achieving bilingual status is currently the most statistically reliable method of bypassing the hyper-competitive general pool.</li>
                <li><strong>Secure Validated Employment:</strong> Leverage global recruitment networks to secure an LMIA-supported role before applying. This adds 50-200 points to your CRS score and drastically increases PNP viability.</li>
              </ol>

              <div className="bg-tlg-midnight text-white p-10 md:p-12 mt-16 rounded-[24px]">
                <h4 className="font-serif text-2xl mt-0 mb-4 text-white">Optimize Your Global Mobility Strategy</h4>
                <p className="text-sm text-white/80 mb-8 leading-relaxed">The 2026 Canadian immigration matrix requires precision. Our Global Mobility and Education Advisory teams provide bespoke pathways for professionals, executives, and students seeking to transition seamlessly to Canada.</p>
                <Link href="/solutions/global-mobility" className="inline-flex items-center justify-center bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                  Speak with an Advisor
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

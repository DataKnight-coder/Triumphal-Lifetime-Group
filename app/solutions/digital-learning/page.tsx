import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MonitorPlay, Layers, BookOpen, Presentation, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Products & Learning ",
  description: "Corporate training ecosystems, digital curriculum design, and capability building.",
};

export default function DigitalLearningPage() {
  return (
    <main className="bg-white pb-24">
      {/* 02 - Division Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-tlg-midnight text-white border-b border-tlg-signatureGold/20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <Link href="/companies" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-tlg-signatureGold transition-colors mb-10">
            <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
          </Link>
          <div className="max-w-4xl">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Division 05</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-6">
              Digital Products &amp; Learning
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mb-10">
              Accelerate corporate capability building. We design and deploy scalable learning ecosystems and high-impact digital resources for modern enterprises.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book" className="bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                Book a Consultation
              </Link>
              <a href="#capabilities" className="bg-transparent border border-white/20 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-white transition-colors">
                View Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - Executive Snapshot */}
      <section className="bg-tlg-ivory border-b border-tlg-stone py-8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-tlg-stone">
            <div className="md:px-6 first:pl-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Scope</p>
              <p className="text-sm font-semibold text-tlg-midnight">Global Delivery</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Primary Focus</p>
              <p className="text-sm font-semibold text-tlg-midnight">Capability Building</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Who We Support</p>
              <p className="text-sm font-semibold text-tlg-midnight">HR Leaders &amp; Teams</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Engagement</p>
              <p className="text-sm font-semibold text-tlg-midnight">Design &rarr; Deploy</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - Problem / Opportunity */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-6">Scaling Knowledge Transfer</h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                As enterprises grow, relying on ad-hoc or purely physical training models becomes a bottleneck. Knowledge transfer must be standardized, measurable, and highly accessible to keep pace with changing market conditions and distributed workforces.
              </p>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                We bridge the gap between human resources and technology by developing state-of-the-art digital learning products that equip teams with practical, immediately applicable commercial skills at scale.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-[20px] overflow-hidden shadow-2xl">
              <Image src="/visuals/digital-learning.jpg" alt="Digital Corporate Training" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Capabilities Grid */}
      <section id="capabilities" className="py-24 bg-tlg-ivory border-y border-tlg-stone scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Capabilities</span>
            <h2 className="text-4xl font-serif text-tlg-midnight">Core Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Layers size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Learning Ecosystem Deployment</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                We deploy managed Learning Management Systems (LMS) tailored for mid-to-large enterprises, ensuring seamless integration with existing HR frameworks.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Platform architecture &amp; setup</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Analytics &amp; compliance tracking</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Ongoing technical administration</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Code2 size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Digital Curriculum Design</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Transform dry operational manuals and theoretical frameworks into highly engaging, interactive digital modules designed for maximum retention.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Instructional design structuring</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Multimedia content production</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Micro-learning adaptation</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Presentation size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Executive Masterclasses</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                High-level, condensed digital training products specifically engineered for time-poor C-suite executives and senior leadership teams.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Leadership &amp; strategy modules</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Market compliance updates</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Secure, private delivery channels</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <MonitorPlay size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Onboarding Automation</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Standardize the new-hire experience across multiple regions with digital orientation products that convey corporate culture and operational protocols perfectly every time.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Cultural induction videos</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Process &amp; software tutorials</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 06 - Who We Help */}
      <section className="py-20 border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 block">Who We Support</span>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Corporate HR Departments</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Scaling Tech Startups</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Franchise Operators</span>
          </div>
        </div>
      </section>

      {/* 07 & 08 - How It Works & Deliverables */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-serif text-tlg-midnight mb-10">Our Methodology</h2>
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-tlg-stone">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">1</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Needs Analysis</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Collaborating with leadership to identify exact skills gaps and define measurable learning outcomes.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">2</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Instructional Design</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Structuring the raw subject matter into pedagogical frameworks optimized for digital consumption.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">3</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Production &amp; Build</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Developing the actual multimedia assets, assessments, and platform environments.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">4</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Deployment</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Rolling out the ecosystem to the workforce and establishing data tracking for ROI measurement.</p>
              </div>
            </div>
          </div>

          <div className="bg-tlg-midnight text-white p-10 md:p-14">
            <h3 className="text-2xl font-serif mb-8">What You Receive</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <BookOpen className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Custom Digital Courseware</h4>
                  <p className="text-white/60 font-light text-sm">Proprietary SCORM-compliant modules belonging exclusively to your organisation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BookOpen className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Configured LMS Platform</h4>
                  <p className="text-white/60 font-light text-sm">A fully branded learning environment, tested and integrated with your systems.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BookOpen className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Engagement Analytics</h4>
                  <p className="text-white/60 font-light text-sm">Dashboards proving completion rates, assessment scores, and compliance metrics.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 10 - Value Demonstration */}
      <section className="py-24 bg-tlg-ivory border-y border-tlg-stone">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-6 block">How We Create Value</span>
          <h2 className="text-3xl font-serif text-tlg-midnight mb-8">Protecting Institutional Knowledge</h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Employee turnover costs more than just recruitment fees; it results in a massive drain of institutional knowledge. By transforming your internal processes and expertise into formalized digital learning products, we ensure that your intellectual property remains within the company, ready to instantly train the next generation of hires regardless of their physical location.
          </p>
        </div>
      </section>

      {/* 11 - Cross-Referral */}
      <section className="py-16 border-b border-tlg-stone">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-gray-500 font-light">
            <strong className="text-tlg-midnight font-medium">Developing your internal systems?</strong> Our <Link href="/solutions/technology" className="text-tlg-signatureGold hover:text-tlg-midnight transition-colors underline underline-offset-4">Information Technology</Link> division can ensure your broader enterprise architecture supports digital learning integration.
          </p>
        </div>
      </section>

      {/* 14 - Final CTA */}
      <section className="py-24 bg-tlg-midnight text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-serif mb-6">Digitize Your Expertise</h2>
          <p className="text-white/70 font-light mb-10 text-lg">
            Speak with our instructional design team to discuss building a scalable learning ecosystem for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
              Book a Consultation
            </Link>
            <Link href="/contact" className="bg-transparent border border-white/20 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-white transition-colors">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

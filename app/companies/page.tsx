import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CompaniesHub() {
  const companies = [
    {
      title: "HR & Business Consulting",
      desc: "Comprehensive workforce structuring, talent acquisition, and corporate advisory.",
      href: "/companies/hr-business-consulting",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Real Estate Services",
      desc: "Premium property acquisition, portfolio management, and investment advisory.",
      href: "/companies/real-estate",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Education Advisory",
      desc: "Global study pathways, university placements, and career mapping.",
      href: "/companies/education-advisory",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Global Visa & Immigration",
      desc: "Seamless cross-border mobility, residency processing, and compliance.",
      href: "/companies/global-visa-immigration",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Digital Products & Learning",
      desc: "On-demand corporate resources, masterclasses, and digital tools.",
      href: "/companies/digital-products-learning",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Information Technology",
      desc: "Digital transformation, secure infrastructure, and custom systems.",
      href: "/companies/information-technology",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        <section className="relative pt-48 pb-32 w-full bg-tlg-midnight">
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Ecosystem</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Our <span className="italic font-light">Companies</span>.
            </h1>
          </div>
        </section>

        <section className="py-32 bg-white border-t border-tlg-stone relative z-10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="max-w-3xl mb-24">
              <h2 className="text-3xl font-serif text-tlg-midnight mb-6">A Unified Platform</h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Seven specialized divisions operating as one cohesive entity. Select a company below to explore targeted services, localized expertise, and cross-border capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companies.map((company) => (
                <Link key={company.title} href={company.href} className="group relative overflow-hidden h-[500px] bg-tlg-midnight cursor-pointer block">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out opacity-60 group-hover:scale-105"
                    style={{ backgroundImage: `url('${company.img}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-12 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                    <h3 className="text-3xl font-serif text-white mb-4">{company.title}</h3>
                    <div className="w-0 h-[1px] bg-tlg-signatureGold mb-6 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col md:flex-row md:items-end justify-between">
                      <p className="text-gray-300 text-sm leading-relaxed font-light max-w-sm mb-6 md:mb-0">
                        {company.desc}
                      </p>
                      <span className="text-white hover:text-tlg-signatureGold font-medium tracking-widest text-xs uppercase flex items-center shrink-0">
                        Explore <ArrowRight size={14} className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

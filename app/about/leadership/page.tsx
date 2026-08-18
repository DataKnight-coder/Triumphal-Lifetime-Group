import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Leadership() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        <section className="relative pt-48 pb-32 w-full bg-tlg-midnight">
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">People</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Executive <span className="italic font-light">Leadership</span>.
            </h1>
          </div>
        </section>

        <section className="py-32 bg-white border-t border-tlg-stone">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="mb-24 max-w-3xl">
              <h2 className="text-4xl font-serif text-tlg-midnight mb-6">Guiding the Global Ecosystem</h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Our leadership team brings together decades of experience across international law, corporate finance, human resources, and real estate development.
              </p>
            </div>

            {/* Leadership Grid (Placeholder for the 5 partners/bios mentioned in CONTENT_GAPS.md) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="group">
                  <div className="aspect-[3/4] bg-tlg-stone/20 mb-6 overflow-hidden">
                    {/* Placeholder image until actual bios are provided */}
                    <div 
                      className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop')` }}
                    ></div>
                  </div>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-2">Executive Partner {i}</h3>
                  <span className="text-xs uppercase tracking-widest text-tlg-signatureGold font-bold block mb-4">Board Member</span>
                  <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-3">
                    Biography and credentials to be provided. Driving strategic vision across the Triumphal Lifetime Group global network.
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

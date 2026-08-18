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

            {/* CEO Feature Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
              <div className="lg:col-span-5">
                <div className="aspect-[3/4] overflow-hidden bg-tlg-stone/20">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url('/Adekemi Arike Adedayo.jpeg')` }}
                  ></div>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6">Founder & Chief Executive</span>
                <h2 className="text-5xl md:text-6xl font-serif text-tlg-midnight leading-[0.95] tracking-tight mb-8">
                  Adekemi Arike<br /><span className="italic font-light">Adedayo</span>
                </h2>
                <div className="w-16 h-px bg-tlg-signatureGold mb-8"></div>
                <p className="text-lg text-gray-500 font-light leading-relaxed mb-6">
                  A visionary entrepreneur and global mobility strategist, Adekemi Arike Adedayo founded Triumphal Lifetime Group with a singular mandate: to build the world's most trusted gateway for individuals and corporations navigating international borders, capital flows, and opportunity landscapes.
                </p>
                <p className="text-gray-500 font-light leading-relaxed mb-10">
                  With deep expertise spanning immigration law, real estate development, HR consulting, and digital education, she has architected a group of companies that now serves clients across Nigeria, the UAE, Canada, and beyond — delivering precision, discretion, and transformational outcomes at every engagement.
                </p>
                <div className="flex gap-8 text-sm">
                  <div>
                    <span className="text-3xl font-serif text-tlg-midnight block">500+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Clients Served</span>
                  </div>
                  <div>
                    <span className="text-3xl font-serif text-tlg-midnight block">3</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Continents</span>
                  </div>
                  <div>
                    <span className="text-3xl font-serif text-tlg-midnight block">7</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Companies</span>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

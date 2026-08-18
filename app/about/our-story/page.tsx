import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function OurStory() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        <section className="relative pt-48 pb-32 w-full bg-tlg-midnight">
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Origins</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Our <span className="italic font-light">Story</span>.
            </h1>
          </div>
        </section>

        <section className="py-32 bg-white">
          <div className="max-w-[800px] mx-auto px-6 text-xl text-tlg-midnight font-light leading-relaxed space-y-12">
            <p className="text-3xl font-serif leading-tight">
              Triumphal Lifetime Group was not born from a desire to create a single business, but from the necessity to solve a complex global problem: friction.
            </p>
            <p>
              When navigating between emerging African markets, Middle Eastern commercial hubs, and North American institutions, individuals and corporations constantly hit walls. Immigration separated from real estate. Real estate separated from corporate structuring. Education separated from career placement.
            </p>
            <p>
              Founded with the vision to bridge these gaps, we created an ecosystem. A place where a single strategic decision at the top level ripples down into perfect execution across HR, property acquisition, and global mobility.
            </p>
            
            <div className="my-24 border-l-4 border-tlg-signatureGold pl-8">
              <h3 className="text-2xl font-serif mb-4">Evolution of the Group</h3>
              <p className="text-lg text-gray-500">
                What began as a specialized consultancy has rapidly scaled into a massive international operation. We recognized that true value creation isn't just about advising—it's about building the infrastructure to deliver the result. Thus, our seven sister companies were born, united under the Triumphal banner.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

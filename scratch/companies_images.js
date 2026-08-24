const fs = require('fs');

let pageContent = fs.readFileSync('app/companies/page.tsx', 'utf8');

// 1. Add Image Import
if (!pageContent.includes('import Image from "next/image";')) {
  pageContent = pageContent.replace(
    'import Link from "next/link";',
    'import Link from "next/link";\nimport Image from "next/image";'
  );
}

// 2. Replace Grid contents
const replacement = `
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* HR */}
            <Link href="/solutions/hr-consulting" data-cursor="card" data-cursor-text="VIEW" className="group relative overflow-hidden rounded-[24px] bg-tlg-ivory min-h-[400px] flex flex-col justify-end p-8">
              <Image src="/visuals/hr.jpg" alt="HR Consulting" fill className="object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-sm z-20 border border-white/20">Consulting</span>
              
              <div className="relative z-20 mt-auto">
                <h3 className="text-2xl font-serif text-white mb-4">HR & Business Consulting</h3>
                <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
                  Workforce engineering, executive search, and corporate governance for expanding enterprises.
                </p>
                <div className="pt-6 border-t border-white/20 flex items-center text-xs font-bold uppercase tracking-widest text-tlg-signatureGold">
                  Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Real Estate */}
            <Link href="/solutions/real-estate" data-cursor="card" data-cursor-text="VIEW" className="group relative overflow-hidden rounded-[24px] bg-tlg-ivory min-h-[400px] flex flex-col justify-end p-8">
              <Image src="/visuals/real-estate.jpg" alt="Real Estate" fill className="object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-sm z-20 border border-white/20">Real Estate</span>
              
              <div className="relative z-20 mt-auto">
                <h3 className="text-2xl font-serif text-white mb-4">Real Estate Advisory</h3>
                <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
                  Strategic property acquisition planning and international facility management.
                </p>
                <div className="pt-6 border-t border-white/20 flex items-center text-xs font-bold uppercase tracking-widest text-tlg-signatureGold">
                  Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Education */}
            <Link href="/solutions/education" data-cursor="card" data-cursor-text="VIEW" className="group relative overflow-hidden rounded-[24px] bg-tlg-ivory min-h-[400px] flex flex-col justify-end p-8">
              <Image src="/visuals/education.jpg" alt="Education" fill className="object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-sm z-20 border border-white/20">Education</span>
              
              <div className="relative z-20 mt-auto">
                <h3 className="text-2xl font-serif text-white mb-4">Education Advisory</h3>
                <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
                  Strategic academic planning and global institutional partnerships.
                </p>
                <div className="pt-6 border-t border-white/20 flex items-center text-xs font-bold uppercase tracking-widest text-tlg-signatureGold">
                  Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Global Mobility */}
            <Link href="/solutions/global-mobility" data-cursor="card" data-cursor-text="VIEW" className="group relative overflow-hidden rounded-[24px] bg-tlg-ivory min-h-[400px] flex flex-col justify-end p-8">
              <Image src="/visuals/global-mobility.jpg" alt="Mobility" fill className="object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-sm z-20 border border-white/20">Mobility</span>
              
              <div className="relative z-20 mt-auto">
                <h3 className="text-2xl font-serif text-white mb-4">Global Mobility</h3>
                <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
                  Corporate relocation logistics and cross-border administrative processing.
                </p>
                <div className="pt-6 border-t border-white/20 flex items-center text-xs font-bold uppercase tracking-widest text-tlg-signatureGold">
                  Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Digital Learning */}
            <Link href="/solutions/digital-learning" data-cursor="card" data-cursor-text="VIEW" className="group relative overflow-hidden rounded-[24px] bg-tlg-ivory min-h-[400px] flex flex-col justify-end p-8">
              <Image src="/visuals/digital-learning.jpg" alt="Digital" fill className="object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-sm z-20 border border-white/20">Digital</span>
              
              <div className="relative z-20 mt-auto">
                <h3 className="text-2xl font-serif text-white mb-4">Digital Learning</h3>
                <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
                  Scalable learning platforms and professional capability building.
                </p>
                <div className="pt-6 border-t border-white/20 flex items-center text-xs font-bold uppercase tracking-widest text-tlg-signatureGold">
                  Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Technology */}
            <Link href="/solutions/technology" data-cursor="card" data-cursor-text="VIEW" className="group relative overflow-hidden rounded-[24px] bg-tlg-ivory min-h-[400px] flex flex-col justify-end p-8">
              <Image src="/visuals/technology.jpg" alt="Technology" fill className="object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-sm z-20 border border-white/20">Technology</span>
              
              <div className="relative z-20 mt-auto">
                <h3 className="text-2xl font-serif text-white mb-4">Information Technology</h3>
                <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
                  Enterprise systems integration and strategic digital transformation.
                </p>
                <div className="pt-6 border-t border-white/20 flex items-center text-xs font-bold uppercase tracking-widest text-tlg-signatureGold">
                  Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

          </div>
`;

pageContent = pageContent.replace(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, replacement + '\n        </div>\n      </section>');

fs.writeFileSync('app/companies/page.tsx', pageContent);
console.log('Updated companies page with images');

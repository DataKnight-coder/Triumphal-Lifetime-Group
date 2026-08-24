const fs = require('fs');

let pageContent = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Remove SmartNeedFinder import and component
pageContent = pageContent.replace(/import SmartNeedFinder from "@\/components\/home\/SmartNeedFinder";\n/, '');
pageContent = pageContent.replace(/\{\/\* 04 - Smart Need Finder \*\/}\n\s+<SmartNeedFinder \/>\n\s+/, '');

// 2. Replace Brand Statement and Panoramic Image
const brandStatementRegex = /\{\/\* 02 - Brand Statement \*\/\}[\s\S]*?(?=\{\/\* 03 - Triumphal Ecosystem \*\/})/;
const newBrandStatement = `{/* Quick Trust Indicators */}
      <section className="bg-tlg-ivory py-8 border-y border-tlg-stone">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 divide-y md:divide-y-0 md:divide-x divide-tlg-stone/50">
          <div className="flex-1 flex flex-col items-center text-center pt-4 md:pt-0 w-full">
            <span className="text-2xl md:text-3xl font-serif text-tlg-midnight">3</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">Global Markets</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-center pt-4 md:pt-0 w-full">
            <span className="text-2xl md:text-3xl font-serif text-tlg-midnight">6</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">Specialist Divisions</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-center pt-4 md:pt-0 w-full">
            <span className="text-2xl md:text-3xl font-serif text-tlg-midnight">Integrated</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">Advisory Ecosystem</span>
          </div>
        </div>
      </section>

      {/* Who We Are - Brand Statement */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
            Modern challenges rarely fit into one category. That is why Triumphal Lifetime Group brings complementary expertise together within one business ecosystem.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Whether you are building a stronger organisation, exploring property opportunities, pursuing international education, or adopting technology, our specialist teams provide structured support from beginning to execution.
          </p>
        </div>
      </section>

      `;
pageContent = pageContent.replace(brandStatementRegex, newBrandStatement);

// 3. Modify Ecosystem Section to have horizontal scrolling and put Panoramic image right after it
const ecosystemGridRegex = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">/;
pageContent = pageContent.replace(ecosystemGridRegex, `<div className="md:hidden text-center text-white/50 text-[10px] uppercase tracking-widest mt-[-20px] mb-8 flex justify-center items-center gap-2">Swipe to explore <ArrowRight size={10} /></div>\n          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">`);

// Add shrink-0 to Ecosystem cards
pageContent = pageContent.replace(/<Link href="\/solutions\/hr-consulting" className="group/g, '<Link href="/solutions/hr-consulting" className="shrink-0 w-[82vw] snap-center md:w-auto group');
pageContent = pageContent.replace(/<Link href="\/solutions\/real-estate" className="group/g, '<Link href="/solutions/real-estate" className="shrink-0 w-[82vw] snap-center md:w-auto group');
pageContent = pageContent.replace(/<Link href="\/solutions\/education" className="group/g, '<Link href="/solutions/education" className="shrink-0 w-[82vw] snap-center md:w-auto group');
pageContent = pageContent.replace(/<Link href="\/solutions\/global-mobility" className="group/g, '<Link href="/solutions/global-mobility" className="shrink-0 w-[82vw] snap-center md:w-auto group');
pageContent = pageContent.replace(/<Link href="\/solutions\/digital-learning" className="group/g, '<Link href="/solutions/digital-learning" className="shrink-0 w-[82vw] snap-center md:w-auto group');
pageContent = pageContent.replace(/<Link href="\/solutions\/technology" className="group/g, '<Link href="/solutions/technology" className="shrink-0 w-[82vw] snap-center md:w-auto group');

// Insert Panoramic Image after Ecosystem
const afterEcosystemRegex = /<\/section>\n\n\s*\{\/\* 04 - What Makes TLG Different \*\/\}/;
const insertPanoramic = `</section>

      {/* Panoramic rounded image */}
      <section className="pb-24 md:pb-32 bg-white relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 md:pt-32">
          <div className="relative h-[300px] md:h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl">
            <Image src="/visuals/homepage_hero.jpg" alt="Triumphal Lifetime Group" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      {/* 04 - What Makes TLG Different */}`;
pageContent = pageContent.replace(afterEcosystemRegex, insertPanoramic);

// 4. Modify What Makes TLG Different for mobile scroll snapping
const tlgDiffGridRegex = /<div className="lg:w-2\/3 grid grid-cols-1 md:grid-cols-2 gap-6">/;
pageContent = pageContent.replace(tlgDiffGridRegex, `<div className="md:hidden text-left text-tlg-midnight/40 text-[10px] uppercase tracking-widest mt-[-20px] mb-2 flex items-center gap-2">Swipe to read <ArrowRight size={10} /></div>\n          <div className="lg:w-2/3 flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">`);

pageContent = pageContent.replace(/<div className="bg-white p-10 rounded-\[24px\] shadow-sm flex flex-col justify-center">/g, '<div className="shrink-0 w-[85vw] snap-center md:w-auto bg-white p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-center">');
pageContent = pageContent.replace(/<div className="bg-white p-10 rounded-\[24px\] shadow-sm flex flex-col justify-center md:translate-y-8">/g, '<div className="shrink-0 w-[85vw] snap-center md:w-auto bg-white p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-center md:translate-y-8">');

fs.writeFileSync('app/page.tsx', pageContent);
console.log('Successfully updated app/page.tsx');

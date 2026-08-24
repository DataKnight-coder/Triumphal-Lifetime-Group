const fs = require('fs');

let pageContent = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Add Imports
if (!pageContent.includes('import Reveal from "@/components/animations/Reveal";')) {
  pageContent = pageContent.replace(
    'import { ArrowRight } from "lucide-react";',
    'import { ArrowRight } from "lucide-react";\nimport Reveal from "@/components/animations/Reveal";\nimport MagneticButton from "@/components/ui/MagneticButton";'
  );
}

// 2. Wrap Quick Trust Indicators
const trustRegex = /<section className="bg-tlg-ivory py-8 border-y border-tlg-stone">([\s\S]*?)<\/section>/;
pageContent = pageContent.replace(trustRegex, (match, p1) => {
  return `<section className="bg-tlg-ivory py-8 border-y border-tlg-stone">
        <Reveal delay={0.2}>
${p1}
        </Reveal>
      </section>`;
});

// 3. Wrap Brand Statement
const brandStmtRegex = /<div className="max-w-\[1200px\] mx-auto px-6 md:px-12 text-center">([\s\S]*?)<\/div>/;
// Let's be careful not to match other centered max-1200px divs (Approach has one).
// Better to replace the whole section content.
const brandSectionRegex = /\{\/\* Who We Are - Brand Statement \*\/\}[\s\S]*?<section className="py-24 md:py-32 bg-white relative">([\s\S]*?)<\/section>/;
pageContent = pageContent.replace(brandSectionRegex, (match, p1) => {
  const newInner = p1.replace(/<h2 className="(.*?)">([\s\S]*?)<\/h2>/, '<Reveal><h2 className="$1">$2</h2></Reveal>')
                     .replace(/<p className="(.*?)">([\s\S]*?)<\/p>/, '<Reveal delay={0.1}><p className="$1">$2</p></Reveal>');
  return `{/* Who We Are - Brand Statement */}
      <section className="py-24 md:py-32 bg-white relative">${newInner}</section>`;
});

// 4. Ecosystem Header
const ecosystemHeaderRegex = /<div className="mb-16 flex flex-col items-center text-center">([\s\S]*?)<\/div>/;
pageContent = pageContent.replace(ecosystemHeaderRegex, (match, p1) => {
  return `<div className="mb-16 flex flex-col items-center text-center">
            <Reveal>${p1}</Reveal>
          </div>`;
});

// 5. Wrap each Ecosystem Card in a Reveal
// This is trickier since they are inside a flex container. I'll just wrap the grid contents.
const ecosystemGridRegex = /<div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">([\s\S]*?)<\/div>\n\s*<\/div>\n\s*<\/section>/;
pageContent = pageContent.replace(ecosystemGridRegex, (match, p1) => {
  // Wrap the entire grid inner in one Reveal? No, stagger.
  return `<Reveal delay={0.2} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">
${p1}
          </Reveal>\n        </div>\n      </section>`;
});

// 6. Wrap final CTA in MagneticButton
const ctaRegex = /<Link href="\/book" className="inline-flex items-center justify-center bg-tlg-signatureGold text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-\[0\.2em\] rounded-full hover:bg-white transition-colors">([\s\S]*?)<\/Link>/;
pageContent = pageContent.replace(ctaRegex, `<MagneticButton><Link href="/book" className="inline-flex items-center justify-center bg-tlg-signatureGold text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-colors">$1</Link></MagneticButton>`);

fs.writeFileSync('app/page.tsx', pageContent);
console.log('Successfully updated app/page.tsx with Reveal and MagneticButton');

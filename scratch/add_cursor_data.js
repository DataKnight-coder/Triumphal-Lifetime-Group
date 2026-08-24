const fs = require('fs');

let pageContent = fs.readFileSync('app/page.tsx', 'utf8');

const regex = /className="shrink-0 w-\[82vw\] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-\[24px\] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative"/g;

pageContent = pageContent.replace(regex, 'data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative"');

fs.writeFileSync('app/page.tsx', pageContent);
console.log('Added data-cursor to ecosystem cards');

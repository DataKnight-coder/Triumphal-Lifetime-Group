const fs = require('fs');

const files = [
  'app/about/partners/page.tsx',
  'app/impact/page.tsx',
  'app/insights/express-entry/page.tsx',
  'app/insights/tax-compliance/page.tsx',
  'app/insights/uae-golden-visa/page.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove imports
    content = content.replace(/import Header from "@\/components\/layout\/Header";\r?\n/g, '');
    content = content.replace(/import Footer from "@\/components\/layout\/Footer";\r?\n/g, '');
    
    // Remove actual components
    content = content.replace(/<Header \/>\r?\n/g, '');
    content = content.replace(/<Footer \/>\r?\n/g, '');
    
    fs.writeFileSync(file, content);
    console.log(`Cleaned up ${file}`);
  }
}

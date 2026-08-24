const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Look for title: "Something | Triumphal Lifetime Group"
      if (content.includes('| Triumphal Lifetime Group"')) {
        content = content.replace(/title:\s*"([^"]+)\s*\|\s*Triumphal Lifetime Group",/g, 'title: "$1",');
        fs.writeFileSync(fullPath, content);
        console.log(`Updated title in ${fullPath}`);
      }
    }
  }
}

processDir('app');
console.log('Finished updating SEO titles.');

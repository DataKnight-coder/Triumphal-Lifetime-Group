const fs = require('fs');
const path = require('path');

function replaceEmDashes(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceEmDashes(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('—')) {
        // Replace em dash with a standard hyphen and spaces
        content = content.replace(/—/g, ' - ');
        // Clean up double spaces if the em dash already had spaces around it
        content = content.replace(/  - /g, ' - ');
        content = content.replace(/ -  /g, ' - ');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceEmDashes('./app');
replaceEmDashes('./components');
console.log('Done replacing em dashes.');

const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const rootDir = process.cwd();

const colorMap = {
  'text-gray-300': 'text-gray-400',
  'text-gray-400': 'text-gray-600',
  'text-gray-500': 'text-gray-700',
  'text-gray-600': 'text-gray-800'
};

['app', 'components'].forEach(folder => {
  walkDir(path.join(rootDir, folder), (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Improve contrast of text colors
      content = content.replace(/text-gray-[3456]00/g, match => colorMap[match] || match);
      
      // Improve font weights
      content = content.replace(/font-light/g, 'font-normal');
      
      // Improve font sizes
      content = content.replace(/text-\[10px\]/g, 'text-[11px]');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
      }
    }
  });
});
console.log("Done");

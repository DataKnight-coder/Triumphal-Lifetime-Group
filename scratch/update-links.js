const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

function replaceInFile(filePath, search, replacement) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(search)) {
    const updated = content.replaceAll(search, replacement);
    fs.writeFileSync(filePath, updated);
    console.log(`Updated ${filePath}`);
  }
}

// 1. Context Aware Updates
const solutionsDir = path.join(rootDir, 'app', 'solutions');
const services = fs.readdirSync(solutionsDir);

services.forEach(service => {
  const pagePath = path.join(solutionsDir, service, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    replaceInFile(pagePath, 'href="/book"', `href="?book=true&service=${service}"`);
  }
});

// 2. Global Updates
const globalFiles = [
  'app/contact/page.tsx',
  'app/impact/page.tsx',
  'app/insights/express-entry-canada-2024/page.tsx',
  'app/page.tsx',
  'components/home/Hero.tsx',
  'components/layout/Footer.tsx',
  'components/layout/Header.tsx',
  'components/layout/MobileDock.tsx',
  'components/ui/CommandMenu.tsx',
];

globalFiles.forEach(file => {
  const p = path.join(rootDir, file);
  if (fs.existsSync(p)) {
    replaceInFile(p, 'href="/book"', 'href="?book=true"');
  }
});

// MobileDock specific fix
const mobileDockPath = path.join(rootDir, 'components/layout/MobileDock.tsx');
const mobileDockContent = fs.readFileSync(mobileDockPath, 'utf8');
if (mobileDockContent.includes('pathname === "/book"')) {
  fs.writeFileSync(mobileDockPath, mobileDockContent.replaceAll('pathname === "/book"', 'searchParams.get("book") === "true"'));
  console.log('Fixed MobileDock');
}

console.log("Done");

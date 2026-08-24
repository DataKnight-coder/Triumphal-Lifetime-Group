const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set mobile viewport
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // 1. Mobile Trust Indicators (below hero)
  console.log('Taking screenshot: mobile_trust.png');
  await page.evaluate(() => window.scrollBy(0, 700));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'mobile_trust.png' });

  // 2. Ecosystem Horizontal Swipe
  console.log('Taking screenshot: mobile_swipe.png');
  await page.evaluate(() => window.scrollBy(0, 1000));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'mobile_swipe.png' });

  // 3. Mobile Dock
  console.log('Taking screenshot: mobile_dock.png');
  await page.screenshot({ path: 'mobile_dock.png' });

  // 4. Mobile Bottom Sheet Menu
  console.log('Opening Bottom Sheet Menu...');
  await page.click('.lucide-menu'); // Click the Explore/Menu button in MobileDock
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'mobile_bottom_sheet.png' });

  await browser.close();
  console.log('Done!');
}

run().catch(console.error);

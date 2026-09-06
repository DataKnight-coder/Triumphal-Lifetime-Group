import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const preview = (process.env.AUDIT_BASE_URL || "https://deploy-preview-1--triumphal-lifetime-group.netlify.app").replace(/\/+$/, "");
const outputDirectory = process.env.AUDIT_OUTPUT_DIR || path.join(process.cwd(), ".audit-artifacts");
const saveScreenshots = process.env.AUDIT_SCREENSHOTS === "1";
const requestedConcurrency = Number.parseInt(process.env.AUDIT_CONCURRENCY || "2", 10);
const auditConcurrency = Number.isFinite(requestedConcurrency) && requestedConcurrency > 0
  ? requestedConcurrency
  : 2;

const routes = [
  "/", "/about", "/about/our-story", "/global-presence", "/leadership", "/companies",
  "/hr-business-consulting", "/global-education-advisory", "/global-mobility-visa-services",
  "/real-estate-advisory", "/it-solutions", "/digital-products-ecommerce", "/charity-foundation",
  "/careers", "/contact", "/insights", "/partners", "/privacy", "/terms", "/disclaimer",
  "/cookies", "/accessibility", "/refund-policy",
];

const redirects = [
  ["/solutions/hr-consulting", "/hr-business-consulting"],
  ["/companies/hr-business-consulting", "/hr-business-consulting"],
  ["/solutions/real-estate", "/real-estate-advisory"],
  ["/companies/real-estate", "/real-estate-advisory"],
  ["/solutions/education", "/global-education-advisory"],
  ["/companies/education-advisory", "/global-education-advisory"],
  ["/solutions/global-mobility", "/global-mobility-visa-services"],
  ["/companies/global-visa-immigration", "/global-mobility-visa-services"],
  ["/solutions/digital-learning", "/digital-products-ecommerce"],
  ["/companies/digital-products-learning", "/digital-products-ecommerce"],
  ["/solutions/technology", "/it-solutions"],
  ["/companies/information-technology", "/it-solutions"],
  ["/foundation", "/charity-foundation"],
  ["/impact", "/charity-foundation"],
  ["/about/leadership", "/leadership"],
  ["/about/global-presence", "/global-presence"],
  ["/partnerships", "/partners"],
  ["/about/partners", "/partners"],
  ["/cookie-policy", "/cookies"],
];

const viewports = [
  { name: "desktop-1440x900", width: 1440, height: 900 },
  { name: "desktop-1280x800", width: 1280, height: 800 },
  { name: "tablet-1024x768", width: 1024, height: 768 },
  { name: "tablet-768x1024", width: 768, height: 1024 },
  { name: "mobile-430x932", width: 430, height: 932 },
  { name: "mobile-390x844", width: 390, height: 844 },
  { name: "mobile-360x800", width: 360, height: 800 },
];

const failures = [];
const warnings = [];
const checkedLinks = new Set();
const titles = new Map();

function fail(message) { failures.push(message); }
function warn(message) { warnings.push(message); }
function cleanPathname(url) { return new URL(url, preview).pathname.replace(/\/$/, "") || "/"; }
function routeFile(route) { return route === "/" ? "home" : route.slice(1).replaceAll("/", "--"); }

async function checkResponse(url, label) {
  if (checkedLinks.has(url)) return;
  checkedLinks.add(url);
  try {
    const response = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15_000) });
    if (!response.ok) fail(`${label}: HTTP ${response.status} (${url})`);
  } catch (error) {
    fail(`${label}: ${error instanceof Error ? error.message : String(error)} (${url})`);
  }
}

for (const [source, destination] of redirects) {
  const response = await fetch(`${preview}${source}`, { redirect: "manual", signal: AbortSignal.timeout(15_000) });
  const location = response.headers.get("location");
  if (![301, 302, 307, 308].includes(response.status)) {
    fail(`Redirect ${source}: expected redirect, received ${response.status}`);
  } else if (!location || cleanPathname(location) !== destination) {
    fail(`Redirect ${source}: expected ${destination}, received ${location || "no Location header"}`);
  }
}

await checkResponse(`${preview}/robots.txt`, "robots.txt");
await checkResponse(`${preview}/sitemap.xml`, "sitemap.xml");
const missingResponse = await fetch(`${preview}/this-route-should-not-exist-production-audit`, { redirect: "manual", signal: AbortSignal.timeout(15_000) });
if (missingResponse.status !== 404) fail(`404 route: expected 404, received ${missingResponse.status}`);

const installedBrowser = [
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
].find((candidate) => candidate && existsSync(candidate));
const browser = await chromium.launch({ headless: true, executablePath: installedBrowser || undefined });
try {
  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: "reduce" });
    for (let routeIndex = 0; routeIndex < routes.length; routeIndex += auditConcurrency) {
      await Promise.all(routes.slice(routeIndex, routeIndex + auditConcurrency).map(async (route) => {
      console.log(`[${viewport.name}] ${route}`);
      const page = await context.newPage();
      const consoleErrors = [];
      const failedRequests = [];
      const httpErrors = [];
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("response", (resourceResponse) => {
        const resourceUrl = resourceResponse.url();
        if (
          resourceResponse.status() >= 400
          && resourceUrl.startsWith(preview)
          && !resourceUrl.includes("?_rsc=")
          && !resourceUrl.includes("&_rsc=")
        ) {
          httpErrors.push(`${resourceResponse.status()} ${resourceUrl}`);
        }
      });
      page.on("requestfailed", (request) => {
        const reason = request.failure()?.errorText || "failed";
        const requestUrl = request.url();
        const isExpectedPreviewNoise = requestUrl.startsWith("https://app.netlify.com/")
          || requestUrl.includes("?_rsc=")
          || requestUrl.includes("&_rsc=");
        if (reason !== "net::ERR_ABORTED" && !isExpectedPreviewNoise) {
          failedRequests.push(`${request.method()} ${requestUrl}: ${reason}`);
        }
      });
      let response;
      try {
        response = await page.goto(`${preview}${route}`, { waitUntil: "domcontentloaded", timeout: 30_000 });
        if (viewport.width < 768 && route !== "/contact") {
          await page.waitForSelector("#mobile-menu-trigger", { state: "visible", timeout: 4_000 }).catch(() => undefined);
        }
        await page.waitForTimeout(800);
        if (saveScreenshots) {
          const viewportDirectory = path.join(outputDirectory, viewport.name);
          await mkdir(viewportDirectory, { recursive: true });
          try {
            await page.screenshot({ path: path.join(viewportDirectory, `${routeFile(route)}.png`), fullPage: false, timeout: 15_000 });
          } catch (error) {
            warn(`${viewport.name} ${route}: screenshot capture failed (${error instanceof Error ? error.message : String(error)})`);
          }
        }
        await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
        await page.waitForTimeout(500);
      } catch (error) {
        fail(`${viewport.name} ${route}: navigation failed (${error instanceof Error ? error.message : String(error)})`);
        await page.close();
        return;
      }

      if (!response?.ok()) fail(`${viewport.name} ${route}: HTTP ${response?.status() ?? "unknown"}`);
      const result = await page.evaluate(() => {
        const isVisiblyRendered = (element) => {
          if (!element || element.getBoundingClientRect().height === 0 || element.getBoundingClientRect().width === 0) return false;
          for (let current = element; current; current = current.parentElement) {
            const style = getComputedStyle(current);
            if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
          }
          return true;
        };
        const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
        const primaryHeading = document.querySelector("h1");
        const images = Array.from(document.images).map((image) => ({ src: image.currentSrc || image.src, alt: image.getAttribute("alt"), loaded: image.complete && image.naturalWidth > 0 }));
        const links = Array.from(document.querySelectorAll("a[href]")).map((anchor) => ({
          href: anchor.getAttribute("href") || "",
          target: anchor.getAttribute("target") || "",
          rel: anchor.getAttribute("rel") || "",
        }));
        const desktopNavigation = document.querySelector('nav[aria-label="Primary navigation"]');
        const desktopNavigationVisible = desktopNavigation ? getComputedStyle(desktopNavigation).display !== "none" : false;
        const mobileMenuButton = document.getElementById("mobile-menu-trigger");
        const mobileMenuVisible = mobileMenuButton ? getComputedStyle(mobileMenuButton).display !== "none" : false;
        return {
          title: document.title.trim(),
          description: document.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() || "",
          canonical,
          h1Count: document.querySelectorAll("h1").length,
          h1Visible: isVisiblyRendered(primaryHeading),
          header: Boolean(document.querySelector("header")),
          footer: Boolean(document.querySelector("footer")),
          overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
          images,
          links,
          desktopNavigationVisible,
          mobileMenuVisible,
        };
      });

      if (!result.title) fail(`${viewport.name} ${route}: missing title`);
      if (!result.description) fail(`${viewport.name} ${route}: missing meta description`);
      if (!result.canonical.startsWith("https://triumphallifetimegroup.com")) fail(`${viewport.name} ${route}: invalid canonical ${result.canonical || "(missing)"}`);
      if (result.h1Count !== 1) fail(`${viewport.name} ${route}: expected one H1, found ${result.h1Count}`);
      if (!result.h1Visible) fail(`${viewport.name} ${route}: primary heading is not visibly rendered`);
      if (!result.header) fail(`${viewport.name} ${route}: header missing`);
      if (!result.footer) fail(`${viewport.name} ${route}: footer missing`);
      if (result.overflow > 1) fail(`${viewport.name} ${route}: horizontal overflow ${result.overflow}px`);
      for (const image of result.images) {
        if (!image.loaded) await checkResponse(image.src, `Image from ${route}`);
        if (image.alt === null) fail(`${viewport.name} ${route}: image missing alt attribute ${image.src}`);
      }
      if (viewport.width >= 1280 && !result.desktopNavigationVisible) fail(`${viewport.name} ${route}: desktop navigation is not visible`);
      if (viewport.width < 768 && !result.mobileMenuVisible && route !== "/contact") fail(`${viewport.name} ${route}: mobile navigation trigger is not visible`);
      for (const message of consoleErrors) {
        const coveredByResourceChecks = message.startsWith("Failed to load resource:");
        const isExpectedPrefetchFallback = message.includes("Failed to fetch RSC payload");
        if (!coveredByResourceChecks && !isExpectedPrefetchFallback) {
          fail(`${viewport.name} ${route}: console.error ${message}`);
        }
      }
      for (const message of httpErrors) fail(`${viewport.name} ${route}: resource response ${message}`);
      for (const message of failedRequests) fail(`${viewport.name} ${route}: request failed ${message}`);

      const titleRoutes = titles.get(result.title) || new Set();
      titleRoutes.add(route);
      titles.set(result.title, titleRoutes);

      if (viewport === viewports[0]) {
        for (const link of result.links) {
          if (!link.href || link.href === "#") fail(`${route}: empty link target`);
          if (link.target === "_blank" && !link.rel.split(/\s+/).includes("noopener")) fail(`${route}: external link missing noopener (${link.href})`);
          if (link.href.startsWith("mailto:")) {
            if (!/^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/i.test(link.href)) fail(`${route}: invalid mailto link (${link.href})`);
          } else if (link.href.startsWith("tel:")) {
            if (!/^tel:\+?[\d]+$/.test(link.href)) fail(`${route}: invalid tel link (${link.href})`);
          } else if (link.href.startsWith("/") && !link.href.startsWith("//")) {
            await checkResponse(new URL(link.href, preview).href, `Internal link from ${route}`);
          }
        }
      }

      await page.close();
      }));
    }
    await context.close();
  }
} finally {
  await browser.close();
}

for (const [title, titleRoutes] of titles) {
  if (titleRoutes.size > 1) warn(`Duplicate title across routes: "${title}" (${[...titleRoutes].join(", ")})`);
}

console.log(`Production preview audit: ${routes.length} routes × ${viewports.length} viewports`);
console.log(`Redirects: ${redirects.length}; unique internal resources checked: ${checkedLinks.size}`);
console.log(`Screenshots: ${saveScreenshots ? outputDirectory : "disabled (set AUDIT_SCREENSHOTS=1)"}`);
if (warnings.length) console.warn(`Warnings (${warnings.length}):\n- ${warnings.join("\n- ")}`);
if (failures.length) {
  console.error(`Failures (${failures.length}):\n- ${failures.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log("Production preview audit passed.");
}

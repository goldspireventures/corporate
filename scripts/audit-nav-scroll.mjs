/**
 * Scroll nav logo on every route — capture frames at multiple scroll positions.
 * Usage: node scripts/audit-nav-scroll.mjs [baseUrl]
 */
import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", ".audit", "nav-scroll");
const base = process.argv[2] ?? "http://127.0.0.1:4177";

const routes = ["/", "/philosophy", "/portfolio", "/vision", "/partner", "/companies/livia"];

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const route of routes) {
  const url = `${base}${route}`;
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(600);

  for (const y of [0, 400, 900]) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(350);
    const slug = route.replace(/\//g, "-") || "home";
    await page.screenshot({
      path: path.join(outDir, `${slug}-y${y}.png`),
      clip: { x: 0, y: 0, width: 1280, height: 80 },
    });
  }
}

await browser.close();
console.log("Wrote nav clips to", outDir);

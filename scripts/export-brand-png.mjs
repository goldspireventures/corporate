/**
 * Renders official Goldspire Ventures logo PNGs from vector HTML.
 * Run: npm run brand:export
 */
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const brandDir = path.join(root, "public", "images", "brand");
const htmlPath = path.join(__dirname, "render-brand-assets.html");

fs.mkdirSync(brandDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 3 });

await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, { waitUntil: "networkidle" });
await page.waitForTimeout(1200);

const exports = [
  { selector: "#logo-navy", out: "goldspire-ventures-logo.png", omitBackground: false },
  { selector: "#logo-transparent", out: "goldspire-ventures-logo-transparent.png", omitBackground: true },
  { selector: "#mark-only", out: "goldspire-mark.png", omitBackground: true },
];

for (const item of exports) {
  const outPath = path.join(brandDir, item.out);
  await page.locator(item.selector).screenshot({ path: outPath, omitBackground: item.omitBackground });
  console.log("Wrote", outPath);
}

await browser.close();

/**
 * Explore live portfolio URLs and capture candidate screenshots.
 */
import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", ".audit", "portfolio-explore");
fs.mkdirSync(outDir, { recursive: true });

const targets = [
  {
    slug: "livia",
    candidates: [
      { label: "home", url: "https://livia-hq.com" },
      { label: "marketing", url: "https://livia-hq.com/" },
    ],
  },
  {
    slug: "veil",
    candidates: [
      { label: "landing", url: "https://join-veil.goldspireventures.com" },
    ],
  },
  {
    slug: "studio",
    candidates: [
      { label: "home", url: "https://goldspire.dev" },
      { label: "www", url: "https://www.goldspire.dev" },
    ],
  },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const target of targets) {
  for (const c of target.candidates) {
    try {
      console.log(`\n=== ${target.slug} / ${c.label}: ${c.url} ===`);
      const res = await page.goto(c.url, { waitUntil: "networkidle", timeout: 45000 });
      await page.waitForTimeout(2000);
      const title = await page.title();
      const status = res?.status();
      const h1 = await page.locator("h1").first().textContent().catch(() => null);
      console.log("status:", status, "title:", title);
      console.log("h1:", h1?.trim().slice(0, 100));
      await page.screenshot({
        path: path.join(outDir, `${target.slug}-${c.label}-1440.png`),
        fullPage: false,
      });
    } catch (e) {
      console.log("FAILED:", e.message);
    }
  }
}

await browser.close();
console.log("\nWrote explore shots to", outDir);

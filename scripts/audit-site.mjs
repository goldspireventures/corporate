/**
 * Capture screenshots + DOM metrics for logo/layout debugging.
 * Usage: node scripts/audit-site.mjs [url] [extraPath ...]
 */
import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", ".audit");
const baseUrl = process.argv[2] ?? "https://goldspireventures.com";
const extraPaths = process.argv.slice(3);

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const slug = new URL(baseUrl).hostname.replace(/[.:]/g, "-");

async function collectMetrics() {
  return page.evaluate(() => {
    const imgs = [...document.querySelectorAll("img")].map((img) => {
      const r = img.getBoundingClientRect();
      const cs = getComputedStyle(img);
      return {
        src: img.getAttribute("src"),
        alt: img.alt,
        rect: { x: r.x, y: r.y, w: r.width, h: r.height },
        computed: { width: cs.width, height: cs.height, opacity: cs.opacity },
      };
    });

    const watermark = document.querySelector(".app-shell");
    const wcs = watermark ? getComputedStyle(watermark, "::before") : null;
    const shellRect = watermark?.getBoundingClientRect();

    return {
      title: document.title,
      h1: document.querySelector("h1")?.textContent?.trim().slice(0, 80) ?? null,
      watermark: watermark
        ? {
            shell: !!watermark,
            beforeOpacity: wcs?.opacity ?? null,
            beforeBackground: wcs?.backgroundImage?.slice(0, 80) ?? null,
          }
        : null,
      imgs,
    };
  });
}

async function auditPage(pathname, label) {
  const target = new URL(pathname, baseUrl).toString();
  console.log("\nLoading", target);
  await page.goto(target, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);

  const prefix = `${slug}-${label}`;
  await page.screenshot({ path: path.join(outDir, `${prefix}-1440.png`), fullPage: false });
  await page.screenshot({ path: path.join(outDir, `${prefix}-full.png`), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, `${prefix}-390.png`), fullPage: false });
  await page.setViewportSize({ width: 1440, height: 900 });

  const metrics = await collectMetrics();
  const reportPath = path.join(outDir, `${prefix}-report.json`);
  fs.writeFileSync(reportPath, JSON.stringify(metrics, null, 2));
  console.log("Watermark:", metrics.watermark);
  console.log("Portfolio previews:", metrics.imgs.filter((i) => i.src?.includes("/portfolio/")));
  return metrics;
}

await auditPage("/", "home");
for (const p of extraPaths) {
  const label = p.replace(/^\//, "").replace(/\//g, "-") || "page";
  await auditPage(p.startsWith("/") ? p : `/${p}`, label);
}

console.log("\nWrote screenshots + reports to", outDir);
await browser.close();

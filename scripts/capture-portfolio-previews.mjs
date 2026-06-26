/**
 * Capture curated portfolio preview screenshots (16:9, hero-focused).
 * Usage: node scripts/capture-portfolio-previews.mjs [studioUrl]
 */
import { chromium } from "playwright";
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "portfolio");
const auditDir = path.join(__dirname, "..", ".audit", "portfolio-captures");
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(auditDir, { recursive: true });

const studioUrl = process.argv[2] ?? "http://127.0.0.1:4010";

/** Best public-facing page per product — hero / value prop, not auth or admin. */
const CAPTURES = [
  {
    slug: "livia",
    file: "livia-preview.png",
    url: "https://livia-hq.com",
    rationale: "Marketing homepage — orbit hero + appointment-business positioning",
    prepare: async (page) => {
      await page.waitForSelector("h1", { timeout: 20000 });
      await page.waitForTimeout(1500);
    },
    clip: { x: 0, y: 0, width: 1440, height: 810 },
  },
  {
    slug: "veil",
    file: "veil-preview.png",
    url: "https://join-veil.goldspireventures.com",
    rationale: "Join landing — core security value prop + regulated teams section",
    prepare: async (page) => {
      await page.waitForSelector("h1", { timeout: 20000 });
      await page.waitForTimeout(1200);
    },
    clip: { x: 0, y: 0, width: 1440, height: 810 },
  },
  {
    slug: "studio",
    file: "studio-preview.png",
    url: studioUrl,
    rationale: "Studio marketing homepage — fixed-scope product delivery positioning",
    prepare: async (page) => {
      await page.waitForSelector("h1", { timeout: 30000 });
      await page.waitForTimeout(1500);
    },
    clip: { x: 0, y: 0, width: 1440, height: 810 },
    optional: true,
  },
];

async function exportPreview(buffer, fileName) {
  const outPath = path.join(outDir, fileName);
  await sharp(buffer)
    .resize(1280, 720, { fit: "cover", position: "top" })
    .png({ compressionLevel: 9, quality: 82 })
    .toFile(outPath);
  return outPath;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const report = [];

for (const cap of CAPTURES) {
  console.log(`\n→ ${cap.slug}: ${cap.url}`);
  console.log(`  ${cap.rationale}`);
  try {
    const res = await page.goto(cap.url, { waitUntil: "networkidle", timeout: 60000 });
    await cap.prepare(page);
    const raw = await page.screenshot({ type: "png", clip: cap.clip });
    const auditPath = path.join(auditDir, `${cap.slug}-raw.png`);
    fs.writeFileSync(auditPath, raw);
    const outPath = await exportPreview(raw, cap.file);
    report.push({ slug: cap.slug, ok: true, status: res?.status(), outPath, auditPath });
    console.log("  ✓ saved", outPath);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    report.push({ slug: cap.slug, ok: false, error: message, optional: cap.optional });
    if (cap.optional) {
      console.log("  ⚠ skipped (optional):", message.split("\n")[0]);
    } else {
      console.error("  ✗ failed:", message);
    }
  }
}

await browser.close();
fs.writeFileSync(path.join(auditDir, "report.json"), JSON.stringify(report, null, 2));
console.log("\nReport:", path.join(auditDir, "report.json"));

const requiredFailed = report.filter((r) => !r.ok && !r.optional);
if (requiredFailed.length) process.exit(1);

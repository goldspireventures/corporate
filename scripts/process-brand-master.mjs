/**
 * Process official logo master PNG into site brand assets.
 * Usage: node scripts/process-brand-master.mjs [path-to-master.png]
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const brandDir = path.join(__dirname, "..", "public", "images", "brand");
const defaultMaster = path.resolve(
  __dirname,
  "../../../.cursor/projects/c-Users-eamon-Personal-Projects/assets/c__Users_eamon_AppData_Roaming_Cursor_User_workspaceStorage_df978466cbe79a587353eb7f05871824_images_ChatGPT_Image_Jun_26__2026__11_36_40_AM-a6d9a885-addb-4c67-bd4a-d271b1286fae.png",
);

const masterPath = process.argv[2] ? path.resolve(process.argv[2]) : defaultMaster;

if (!fs.existsSync(masterPath)) {
  console.error("Master logo not found:", masterPath);
  process.exit(1);
}

fs.mkdirSync(brandDir, { recursive: true });
fs.copyFileSync(masterPath, path.join(brandDir, "goldspire-ventures-logo-source.png"));

const master = sharp(masterPath);
const { width, height } = await master.metadata();

// Full lockup on black — canonical master for decks / touch icon
await master.clone().png().toFile(path.join(brandDir, "goldspire-ventures-logo.png"));

// Knock out near-black background for site overlays (nav on navy)
const { data, info } = await master
  .clone()
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r < 42 && g < 42 && b < 48) {
    data[i + 3] = 0;
  } else if (r < 55 && g < 55 && b < 60) {
    // Soften edges on near-black anti-aliasing
    data[i + 3] = Math.min(data[i + 3], Math.max(0, (r + g + b) - 60));
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(path.join(brandDir, "goldspire-ventures-logo-transparent.png"));

// Spire mark — crop top ~52% centered
const markHeight = Math.round(height * 0.52);
const markWidth = Math.round(width * 0.42);
const left = Math.round((width - markWidth) / 2);
await master
  .clone()
  .extract({ left, top: Math.round(height * 0.06), width: markWidth, height: markHeight })
  .png()
  .toFile(path.join(brandDir, "goldspire-mark.png"));

// Favicon sizes
await sharp(path.join(brandDir, "goldspire-mark.png"))
  .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(path.join(brandDir, "favicon-32.png"));

console.log("Processed official master:", masterPath);
console.log("Wrote brand assets to", brandDir);

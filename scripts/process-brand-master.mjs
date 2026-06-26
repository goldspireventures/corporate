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
const NAVY = { r: 5, g: 8, b: 22 }; // #050816 — site background

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

await master.clone().png().toFile(path.join(brandDir, "goldspire-ventures-logo.png"));

function knockOutBlack(data) {
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r < 60 && g < 60 && b < 70) {
      data[i + 3] = 0;
    } else if (r < 80 && g < 80 && b < 90) {
      data[i + 3] = Math.min(data[i + 3], Math.max(0, r + g + b - 90));
    }
  }
}

const { data, info } = await master.clone().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
knockOutBlack(data);

const transparentPath = path.join(brandDir, "goldspire-ventures-logo-transparent.png");
await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim({ threshold: 30 })
  .png()
  .toFile(transparentPath);

await sharp(transparentPath)
  .flatten({ background: NAVY })
  .png()
  .toFile(path.join(brandDir, "goldspire-ventures-logo-site.png"));

const markHeight = Math.round(height * 0.52);
const markWidth = Math.round(width * 0.42);
const left = Math.round((width - markWidth) / 2);
const markRaw = await master
  .clone()
  .extract({ left, top: Math.round(height * 0.06), width: markWidth, height: markHeight })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

knockOutBlack(markRaw.data);

const markPath = path.join(brandDir, "goldspire-mark.png");
await sharp(markRaw.data, {
  raw: { width: markRaw.info.width, height: markRaw.info.height, channels: 4 },
})
  .trim({ threshold: 30 })
  .png()
  .toFile(markPath);

const markTransparentPath = path.join(brandDir, "goldspire-mark-transparent.png");
await sharp(markRaw.data, {
  raw: { width: markRaw.info.width, height: markRaw.info.height, channels: 4 },
})
  .trim({ threshold: 30 })
  .png()
  .toFile(markTransparentPath);

await sharp(markPath)
  .resize(32, 32, { fit: "contain", background: { ...NAVY, alpha: 1 } })
  .flatten({ background: NAVY })
  .png()
  .toFile(path.join(brandDir, "favicon-32.png"));

const siteMeta = await sharp(path.join(brandDir, "goldspire-ventures-logo-site.png")).metadata();
const markMeta = await sharp(markPath).metadata();

const manifest = {
  logoSite: { width: siteMeta.width ?? 0, height: siteMeta.height ?? 0 },
  logoMark: { width: markMeta.width ?? 0, height: markMeta.height ?? 0 },
  logoMarkTransparent: { width: markMeta.width ?? 0, height: markMeta.height ?? 0 },
};

fs.writeFileSync(path.join(brandDir, "logo-dimensions.json"), JSON.stringify(manifest, null, 2));

console.log("Processed official master:", masterPath);
console.log("Logo dimensions:", manifest);
console.log("Wrote brand assets to", brandDir);

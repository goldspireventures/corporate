/**
 * Branded 16:9 UI mock previews for in-development portfolio companies.
 * Usage: node scripts/generate-building-previews.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "portfolio");
fs.mkdirSync(outDir, { recursive: true });

const BUILDING = [
  { slug: "mulah", name: "Mulah", line: "Subscriptions and spend", accent: "#10b981", accent2: "#0d9488" },
  { slug: "simi", name: "S.I.M.I.", line: "Assistant layer", accent: "#8b5cf6", accent2: "#6d28d9" },
  { slug: "triforge", name: "Triforge", line: "Mesh · proof · continuity", accent: "#6366f1", accent2: "#475569" },
  { slug: "valrolly", name: "Valrolly", line: "Events & experiences", accent: "#f43f5e", accent2: "#c026d3" },
  { slug: "trustbase", name: "TrustBase", line: "Trust infrastructure", accent: "#f59e0b", accent2: "#ea580c" },
  { slug: "move-ezflow", name: "MOVE", line: "Mobility · EZFlow", accent: "#06b6d4", accent2: "#334155" },
  { slug: "japa", name: "Japa", line: "Relocation pathways", accent: "#0ea5e9", accent2: "#1d4ed8" },
];

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function svg({ name, line, accent, accent2 }) {
  const id = `g-${name.replace(/\W/g, "")}`;
  const safeName = esc(name);
  const safeLine = esc(line);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" fill="none">
  <rect width="1280" height="720" fill="#0a0c12"/>
  <rect x="48" y="48" width="1184" height="624" rx="16" fill="#12151c" stroke="rgba(212,175,55,0.18)" stroke-width="1"/>
  <rect x="48" y="48" width="1184" height="44" rx="16" fill="#0d1018"/>
  <circle cx="76" cy="70" r="6" fill="#E4574E" opacity="0.85"/>
  <circle cx="98" cy="70" r="6" fill="#F4B740" opacity="0.85"/>
  <circle cx="120" cy="70" r="6" fill="#3DBE76" opacity="0.85"/>
  <rect x="420" y="60" width="440" height="20" rx="6" fill="#1e2430"/>
  <rect x="96" y="128" width="220" height="496" rx="12" fill="#0f1219"/>
  <rect x="116" y="156" width="72" height="10" rx="3" fill="${accent}" opacity="0.95"/>
  <rect x="116" y="180" width="120" height="8" rx="3" fill="#2a3140"/>
  <rect x="116" y="198" width="100" height="8" rx="3" fill="#2a3140"/>
  <rect x="116" y="216" width="110" height="8" rx="3" fill="#2a3140"/>
  <rect x="348" y="128" width="860" height="220" rx="12" fill="url(#${id})"/>
  <text x="380" y="210" fill="#f5f1e6" font-family="system-ui,Segoe UI,sans-serif" font-size="42" font-weight="600">${safeName}</text>
  <text x="380" y="258" fill="#f5f1e6" opacity="0.55" font-family="system-ui,Segoe UI,sans-serif" font-size="22">${safeLine}</text>
  <rect x="348" y="372" width="280" height="252" rx="12" fill="#0f1219"/>
  <rect x="372" y="400" width="100" height="10" rx="3" fill="${accent}"/>
  <rect x="372" y="424" width="200" height="8" rx="3" fill="#2a3140"/>
  <rect x="372" y="442" width="180" height="8" rx="3" fill="#2a3140"/>
  <rect x="652" y="372" width="280" height="252" rx="12" fill="#0f1219"/>
  <rect x="676" y="400" width="120" height="10" rx="3" fill="${accent}"/>
  <rect x="676" y="424" width="220" height="8" rx="3" fill="#2a3140"/>
  <rect x="948" y="372" width="260" height="252" rx="12" fill="#0f1219"/>
  <rect x="972" y="400" width="90" height="10" rx="3" fill="${accent}"/>
  <rect x="972" y="424" width="190" height="8" rx="3" fill="#2a3140"/>
  <rect x="380" y="290" width="140" height="36" rx="18" fill="${accent}" opacity="0.25" stroke="${accent}" stroke-width="1"/>
  <text x="404" y="314" fill="${accent}" font-family="system-ui,sans-serif" font-size="14" font-weight="600">In development</text>
  <defs>
    <linearGradient id="${id}" x1="348" y1="128" x2="1208" y2="348" gradientUnits="userSpaceOnUse">
      <stop stop-color="${accent}" stop-opacity="0.32"/>
      <stop offset="1" stop-color="${accent2}" stop-opacity="0.08"/>
    </linearGradient>
  </defs>
</svg>`;
}

for (const item of BUILDING) {
  const file = `${item.slug}-preview.png`;
  const outPath = path.join(outDir, file);
  const buf = Buffer.from(svg(item));
  await sharp(buf).resize(1280, 720).png({ compressionLevel: 9 }).toFile(outPath);
  console.log("✓", file);
}

import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
if (!fs.existsSync(dist)) throw new Error("Run pnpm build first.");
const origin = new URL(
  JSON.parse(fs.readFileSync(path.join(dist, "content.json"))).site.url,
);
const files = fs
  .readdirSync(dist, { recursive: true })
  .filter((file) => file.endsWith(".html"));
const failures = [];
let checked = 0;
const htmlCache = new Map();
const read = (file) => {
  if (!htmlCache.has(file)) htmlCache.set(file, fs.readFileSync(file, "utf8"));
  return htmlCache.get(file);
};
const decode = (value) =>
  value.replaceAll("&amp;", "&").replaceAll("&#x26;", "&");

for (const file of files) {
  const absolute = path.join(dist, file);
  const html = read(absolute);
  const pagePath =
    "/" + file.replaceAll(path.sep, "/").replace(/index\.html$/, "");
  const pageUrl = new URL(pagePath, origin);
  for (const match of html.matchAll(/\b(?:href|src|poster)="([^"]+)"/g)) {
    const raw = decode(match[1]);
    if (/^(?:data:|mailto:|tel:|javascript:)/i.test(raw)) continue;
    const url = new URL(raw, pageUrl);
    if (url.origin !== origin.origin) continue;
    const pathname = decodeURIComponent(url.pathname);
    const target = path.resolve(dist, "." + pathname);
    if (target !== dist && !target.startsWith(dist + path.sep)) {
      failures.push(`${pagePath}: path outside build: ${raw}`);
      continue;
    }
    const candidates = [target, path.join(target, "index.html")];
    const existing = candidates.find(
      (candidate) =>
        fs.existsSync(candidate) && fs.statSync(candidate).isFile(),
    );
    if (!existing) {
      failures.push(`${pagePath}: missing ${raw}`);
      continue;
    }
    checked++;
    if (url.hash && existing.endsWith(".html")) {
      const id = decodeURIComponent(url.hash.slice(1));
      const ids = [...read(existing).matchAll(/\bid="([^"]+)"/g)].map((value) =>
        decode(value[1]),
      );
      if (!ids.includes(id))
        failures.push(`${pagePath}: missing anchor ${raw}`);
    }
  }
}

if (failures.length) throw new Error(failures.join("\n"));
console.log(
  `Checked ${checked} internal links and assets across ${files.length} HTML pages; all destinations and anchors exist.`,
);

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const jsonLdMarker = '<script type="application/ld+json">';

function read(relativePath) {
  return fs
    .readFileSync(path.join(root, relativePath), "utf8")
    .replace(/\r\n/g, "\n");
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function jsonLdTypes(relativePath) {
  const html = read(relativePath);
  const start = html.indexOf(jsonLdMarker);
  const end = html.indexOf("</script>", start);

  assert(start >= 0 && end >= 0, `Missing JSON-LD in ${relativePath}`);
  const data = JSON.parse(html.slice(start + jsonLdMarker.length, end));
  assert(Array.isArray(data["@graph"]), `Missing @graph in ${relativePath}`);
  return data["@graph"].map((entity) => entity["@type"]);
}

function requireTypes(relativePath, expectedTypes) {
  const types = jsonLdTypes(relativePath);
  for (const type of expectedTypes) {
    assert(types.includes(type), `Missing ${type} in ${relativePath}`);
  }
}

assert(
  fs.existsSync(dist),
  "Run the production build before agent validation.",
);

requireTypes("dist/index.html", [
  "Person",
  "WebSite",
  "Organization",
  "SoftwareApplication",
]);
requireTypes("dist/about/index.html", ["Person", "ProfilePage"]);
requireTypes("dist/explore/index.html", ["Person", "WebSite"]);
requireTypes("dist/essays/a-run-without-technology/index.html", [
  "Person",
  "BlogPosting",
]);
requireTypes("dist/garden/interface-craft/index.html", ["Person", "Article"]);
requireTypes("dist/work/fresh-industries/index.html", ["Organization"]);
requireTypes("dist/work/inflatemate/index.html", ["SoftwareApplication"]);

const manifest = JSON.parse(read("dist/content.json"));
assert(manifest.schemaVersion === 1, "Unexpected content manifest version.");
for (const collection of [
  "essays",
  "principles",
  "garden",
  "commonplace",
  "projects",
]) {
  assert(
    Array.isArray(manifest.content[collection]),
    `Missing ${collection} from content manifest.`,
  );
}
const serializedManifest = JSON.stringify(manifest);
assert(
  !serializedManifest.includes("/notes/"),
  "Compatibility aliases leaked into content manifest.",
);
assert(
  !serializedManifest.includes("/Users/"),
  "A local filesystem path leaked into content manifest.",
);

const robots = read("dist/robots.txt");
for (const directive of [
  "User-agent: OAI-SearchBot\nAllow: /",
  "User-agent: ChatGPT-User\nAllow: /",
  "User-agent: GPTBot\nDisallow: /",
  "Sitemap: https://nikman.tech/sitemap-index.xml",
]) {
  assert(robots.includes(directive), `Missing robots directive: ${directive}`);
}

const llms = read("dist/llms.txt");
for (const requiredText of [
  "# Nik Manuel",
  "Fix Today. Build Tomorrow.",
  "https://nikman.tech/content.json",
  "https://nikman.tech/explore/",
  "https://nikman.tech/sitemap-index.xml",
]) {
  assert(
    llms.includes(requiredText),
    `Missing llms.txt content: ${requiredText}`,
  );
}

const sitemapFiles = fs
  .readdirSync(dist)
  .filter((file) => file.startsWith("sitemap-") && file.endsWith(".xml"));
const sitemap = sitemapFiles.map((file) => read(`dist/${file}`)).join("\n");
for (const excludedPath of ["/notes/", "/content.json", "/404.html"]) {
  assert(
    !sitemap.includes(excludedPath),
    `Noncanonical path found in sitemap: ${excludedPath}`,
  );
}

const notesAlias = read("dist/notes/index.html");
assert(
  notesAlias.includes('<meta name="robots" content="noindex, nofollow">'),
  "Compatibility aliases must remain noindex.",
);

console.log("Agent readiness validation passed.");

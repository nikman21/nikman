import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

// Run with a private JSON manifest outside the repository: [{source, name, width?}].
// This keeps machine-specific paths out of the public project.
const manifest = JSON.parse(await fs.readFile(process.argv[2], "utf8"));
const destination = path.resolve("public/images/projects");
await fs.mkdir(destination, { recursive: true });
for (const item of manifest) {
  if (!/^[a-z0-9-]+$/.test(item.name)) throw new Error("Invalid asset name");
  await sharp(item.source)
    .resize({ width: item.width ?? 1500, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(destination, `${item.name}.webp`));
}
console.log(`Prepared ${manifest.length} project images.`);

import path from "node:path";
import sharp from "sharp";

const assets = [
  ["public/assets/brand/landscapes/field-station-dawn-01.png", "image"],
  ["public/assets/brand/landscapes/satellite-grove-01.png", "image"],
  ["public/assets/brand/textures/navy-star-grain-01.png", "texture"],
  ["public/assets/brand/textures/cream-paper-dither-01.png", "texture"],
  ["public/assets/brand/diagrams/orbital-citrus-system-01.png", "overlay"],
  ["public/assets/brand/diagrams/topographic-registration-01.png", "overlay"],
  ["public/assets/brand/symbols/fresh-citrus-disc-01.png", "symbol"],
  ["public/assets/brand/symbols/fresh-citrus-slice-01.png", "symbol"],
  ["public/assets/brand/personal-symbols/personal-orange-01.png", "symbol"],
  ["public/assets/brand/personal-symbols/personal-king-01.png", "symbol"],
  ["public/assets/brand/personal-symbols/personal-fish-01.png", "symbol"],
  ["public/assets/brand/personal-symbols/personal-cross-01.png", "symbol"],
  ["public/assets/brand/personal-symbols/personal-compass-01.png", "symbol"],
  [
    "public/assets/brand/editorial-framing/calibration-corner-01.png",
    "overlay",
  ],
  ["public/assets/brand/editorial-framing/field-stamp-ring-01.png", "symbol"],
];

for (const [input, kind] of assets) {
  const output = input.replace(/\.png$/, ".webp");
  let pipeline = sharp(input);

  if (kind === "symbol") {
    pipeline = pipeline.trim().extend({
      top: 24,
      right: 24,
      bottom: 24,
      left: 24,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });
  }

  const options =
    kind === "image"
      ? { quality: 82, smartSubsample: true }
      : kind === "texture"
        ? { quality: 78, smartSubsample: true }
        : { quality: 90, alphaQuality: 100, smartSubsample: true };

  const info = await pipeline.webp(options).toFile(output);
  console.log(
    `${path.relative(process.cwd(), output)} ${info.width}x${info.height} ${info.size}b`,
  );
}

const plates = [
  [
    "public/assets/brand/landscapes/field-station-dawn-01.png",
    "public/assets/brand/landscapes/field-station-dawn-01-plate.webp",
  ],
  [
    "public/assets/brand/landscapes/satellite-grove-01.png",
    "public/assets/brand/landscapes/satellite-grove-01-plate.webp",
  ],
];

for (const [input, output] of plates) {
  const info = await sharp(input)
    .resize({ width: 768, withoutEnlargement: true })
    .webp({ quality: 78, smartSubsample: true })
    .toFile(output);

  console.log(
    `${path.relative(process.cwd(), output)} ${info.width}x${info.height} ${info.size}b`,
  );
}

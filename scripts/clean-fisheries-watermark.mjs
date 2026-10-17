import sharp from "sharp";
import fs from "fs";

const src = "public/slides/fisheries-boat.jpg";
const out = "public/slides/fisheries-boat-clean.jpg";

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = Buffer.from(data);

const coverW = Math.round(width * 0.40);
const coverH = Math.round(height * 0.24);
const left = width - coverW;
const fade = Math.round(coverW * 0.2);
const fadeBottom = Math.round(coverH * 0.35);

function idx(x, y) {
  return (y * width + x) * channels;
}

for (let y = 0; y < coverH; y++) {
  for (let x = left; x < width; x++) {
    // Mirror from clean sky to the left of the watermark
    const dx = x - left;
    const srcX = Math.max(0, left - 1 - (dx % Math.max(1, left - Math.round(width * 0.35))));
    // Prefer sampling from a band just left of watermark
    const sampleX = Math.min(
      left - 4,
      Math.max(Math.round(width * 0.5), left - 8 - (dx % 80)),
    );

    const si = idx(sampleX, y);
    const di = idx(x, y);

    // Soft blend near left and bottom edges of the patch
    const edgeL = Math.min(1, dx / fade);
    const edgeB = y > coverH - fadeBottom ? 1 - (y - (coverH - fadeBottom)) / fadeBottom : 1;
    const a = Math.max(0, Math.min(1, edgeL * edgeB));

    for (let c = 0; c < 3; c++) {
      pixels[di + c] = Math.round(
        pixels[di + c] * (1 - a) + pixels[si + c] * a,
      );
    }
  }
}

const tmp = `${out}.tmp.jpg`;
await sharp(pixels, { raw: { width, height, channels } })
  .jpeg({ quality: 93 })
  .toFile(tmp);

fs.renameSync(tmp, out);
console.log("wrote", out, { width, height, coverW, coverH });

const sharp = require("sharp");
const fs = require("fs");

(async () => {
  const W = 1600;
  const H = 900;
  const half = Math.floor(W / 2);
  const titleH = 56;

  const left = await sharp("public/slides/infra-port-bosaso.jpg")
    .resize(half, H, { fit: "cover", position: "centre" })
    .toBuffer();
  const right = await sharp("public/slides/infra-port-garacad.jpg")
    .resize(half, H, { fit: "cover", position: "centre" })
    .toBuffer();

  const titleSvg = (text, width) =>
    Buffer.from(`<svg width="${width}" height="${titleH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(0,0,0,0.55)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="50%" y="58%" text-anchor="middle" dominant-baseline="middle"
    font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700"
    fill="white">${text}</text>
</svg>`);

  const leftTitle = await sharp(titleSvg("Bosaso Port", half)).png().toBuffer();
  const rightTitle = await sharp(titleSvg("Garacad Port", half)).png().toBuffer();

  const tmp = "public/slides/infra-ports-new.jpg";
  await sharp({
    create: {
      width: W,
      height: H,
      channels: 3,
      background: { r: 10, g: 22, b: 40 },
    },
  })
    .composite([
      { input: left, left: 0, top: 0 },
      { input: right, left: half, top: 0 },
      { input: leftTitle, left: 0, top: 0 },
      { input: rightTitle, left: half, top: 0 },
    ])
    .jpeg({ quality: 92 })
    .toFile(tmp);

  fs.renameSync(tmp, "public/slides/infra-ports.jpg");
  const meta = await sharp("public/slides/infra-ports.jpg").metadata();
  console.log("done", meta.width, meta.height);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

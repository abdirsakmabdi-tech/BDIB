import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
});

const page = await browser.newPage();
const out = process.env.TEMP + "\\ndb-verify";

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await page.screenshot({
  path: out + "\\header-zoom.png",
  clip: { x: 0, y: 0, width: 480, height: 88 },
});

await browser.close();
console.log("done");

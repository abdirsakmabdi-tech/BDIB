import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
});

const page = await browser.newPage();
const out = process.env.TEMP + "\\ndb-verify";

await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await page.screenshot({ path: out + "\\final-desktop.png" });

await page.setViewport({ width: 390, height: 844 });
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: out + "\\final-mobile.png" });

await browser.close();
console.log("done");

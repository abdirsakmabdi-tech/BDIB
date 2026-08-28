import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
});

const page = await browser.newPage();
const out = process.env.TEMP + "\\ndb-verify";

await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

const section = await page.$("#who-we-are");
await section.scrollIntoViewIfNeeded();
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: out + "\\who-closed.png" });

await page.click('#who-we-are button');
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: out + "\\who-open.png" });

await page.setViewport({ width: 390, height: 844 });
await new Promise((r) => setTimeout(r, 400));
const s2 = await page.$("#who-we-are");
await s2.scrollIntoViewIfNeeded();
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: out + "\\who-mobile.png" });

await browser.close();
console.log("done");

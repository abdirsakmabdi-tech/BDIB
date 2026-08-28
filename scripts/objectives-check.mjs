import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
});

const page = await browser.newPage();
const out = process.env.TEMP + "\\ndb-verify";

await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await page.evaluate(() => document.getElementById("what-we-do")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: out + "\\objectives-top.png" });

const rot1 = await page.evaluate(() => {
  const el = document.querySelector("#what-we-do .will-change-transform");
  return el ? getComputedStyle(el).transform : null;
});

await page.evaluate(() => window.scrollBy(0, 500));
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: out + "\\objectives-scrolled.png" });

const rot2 = await page.evaluate(() => {
  const el = document.querySelector("#what-we-do .will-change-transform");
  return el ? getComputedStyle(el).transform : null;
});

await page.setViewport({ width: 390, height: 844 });
await page.evaluate(() => document.getElementById("what-we-do")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: out + "\\objectives-mobile.png" });

console.log(JSON.stringify({ rot1, rot2, changed: rot1 !== rot2 }));
await browser.close();

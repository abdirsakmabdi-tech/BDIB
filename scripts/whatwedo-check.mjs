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
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: out + "\\what-we-do-banner.png" });
await page.evaluate(() => document.getElementById("focus-areas")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: out + "\\what-we-do-grid.png" });

const labels = await page.evaluate(() =>
  Array.from(document.querySelectorAll("#focus-areas a p")).map((el) =>
    el.textContent?.replace(/\s+/g, " ").trim(),
  ),
);
console.log(JSON.stringify({ labels }));
await browser.close();

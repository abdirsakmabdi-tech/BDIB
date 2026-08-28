import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
});

const page = await browser.newPage();
const out = process.env.TEMP + "\\ndb-verify";

await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await page.evaluate(() => document.getElementById("who-we-are")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: out + "\\about-us.png" });

const titles = await page.evaluate(() =>
  Array.from(document.querySelectorAll("#who-we-are button span")).map((el) => el.textContent),
);
const aboutText = await page.evaluate(
  () => document.querySelector("#who-we-are .overflow-hidden")?.textContent?.slice(0, 80) ?? "",
);
console.log(JSON.stringify({ titles, aboutText }));
await browser.close();

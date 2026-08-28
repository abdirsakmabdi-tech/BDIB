import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
});

const page = await browser.newPage();
const out = process.env.TEMP + "\\ndb-verify";

await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await page.screenshot({ path: out + "\\slide-1.png" });

await page.click('button[aria-label="Next slide"]');
await new Promise((r) => setTimeout(r, 1300));
await page.screenshot({ path: out + "\\slide-2.png" });

await page.click('button[aria-label="Go to slide 4"]');
await new Promise((r) => setTimeout(r, 1300));
await page.screenshot({ path: out + "\\slide-4.png" });

// Auto-advance check: from slide 4 it should wrap to slide 1 within the interval
await new Promise((r) => setTimeout(r, 6500));
const activeDot = await page.evaluate(() => {
  const dots = Array.from(document.querySelectorAll('button[aria-label^="Go to slide"]'));
  return dots.findIndex((d) => d.getAttribute("aria-current") === "true") + 1;
});
console.log("active slide after auto-advance from 4:", activeDot);

await browser.close();
console.log("done");

import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
});

const page = await browser.newPage();
const out = process.env.TEMP + "\\ndb-verify";

await page.setViewport({ width: 1440, height: 900 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await page.screenshot({ path: out + "\\new-slide-1.png" });

await page.click('button[aria-label="Next slide"]');
await new Promise((r) => setTimeout(r, 1300));
await page.screenshot({ path: out + "\\new-slide-2.png" });

// Open the Apply for funding dropdown
await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll("header button"));
  const apply = buttons.find((b) => b.textContent.includes("Apply for funding"));
  apply.click();
});
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: out + "\\apply-dropdown.png", clip: { x: 700, y: 0, width: 740, height: 320 } });

await browser.close();
console.log("done");

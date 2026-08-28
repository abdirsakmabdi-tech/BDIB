import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
});

const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

const layout = await page.evaluate(() => {
  const rect = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: Math.round(r.x), w: Math.round(r.width), right: Math.round(r.right) };
  };
  return {
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    header: rect(document.querySelector("header")),
    logo: rect(document.querySelector("header a")),
    actions: rect(document.querySelector("header > div")),
    search: rect(document.querySelector('button[aria-label="Open search"]')),
    contact: rect(document.querySelector('a[href^="mailto"]')),
    burger: rect(document.querySelector('button[aria-controls="primary-nav"]')),
    burgerDisplay: getComputedStyle(
      document.querySelector('button[aria-controls="primary-nav"]'),
    ).display,
    heroH1: rect(document.querySelector("h1")),
  };
});
console.log(JSON.stringify(layout, null, 2));

// Interaction: open mobile menu
await page.click('button[aria-controls="primary-nav"]');
await new Promise((r) => setTimeout(r, 300));
const menuVisible = await page.evaluate(() => {
  const nav = document.getElementById("primary-nav");
  return getComputedStyle(nav).display !== "none";
});
console.log("mobile menu visible after click:", menuVisible);
await page.screenshot({ path: process.env.TEMP + "\\ndb-verify\\menu-open.png" });
await page.click('button[aria-controls="primary-nav"]');

// Interaction: open search overlay and search
await page.click('button[aria-label="Open search"]');
await page.waitForSelector("#site-search", { visible: true });
await page.type("#site-search", "annual");
await page.keyboard.press("Enter");
await new Promise((r) => setTimeout(r, 600));
const searchResults = await page.evaluate(() =>
  Array.from(document.querySelectorAll(".fixed ul a span:first-child")).map(
    (el) => el.textContent,
  ),
);
console.log("search results:", searchResults);
await page.screenshot({ path: process.env.TEMP + "\\ndb-verify\\search-open.png" });
await page.keyboard.press("Escape");
const overlayClosed = await page.evaluate(() => !document.querySelector("#site-search"));
console.log("overlay closed after Escape:", overlayClosed);

await browser.close();

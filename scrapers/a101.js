const puppeteer = require('puppeteer');

async function scrapeA101Campaigns() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = `https://www.a101.com.tr/kapida/haftanin-yildizlari`;

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });

  const allProducts = [];

  const products = await page.evaluate(() => {
    const items = [];
    const productElements = document.querySelectorAll('.grid .w-full .w-full .w-full .w-full');

    productElements.forEach(elem => {
      // const title = elem.querySelector('[class*="line-clamp-3"]')?.innerText.trim();
      const price = elem.querySelector('.line-through')?.innerText.trim();
      // const discountPrice = elem.querySelector('[class*="text-[#EA242A]"]')?.innerText.trim();
      items.push({ price, });
    });
    return items;
  });
  allProducts.push(...products);

  await browser.close();
  return products;
}

module.exports = { scrapeA101Campaigns };

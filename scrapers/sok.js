const puppeteer = require('puppeteer');

async function scrapeSokCampaigns() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const allProducts = [];
  let currentPage = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `https://www.sokmarket.com.tr/haftanin-firsatlari-tumu-market-sgrp-20201?page=${currentPage}`;
    console.log(`Sayfa ${currentPage} çekiliyor: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });

    // Sayfadaki ürünleri çek
    const products = await page.evaluate(() => {
      const items = [];
      document.querySelectorAll('.CProductCard-module_productCardWrapper__okAmT').forEach(elem => {
        const title = elem.querySelector('.CProductCard-module_title__u8bMW')?.innerText.trim();
        const price = elem.querySelector('.CPriceBox-module_price__bYk-c')?.innerText.trim();
        const discountPrice = elem.querySelector('.CPriceBox-module_discountedPrice__15Ffw')?.innerText.trim();
        items.push({ title, price, discountPrice });
      });
      return items;
    });

    if (products.length === 0) {
      hasMore = false; // bir sonraki sayfada ürün yoksa dur
    } else {
      allProducts.push(...products);
      currentPage++;
    }
  }

  await browser.close();
  return allProducts;
}

module.exports = {
  scrapeSokCampaigns
};
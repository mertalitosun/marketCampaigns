const puppeteer = require('puppeteer');

async function scrapeBimCampaigns() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const allProducts = [];
  
 
    const url = `https://www.bim.com.tr/?Bim_AktuelTarihKey=1391`;
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });

    // Sayfadaki ürünleri çek
    const products = await page.evaluate(() => {
      const items = [];
      document.querySelectorAll('.product').forEach(elem => {
        const title = elem.querySelector('.title')?.innerText.trim();
        const brand = elem.querySelector('.subTitle')?.innerText.trim();
        const price = elem.querySelector('.strikethrough .quantify')?.innerText.trim();
        const discountPriceTam= elem.querySelector('.triangle .quantify')?.innerText.trim();
        const discountPriceKusur = elem.querySelector('.kusurArea .number')?.innerText.trim();
        const discountPrice = discountPriceTam + discountPriceKusur
        items.push({ title,brand, price, discountPrice });
      });
      return items;
    });

    allProducts.push(...products);
  

  await browser.close();
  return allProducts;
}

module.exports = {
    scrapeBimCampaigns
};
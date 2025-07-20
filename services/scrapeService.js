const { scrapeA101Campaigns } = require('../scrapers/a101');
const { scrapeSokCampaigns } = require('../scrapers/sok');
const { scrapeBimCampaigns } = require('../scrapers/bim');

async function scrapeAllMarkets() {
  const a101Products = await scrapeA101Campaigns();
  const sokProducts = await scrapeSokCampaigns();
  const bimProducts = await scrapeBimCampaigns();
  return {
    a101: a101Products,
    sok: sokProducts,
    bim: bimProducts,
  };
}

const scrapeMarketByName = async (marketName) => {
  switch (marketName) {
    case "a101":
      const a101 =  await scrapeA101Campaigns()
      return {count: a101.length, data:{a101}};
    case "bim":
      const bim =  await scrapeBimCampaigns()
      return {count: bim.length, data:{bim}};
    case "sok":
      const sok =  await scrapeSokCampaigns()
      return {count: sok.length, data:{sok}};
    default:
      throw new Error("Geçersiz market adı")
  }
}
module.exports = { scrapeAllMarkets, scrapeMarketByName };

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
      return {a101: await scrapeA101Campaigns()};
    case "bim":
      return {bim: await scrapeBimCampaigns()};
    case "sok":
      return {sok: await scrapeSokCampaigns()};
    default:
      throw new Error("Geçersiz market adı")
  }
}
module.exports = { scrapeAllMarkets, scrapeMarketByName };

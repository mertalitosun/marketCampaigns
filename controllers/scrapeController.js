const { scrapeAllMarkets, scrapeMarketByName } = require('../services/scrapeService');

async function getAllMarketCampaigns(req, res) {
  try {
    const data = await scrapeAllMarkets();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Scraping sırasında hata oluştu.'});
  }
}

const getSingleMarketCampaigns = async (req,res) => {
  const market =  req.params.market;

   try{
    const data = await scrapeMarketByName(market);
    res.json(data);
   }catch(error){
    res.status(500).json({error: error.message});
   }
}
module.exports = { getAllMarketCampaigns, getSingleMarketCampaigns };

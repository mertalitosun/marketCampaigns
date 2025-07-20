const express = require('express');
const router = express.Router();
const { getAllMarketCampaigns, getSingleMarketCampaigns } = require('../controllers/scrapeController');

router.get('/campaigns', getAllMarketCampaigns);
router.get('/campaigns/:market', getSingleMarketCampaigns);


module.exports = router;

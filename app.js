const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
var cors = require('cors')

app.use(express.json());
app.use(cors())

const scrapeRoutes = require('./routes/scrapeRoutes');

app.use('/api/scrape', scrapeRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});

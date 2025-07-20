#  Market Kampanyaları API (Node.js + Express)

Bu proje, Türkiye'deki popüler marketlerin (şu an için BİM ve ŞOK) kampanyalarını web kazıyıcı (scraper) kullanarak çeker ve RESTful API olarak sunar.

##  Özellikler

- Şok ve BİM kampanyalarını çekme
- Her market için ayrı endpoint
- REST API kurallarına uygun yapı
- Express.js ile backend servis
- Puppeteer ile web scraping
- JSON formatında çıktı sağlar

##  Kullanılan Teknolojiler

- Node.js
- Express.js
- Puppeteer
- Nodemon (geliştirme sırasında)

##  Kurulum

Projeyi klonlayın:

```bash
    git clone https://github.com/kullaniciAdi/marketCampaigns.git
    cd marketCampaigns
```

Bağımlılıkları yükleyin:

```bash
    npm install
```

Projeyi çalıştır:

```bash
    npm start
```

##  API Endpointleri

### ŞOK Kampanyaları
```bash
   GET /api/scrape/campaigns/sok
```

### BİM Kampanyaları
```bash
   GET /api/scrape/campaigns/bim
```
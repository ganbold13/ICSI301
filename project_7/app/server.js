const express = require('express');
const next = require('next');
const raw = require('./../public/data.json');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/api/data/all', (req, res) => {
    // Return all data
    res.json(raw);
  });

  server.get('/api/data/regions', (req, res) => {
    const uniqueRegions = [...new Set(raw.map((item) => item.region_1))].filter(Boolean);
    res.json(uniqueRegions);
  });

  server.get('/api/data/varieties', (req, res) => {
    const uniqueVarieties = [...new Set(raw.map((item) => item.variety))].filter(Boolean);
    res.json(uniqueVarieties);
  });

  server.get('/api/data/countries', (req, res) => {
    const uniqueCountries = [...new Set(raw.map((item) => item.country))].filter(Boolean);
    res.json(uniqueCountries);
  });

  server.get('/api/data/search', (req, res) => {
    const { byRegion, byVariety, byName, byCountry, minPrice, maxPrice } = req.query;

    let filteredData = raw;

    if (byRegion) {
      filteredData = filteredData.filter((item) =>
        item.region_1 && item.region_1.toLowerCase() === byRegion.toLowerCase()
      );
    }

    if (byVariety) {
      filteredData = filteredData.filter((item) =>
        item.variety && item.variety.toLowerCase() === byVariety.toLowerCase()
      );
    }

    if (byName) {
      filteredData = filteredData.filter((item) =>
        item.title && item.title.toLowerCase().includes(byName.toLowerCase())
      );
    }

    if (byCountry) {
      filteredData = filteredData.filter((item) =>
        item.country && item.country.toLowerCase() === byCountry.toLowerCase()
      );
    }

    if (minPrice && maxPrice) {
      filteredData = filteredData.filter((item) =>
        item.price >= parseInt(minPrice) && item.price <= parseInt(maxPrice)
      );
    } else if (minPrice) {
      filteredData = filteredData.filter((item) =>
        item.price >= parseInt(minPrice)
      );
    } else if (maxPrice) {
      filteredData = filteredData.filter((item) =>
        item.price <= parseInt(maxPrice)
      );
    }

    res.json(filteredData);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});

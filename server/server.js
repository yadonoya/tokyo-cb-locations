const express = require('express');
const barsController = require('../controllers/barsController');


const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.use('/api/bars', barsController);

  return app;
};

module.exports = { setupServer };
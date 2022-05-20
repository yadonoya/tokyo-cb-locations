const knex = require('knex');
require('dotenv').config({
	path: "../.env",
  });
const config = require('../knexfile');

module.exports = knex(config);
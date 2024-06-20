// config.js
const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV, MONGO_URL, PORT } = process.env;

module.exports = {
  env: NODE_ENV,
  port: PORT,
  mongo_url: MONGO_URL,

};

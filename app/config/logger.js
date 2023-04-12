const pino = require('pino');

require('dotenv').config();

const log_level = process.env.LOG_LEVEL || 'info';
const fs = require('fs');

const logger = pino({
  level: log_level,
});

module.exports = logger;

const pino = require('pino');

require('dotenv').config();

const log_level = process.env.LOG_LEVEL || 'info';

const logger = pino({
  level: log_level,
});

module.exports = logger;

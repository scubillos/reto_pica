const Sequelize = require('sequelize');

require('dotenv').config();

// Conexión a base de datos
const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.USER_PWD, {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql'
});

module.exports = sequelize;
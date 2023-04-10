const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        length: 255
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: true
    }
});

module.exports = User;

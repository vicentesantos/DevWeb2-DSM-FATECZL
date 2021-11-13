const Sequelize = require('sequelize');
const sequelize = new Sequelize('desenvolvimento_web_2', 'root', 'Paramore1**', {dialect: 'mysql', host: 'localhost', port: 3306});

module.exports = {sequelize}
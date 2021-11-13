const Sequelize = require('sequelize');
const database = require('../../../Conexão BD/model/services/dborm');

const Cliente = database.sequelize.define('cliente', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade: {
        type: Sequelize.INTEGER
    },
    enderecoo: Sequelize.STRING
})

module.exports = Cliente;
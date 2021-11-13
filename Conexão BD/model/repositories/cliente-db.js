//cliente.js
const Cliente = require('./model/cliente');
const database = require('../services/dborm');


const inserirCliente = await Cliente.create({
    nome: 'João da Silva',
    idade: 10,
    endereco: 'Rua Paulista, n 10000'
})
console.log(inserirCliente);


const buscarTodosClientes = await Cliente.findAll();
console.log(buscarTodosClientes);

module.exports = {inserirCliente, buscarTodosClientes}
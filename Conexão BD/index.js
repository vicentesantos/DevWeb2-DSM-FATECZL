const express = require('express');
//npm i express-session
const expressSession = require('express-session');
//npm install consign
var consign = require('consign');
var path = require('path');
const app = express();
app.set('views', './src/views');

consign().include('controller/routes')
    .then('controller')
    .then('model/entities')
    .then('model/components')
    .then('models/services')
    .then('model/repositories')
    .into(app);

app.listen(8081, function(){
    console.info("Servidor Funcionando");
});

/*(async() => {
    
    const db = require("./db");
    console.log('Começou!');

    console.log('insert into usuario');
    const result = await db.insertUsuario({nome: "Zé", senha: "d4sa894d8a4da16w"});
    console.log(result);

    console.log('update usuario');
    const result2 = await db.updateUsuario(3, {nome: "Zé Ruela", senha: "dsad48sad4sa8416f4as"});
    console.log(result2);
    
    console.log('select * from usuario');
    const usuarios = await db.selectUsuario();
    console.log(usuarios);
    
    console.log('delete from usuario');
    const result3 = await db.deleteUsuario(2);
    console.log(result3);

})();*/

/*(async () =>{
    const database = require('./dborm');
    const Cliente = require('./model/entities/cliente');
    
    console.log('Criar tabela =========');
    const resultado = await database.sequelize.sync();
    console.log(resultado);

    console.log('Criar um registro =============');
    const inserirCliente = await Cliente.create({
        nome: 'João da Silva',
        idade: 10,
        endereco: 'Rua Paulista, n 100'
    })
    console.log(inserirCliente);

    console.log('Buscar um registro ====================');
    const cliente = await Cliente.findByPk(1);
    console.log(cliente);

    console.log('Alterar um registro ==============');
    const clienteAlterar = await Cliente.findByPk(1);
    clienteAlterar.nome = "Vicente Santos"
    const resultadoSave = await clienteAlterar.save();
    console.log(resultadoSave);

    console.log('Buscar todos os registros ==============');
    const clientes = await Cliente.findAll();
    console.log(clientes);

    console.log('Deletar registro ===========');
    const clienteDelete = await Cliente.findByPk(1);
    clienteDelete.destroy();
})();*/
const { response } = require('express');
const { BULKDELETE } = require ('sequelize/types/lib/query_types');
const seguranca = require('./controller/seguranca');
module.exports=function(application){
    application.get('/', function(req, res){
        res.send("bem vindo");
    });
    application.get('/login', function(req, res){
        usuario-bd.insertUsuario(req.params.nome,seguranca.ocultarSenha( req.params.senha));
        res.send("Eba!!!");
    });
}
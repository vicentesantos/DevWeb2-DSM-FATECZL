const express = require("express");

const app = express();

app.get("/", function (req, resp){
    resp.send("Bem-vindo ao meu app");
});
app.get("/contato", function (req, resp){
    resp.send("Página de contato do meu app");
});
app.get("/produto", function (req, resp){
    resp.send("Página de produto do meu app");
});
app.get("/dados/:nome/:cargo", function (req, resp){ //rota dinâmica
    resp.send("<h1> Olá " + req.params.nome+"!</h1><h2>Seu cargo é "+req.params.cargo + ".</h2>");
});
app.get("/local", function (req, resp){ 
    resp.sendFile(__dirname+"/html/local.html");
});
app.listen(8081, function(){//essa deve ser sempre a última linha quando usar o express, do contrário nada abaixo dela funciona
    console.log("Servidor está funcionando na url http://localhost:8081");
});
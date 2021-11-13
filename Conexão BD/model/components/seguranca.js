//npm install sha1 --- Api

function ocultarSenha(senha){
    var sha1 = require('sha1');
    var hash = sha1(senha);
    console.log(hash);
    return hash;
}

module.exports = {ocultarSenha}
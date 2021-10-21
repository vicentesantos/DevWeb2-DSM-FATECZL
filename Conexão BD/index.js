(async() => {
    
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

})();


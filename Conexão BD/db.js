async function connect(){
    //confirma se está conectado com a variavel global
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysque://root:Paramore1**@localhost8081/desenvolvimento_web_2");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectUsuario(){
    const conn = await connect();
    const [rows] = await conn.query('select * from usuario;');
    return rows;
}

async function insertUsuario(usuario){
    const conn = await connect();
    const sql = 'insert into usuario(nome, senha) values (?, ?);';
    const values = [usuario.nome, usuario.senha];
    return await conn.query(sql, values);
}

async function deletUsuario(id){
    const conn = await connect();
    const sql = 'delete from usuario where id=?';
    return await conn.query(sql, [id]);
}

async function updateUsuario(id, usuario){
    const conn = await connect();
    const sql = 'update usuario set nome=?, senha=?, where id=?';
    const values = [usuario.nome, usuario.senha, id];
    return await conn.query(sql, values);
}
module.exports = {selectUsuario}
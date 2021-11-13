const db = require("./dborm");

async function insertUsuario(usuario){
    const conn = await db.connect();
    const sql = 'INSERT INTO usuario(nome,senha) VALUES (?,?);';
    const values = [usuario.nome, usuario.senha];
    return await conn.query(sql, values);
}

async function selectUsuario(){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM usuario;');
    console.log("foi!");
    return rows;
}

async function deleteUsuario(id){
    const conn = await db.connect();
    const sql = 'DELETE FROM usuario where id=?;';
    return await conn.query(sql, [id]);
}

async function updateUsuario(id, usuario){
    const conn = await db.connect();
    const sql = 'UPDATE usuario SET nome=?, senha=? WHERE id=?';
    const values = [usuario.nome, usuario.senha,  id];
    return await conn.query(sql, values);
}
module.exports = {selectUsuario, insertUsuario, deleteUsuario, updateUsuario}
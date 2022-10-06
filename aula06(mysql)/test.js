//Chamar a biblioteca sequelize
const { Sequelize } = require('sequelize')

//Fazer a conexão com o banco de dados
/* PARAMETROS   
    nome do banco, usuario, senha e um objeto falando a host e o tipo de conexão
*/
const sequelize = new Sequelize('sistemadecadastro', 'root', '2377', {
    host: "localhost",
    dialect: 'mysql'
})

// try vai tentar fazer a conexão com o comando 'sequelize.authenticate()', caso consiga irá mostrar sucesso, se não vai para o catch e mostrará o erro
try {
    sequelize.authenticate()
    console.log('Conexão estabelecida!')
} catch (error) {
    console.error(`Falha ao conectar com o banco de dados: ${error}`)
}
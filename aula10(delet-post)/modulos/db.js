const { Sequelize } = require('sequelize')

//Conexão com o banco de dados, MySQL
const sequelize = new Sequelize('cadastro', 'root', '2377', {
    host: "localhost",
    dialect: 'mysql'
})

//Verificação se conectou
try {
    sequelize.authenticate()
    console.log('Conexão estabelecida!')
} catch (error) {
    console.error(`Falha ao conectar com o banco de dados: ${error}`)
}

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
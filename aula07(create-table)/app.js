const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', '2377', {
    host: "localhost",
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conexão estabelecida!')
} catch (error) {
    console.error(`Falha ao conectar com o banco de dados: ${error}`)
}

//Cria o objeto Postagem com o resultado do define() = Criador da tabela
//'postagens' é o nome da tabela, titulo é uma coluna e type é o tipo dela.
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Isso irá inserir dados na tabela postagem
Postagem.create({
    titulo: 'Aqui deve colocar o titulo da postagem',
    conteudo: 'Aqui coloca o conteudo'
})

//Sincroniza a tabela criada com o banco de dados e force: true é para ter certeza que irá conectar (Usado apenas na criação da tabela, se usar denovo, irá criar uma nova tabela)
//Postagem.sync({force: true})
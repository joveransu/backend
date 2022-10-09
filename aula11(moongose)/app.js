const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
// function() é igual a () => {}
try{
    mongoose.connect('mongodb://localhost/dados_mongo') //dados_mongo é o nome do banco de dados e ele cria automaticamente
    console.log('Conexão feita com sucesso!')
} catch (err) {
    console.log('ERRO na conexão!' + err)
}

//Definindo as colunas da tabela.
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: String,
        require: true
    }
})

// Criando a tabela usuarios com os campos do UsuarioSchema
mongoose.model('usuarios', UsuarioSchema)

//Adicionando usuario
var NewUser = mongoose.model('usuarios')

try{
    new NewUser({
        nome: 'Jover',
        sobrenome: 'Ansu',
        email: 'joveransu@gmail.com',
        idade: 23
    }).save()
    console.log('Usuario salvo com sucesso.')
} catch(err){
    console.log('Houve erro ao registrar um usuario - '+err)
}
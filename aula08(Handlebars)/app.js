const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

//Template Engine
//Essas duas linhas falam para o express que queremos usar o handlebars como template engine do nosso projeto.
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) //Estamos dizendo que nosso layout é o main views > layouts, precisa ter esses nomes de pastas
app.set('view engine', 'handlebars')
    
//Body Parser
//Configuração para poder pegar dados de um formulario vindo do post
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
        
//Verificação se conectou
try {
    sequelize.authenticate()
    console.log('Conexão estabelecida!')
} catch (error) {
    console.error(`Falha ao conectar com o banco de dados: ${error}`)
}

//Rotas
app.get('/cadastrar', function(req, res){
    //Nome do arquivo abaixo, ele vai detectar que ta na pasta views
    res.render('formulario')
})

//Precisa alterar o tipo da rota, de get() para post(), pois o formulario ta com method='post'
app.post('/add', function(req, res){
    //req.body.title = Vai pegar o title da postagem, OBS: title é o nome do campo definido no formulario.handlebars
    res.send(`<strong>Titulo:</strong> ${req.body.title}<br><strong>Postagem:</strong> ${req.body.poster}`)
})

app.listen(8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081')
})
//localhost:8081
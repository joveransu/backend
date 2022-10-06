const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./modulos/post')

//Template Engine
app.engine('handlebars', handlebars.engine(
    {
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,allowProtoMethodsByDefault: true,
            /* runtimeOptions para permitir exibir na tela os dados da database. */
        }
    }
))
//Estamos dizendo que nosso layout é o main views > layouts, precisa ter esses nomes de pastas

app.set('view engine', 'handlebars')
    
//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get('/', function(req, res){
    // {order: [['id', 'desc']]} = Para vim em ordem decrescente.
    Post.findAll({order: [['id', 'desc']]}).then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get('/cadastrar', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    try {
        Post.create({
            titulo: req.body.title,
            conteudo: req.body.poster
        })
        console.log('Post feito com sucesso!')
        //Redireciona para outra aba.
        res.redirect('/')
    } catch (error) {
        console.log('Falha ao criar o post.' + error)
        res.send('Falha ao criar o post.' + error)
    }
})

app.get('/deletar/:id', function(req, res){
    try{
        Post.destroy({
            where: {
                'id': req.params.id
            }
        })
        console.log('Post foi deletado com sucesso.')
        res.send('Post foi deletado com sucesso.')
    } catch (error) {
        console.log(`ERRO ao deletar o Post ${error}`)
        res.send(`ERRO ao deletar o Post ${error}`)
    }
})

app.listen(8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081')
})
//localhost:8081
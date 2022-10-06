const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./modulos/post')

//Template Engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) //Estamos dizendo que nosso layout é o main views > layouts, precisa ter esses nomes de pastas
app.set('view engine', 'handlebars')
    
//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get('/', function(req, res){
    res.render('home')
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

app.listen(8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081')
})
//localhost:8081
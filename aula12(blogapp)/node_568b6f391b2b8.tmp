const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const admin = require('./routes/admin')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')

const app = express()
//Config
    //Sessão
        app.use(session({
            secret: 'qualquercoisa',
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    //Middlewares
        /*
        app.use((req, res, next) => {
            console.log('Oi, eu sou o Middlewares, as requesições passam por aqui e pode parar.')
            next()//Isso manda passar a requesição
        })
        */
        app.use((req, res, next) => {
            //VAR GLOBAIS, ele cria uma variavel que podem ser acessadas em qualquer parte da aplicação
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            next()
        })
    
    //Body parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,allowProtoMethodsByDefault: true,
                /* runtimeOptions para permitir exibir na tela os dados da database. */
            }
        }))
        app.set('view engine', 'handlebars')
    //Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/blogapp').then(() => {
            console.log('[MONGO] Conectado ao mongo')
        }).catch((err) => {
            console.log('[MONGO] Falha na conexão com o mongoDB. ' + err)
        })
    //Public
        app.use(express.static(path.join(__dirname,'public')))//lendo todos arquivos css, img e js


//Rotas
    //http://localhost:8081/admin/
    app.use('/admin', admin)

    app.get('/', (req, res) => {
        res.send('Rota principal')
    })

//Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log('[SITE] Servidor foi ligado!')
})
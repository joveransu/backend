const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const admin =require('./routes/admin')

const app = express()
//Config
    //Body parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Mongoose

//Rotas
    //http://localhost:8081/admin/
    app.use('/admin', admin)

    app.get('/', (req, res) => {
        res.send('Rota principal')
    })

//Outros
const PORT = 8081
app.listen(PORT, () =>{
    console.log('Site ligado!')
})
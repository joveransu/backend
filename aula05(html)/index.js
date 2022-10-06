const express = require('express')
const app = express()

app.get('/', function(req, res){
    // __dirname = diretorio da pasta atual do APP
    res.sendFile(__dirname + '/index.html')
})

app.get('/feedback', function(req, res){
    res.sendFile(__dirname + '/pages/feedback.html')
})

app.get('/game', function(req, res){
    res.sendFile(__dirname + '/pages/game6.html')
})

app.get('/updates', function(req, res){
    res.sendFile(__dirname + '/pages/updates.html')
})



app.listen(8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081')
})
//localhost:8081
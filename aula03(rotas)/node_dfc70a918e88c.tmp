//App constante para nada sobrescrever ela
const express = require('express')
const app = express()

//Cria uma rota (home)
app.get('/', function(req, res){
    //Envia uma resposta (mensagem na tela)
    res.send('Seja bem vindo(a) ao meu app!')
})

app.get('/sobre', function(req, res){
    res.send('Minha pagina sobre')
})

//Liga o servidor na porta 8081 (DEVE SER A ULTIMA LINHA DO CÓDIGO) ele dispara uma função quando liga
app.listen(8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081')
})
//localhost:8081
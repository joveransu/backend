const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Seja bem vindo(a) ao meu app!')
})

app.get('/sobre', function(req, res){
    res.send('Minha pagina sobre')
})

//Envia parametros para a pagina, bom para criar perfil, Bom para API 
// https://localhost:8081/Ansu/progrmador exibindo o req.params irá aparecer {"nome":"Ansu","cargo":"programador"}
app.get('/perfil/:nome/:cargo', function(req, res){
    //So pode usar a função send, uma UNICA vez
    res.send(`<h1>Perfil de ${req.params.nome}, ${req.params.cargo}</h1>`)
})

app.listen(8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081')
})
//localhost:8081
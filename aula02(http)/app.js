var http = require('http')

// createServer() = criará um server
// listen(8081) = a porta que estará ele
// res = Vai mandar resposta para usuario, quem está acessando a aplicação
http.createServer(function(req, res){
    // end = Server para enviar mensagem
    res.end('Bom dia')
}).listen(8081)
// localhost:8081 no Google
console.log('O Servidor rodando...')
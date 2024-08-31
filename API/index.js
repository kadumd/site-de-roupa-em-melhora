const http = require('http');
const fs = require('fs');
const path = require('path');
const portaDeEntrada = 3000;


const servidor = http.createServer((pedido, resposta) => {
    console.log(pedido.url)
    if (pedido.url === '/') {
        fs.readFile('frontend/view/index.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
});

servidor.listen(portaDeEntrada, () => {
    console.log(`O servidor está ouvindo na porta de entrada nº: ${portaDeEntrada}`)
});
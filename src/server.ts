//Próxima aula: Configuração básica do Express - Modulo 3 #2
import express from 'express';

const server = express();

server.get('/', (req, res) => {
    let name = 'Pedro';
    let age = 25;
    res.send(`Olá eu sou ${name} e tenho ${age} anos.`);
});

server.listen(3000, () => {
    console.log('Servidor está rodando no link http://localhost:3000');
});

import {createServer} from 'node:http';
//Próxima aula: Introdução ao Express - Modulo 3 #1

const server = createServer((req, res) => {
    let nome: string = "DJ";
    let idade: number = 90;
    res.end(`Olah server, eu sou ${nome} e tenho ${idade} anos.`);
});

server.listen(3000, () => {
    //document.write("<h1 style='color: green;'>Server funcionado</h1>");
    console.log("Server funcionando");
});

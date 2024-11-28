//Próxima aula - Modulo 2: #11 - Criando um servidor HTTP básico

let nomeTeste: string = "DJ";
let idadeTeste: number = 41;
let token: string = process.env.GOOGLE_DRIVE_TOKEN as string;

console.log(`Oi meu nome é ${nomeTeste} e tenho ${idadeTeste}.`);
console.log(`Conectando no Drive com o token: ${token}`);

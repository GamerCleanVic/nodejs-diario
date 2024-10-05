//Modulo 2: #10 - Uso de variáveis de ambiente

let nomeTeste: string = "João";
let idadeTeste: number = 40;
let token: string = process.env.GOOGLE_DRIVE_TOKEN as string;

console.log(`Oi meu nome é ${nomeTeste} e tenho ${idadeTeste}.`);
console.log(`Conectando no Drive com o token: ${token}`);

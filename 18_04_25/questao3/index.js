const readlinesync = require ('readline-sync');
const nome = readlinesync.question ('digite seu nome:');
const nota1 = Number (readlinesync.question ('digite a nota 1:'));
const nota2 = Number (readlinesync.question ('digite a nota 2: '));
const media = (nota1 + nota2 ) / 2

if (media > 7) {
    console.log (`${nome} você teve um bom aproveitamento `)
}else {
    console.log (`${nome} você não teve um bom aproveitamento `)
}


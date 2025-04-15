const readlinesync = require('readline-sync');
const nota1 = readlinesync.question ('digite uma nota:');
const nota2 = readlinesync.question ('digite outra nota:');
const media = (Number(nota1) + Number(nota2)) / 2
console.log (`a media entre ${nota1} e  ${nota2} é igual a ${media}`)

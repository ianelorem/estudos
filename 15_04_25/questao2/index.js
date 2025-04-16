const readlinesync = require ('readline-sync');
const numero = readlinesync.question ('digite um numero :')
const dobro = Number(numero)* 2
const tercaparte = Number (numero) / 3
console.log (`O dobro de ${numero} é ${dobro}`)
console.log (`a terça parte de ${numero} é ${tercaparte}`)

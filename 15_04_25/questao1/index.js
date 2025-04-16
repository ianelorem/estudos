const readlinesync = require('readline-sync');
const numero = readlinesync.question ('digite um numero:');
const antecessor = (Number (numero) - 1)
const sucessor = (Number (numero) + 1)
console.log (`o antecessor de ${numero} é ${antecessor}`)
console.log (`o sucessor de ${numero} é ${sucessor}`)
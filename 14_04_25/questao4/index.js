const readlinesync = require('readline-sync');
const valor1 = readlinesync.question ('digite um valor:');
const valor2 = readlinesync.question ('digite outro valor:');
const soma = Number(valor1) + Number(valor2)  
console.log (`a soma entre ${valor1} e  ${valor2} é igual a ${soma}`)

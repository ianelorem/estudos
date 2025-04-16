const readline = require ('readline-sync');
const dinheiro = readline.question('Quanto dinheiro uma pessoa tem na carteira: ');
const reais = Number(dinheiro)
const cotacao = (reais) / (3.45)
console.log (`essa pessoa pode comprar ${cotacao} dólares`)
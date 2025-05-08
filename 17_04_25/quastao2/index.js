const readlinesync = require ('readline-sync');
const preco = Number(readlinesync.question('digite o preço do produto:'));

const desconto =(5/100)*preco

const precopromocional = preco - desconto 
console.log (`o preço promocional é de ${precopromocional}`)
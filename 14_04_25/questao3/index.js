const readlinesync = require('readline-sync');
const nome = readlinesync.question ('digite seu nome:');
const salario = readlinesync.question ('digite seu salario:');
console.log (`a funcionaria ${nome},tem um salario de ${salario} reais `)
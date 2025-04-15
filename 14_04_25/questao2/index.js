const readlinesync = require('readline-sync');
const nome = readlinesync.question ('digite seu nome:');
console.log (`olá, ${nome} é um prazer te conhecer`);
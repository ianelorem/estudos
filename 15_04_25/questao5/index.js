const readlinesync = require ('readline-sync');
const largura = readlinesync.question ('a largura em metros e de :')
const altura = readlinesync.question  ('a altura em metros e de :')
const area = Number(altura) * Number(largura) 
const tinta = Number(area)/ 2
console.log (`a area a ser pintada é ${area}`)
console.log (`a quantidade de tinta a ser usada é de ${tinta}`)

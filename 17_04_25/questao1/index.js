const readlinesync= require ("readline-sync");
const a = Number (Readlinesync.question('digite o valor de a:'))
const b= Number(Readlinesync.question('digite o valor de b:'))
const c= Number (readlinesync.question('digite o valor de c:'))

const delta = b ** 2 - 4 * a * c 
console.log (`o valor de delta é ${delta}`) 

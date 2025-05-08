const readlinesync = require ('readline-sync');
const numero = Number (readlinesync.question ('digite um numero :'));

if (numero % 2 == 0) {
    console.log ('o número é par ')
}else {
    console.log ('o número é impar')
}
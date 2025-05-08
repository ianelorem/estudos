const readlinesync = require('readline-sync');
let valorinicial = Number (readlinesync.question ('digite o valor inicial:'));
let valorfinal = Number (readlinesync.question ('digite o valor final:'));
let incremento = Number (readlinesync.question ('digite o incremento:'));
let mensagem = ''
for (let i = valorinicial; i <= valorfinal; i += incremento) {
    mensagem = mensagem + ' ' + i
}
mensagem = mensagem + ' ' + 'acabou!'
console.log (mensagem)
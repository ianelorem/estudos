const readlinesync = require('readline-sync');
let contagem = Number (readlinesync.question ('digite um numero inteiro e positivo:'));
let mensagem = ''
for (let i= 1; i <= contagem; i ++){
    mensagem = mensagem + ' ' + i
}
mensagem = mensagem + ' ' + 'acabou!'
console.log (mensagem)
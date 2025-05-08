const readlinesync = require ('readline-sync')
let mensagem = ''
let soma = 0
for (let i = 6; i <= 100 ; i += 2){
    soma += i 
}

mensagem= (`o resultado da soma é ${soma}`)
console.log(mensagem)
const readlinesync = require ('readline-sync');
const nascimento = Number (readlinesync.question ('digite seu ano de nascimento: '))
const idade = 2025 - nascimento

if (idade >= 16){
    console.log ('você pode votar!')
}else {
    console.log ('você não pode votar')
}

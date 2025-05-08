const readlinesync = require ('readline-sync');
const velocidade = Number (readlinesync.question ('digite a velocidade do carro:'))

const excesso = velocidade - 80 
const multa =  excesso * 5

if ( excesso > 80) {
    console.log  (`você foi multado em ${multa}`)

}

    







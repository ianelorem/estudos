// escreva um algoritmo que leia dois números inteiros e compare-os, mostrando na tela uma das mensagens abaixo :
//o primeiro valor é maior 
// o segundo valor é maior 
// não existe valor maior os dois são iguais 

const readlinesync = require ('readline-sync');
const valor1 = Number (readlinesync.question ('digite um valor:'))
const valor2 = Number (readlinesync.question ('digite outro valor:'))

if (valor1 > valor2) {
    console.log ('o primeiro valor é maior')
}else {
    if (valor2 > valor1) {
        console.log ('o segundo valor é maior')
     }else {
        console.log ('não existe valor maior os dois são  iguais')
    }
}
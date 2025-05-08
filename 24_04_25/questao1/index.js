// escreva um programa para aprovar ou não o emprestimo bancário para a compra de uma casa 
//o programa vai perguntar o valor da casa, o salário do comprador e em quantos anos ele vai pagar
// calcule o valor da prestação mensal, sabendo que ela não pode exceder a 30 % do salário ou então 
//o emprestimo será negado 

const readlinesync = require ('readline-sync');
const valordacasa = Number (readlinesync.question ('digite o valor da casa :'))
const salario = Number (readlinesync.question ('digite seu salario :'))
const anosapagar = Number (readlinesync.question ('digite em quantos anos vai pagar:'))
const prestacaomensal = valordacasa / (anosapagar * 12)

if (prestacaomensal <= salario * 0.30 ){
    console.log ('emprestimo aceito')
}else {
    console.log ('o emprestimo será negado ')
}
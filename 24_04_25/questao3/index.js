// uma empresa de aluguel de carros precisa cobrar pelos seus serviços 
// o aluguel de um carro custa $ 90 por dia para carro popular e $ 150 por dia para carro de luxo
// além disso, o cliente paga por km percorrido . faça um programa que leia o tipo de carro alugado 
// (popular ou luxo),quantos dias de aluguel e quantos km percorridos. no final mostre o preço a ser pago
//de acordo com a tabela seguir :
//carros populares (aluguel de 90 por dia )
// - até 100 km percorridos : 0,20 por km
// - acima de 100 km percorridos: 0.10 por km 
//carros de luxo ( aluguel de $150 por dia )
// - até 200 km percorridos : $ 0,30 por km 
// - acima de 200 km percorridos : $ 0,25 por km 

const readlinesync = require ('readline-sync');
const carro = Number (readlinesync.question ('digite o tipo de carro alugado (digite 1 para popular e 2 para luxo):'))
const diasalugados = Number (readlinesync.question ('digite quantos dias de aluguel :'))
const quilometros = Number (readlinesync.question ('digite quantos quilometros percorridos:'))
let precopordia = 0
let km = 0
if (carro === 1){
    precopordia = 90;
     if (quilometros / diasalugados >= 100){
        km = 0.10 
    }else {
        km = 0.20
}}
if (carro === 2){
    precopordia = 150 ;
    if (quilometros / diasalugados >= 200)
        km =  0.30
}  else {
    km = 0.25 
 }
const precoaserpago = (precopordia * diasalugados) + (km * quilometros)
console.log (`o preço a ser pago é de ${precoaserpago}`)
 


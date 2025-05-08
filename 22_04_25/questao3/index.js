// faça um programa que leia a largura e o comprimento de um terreno retangular;
//calculando e mostrando a sua área em m2. O programa tambem deve mostrar a classificação desse terreno,
// de acordo a lista abaixo :
//abaixo de 100 m2 --> terreno popular
//entre 100 m2 e 500 m2 --> terreno master 
// a cima de 500 m2 --> terreno vip

const readlinesync = require ('readline-sync');
const largura = Number (readlinesync.question ('digite a largura do terreno :'))
const comprimento = Number (readlinesync.question ('digite o comprimento do terreno :'))
const area = largura * comprimento 

if (area < 100 ) {
    console.log (' a classificação do terreno popular')
} else {
    if (area >= 100 && area <= 500 ) {
        console.log ('a classificação do terreno é master')

    } else {
        if (area >= 500 ) {
            console.log ('a classificação do terreno é vip')
        }
    }
}
// cie um programa que leia duas notas de um aluno e calcule a sua média,mostrando uma mensagem no final,
// de acordo com a média atingida:
//media até 4.9 -->reprovado
// media entre 5.0 e 6.9 --> recuperação
// media 7.0 ou superior --> aprovado 

const readlinesync = require ('readline-sync');
const nota1 = Number (readlinesync.question ('digite uma nota:'))
const nota2 = Number (readlinesync.question ('digite outra nota:'))
const media = ((nota1 + nota2) / 2)

if (media <= 4.9 ) {
    console.log ('reprovado')
} else {
    if (media >= 5.0 && media <= 6.9) {
        console.log ('recuperação')

    } else {
        if (media >= 7) {
            console.log (' aprovado ')
        }
    }
}
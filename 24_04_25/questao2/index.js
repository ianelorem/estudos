// o indice de massa corpórea (imc) é um valor calculado baseado na altura no peso de uma pessoa
//de acordo com o valor imc podemos classificar o individuo dentro de certas faixas 
// abaixo de 18.5 : abaixo do peso
// entre 18.5 e 25 : peso ideal
// entre 25 e 30 : sobrepeso
// entre 30 e 40 : obesidade
// acima de 40 : obesidade morbida 
//obs : o imc é calculado pela expressão peso/altura **2

const readlinesync = require ('readline-sync');
const peso = Number (readlinesync.question ('digite o seu peso :'))
const altura = Number (readlinesync.question ('digite a altura :'))
const calculo= peso / (altura ** 2)

if (calculo < 18.5 ) {
    console.log ('abaixo do peso');
} else {
    if (calculo >= 18.5 && calculo <= 25){
        console.log ('peso ideal');
    } else {
        if (calculo >= 25 && calculo <= 30){
            console.log ('sobrepeso');
        } else {
            if (calculo >= 30 && calculo <= 40){
                console.log('obesidade');   
            } else {
                if (calculo > 40 ){
                    console.log ('obesidade morbida')
                    }
                }
            }
        }
    }

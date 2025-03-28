## revisão 
const a = 23
const texto = "culto de jovens"
const verdadeiro = true //false
/*
fghjuhghijuilkjjsg
bjsgbhgbsajgu
*/

let b = 40
b = 56
//declarar uma variavel é criar ela 
//atribição de valor na declaração da variável é chamada de inicialização 
//atribuir um valor a uma váriavel é colocar um valor nessa variavel
// até aqui temos os seguintes tipos de valores: numérico; texto , bouleano , NaN, undefined,null

let nome //delarada porem não inicializada,neste caso a vária começa com o valor undefined 
console.log(nome)

//não da pra criar variáveis const sem inicialização 
 
const teste = null
const teste2 = undefined
//null ou undefined são indicados para expressar uma ausencia de informação

//exemplos de operadores = + - * / ** ++ -- %  operadores aritméticos
// = operador de atribuição 
// + operadoor de adição
// - operador subtração 
// * operador de multiplicação
// / operador de divisão 
// ** operador de exponenciação 
// ++ operador de incremento / só pode ser usado em variáveis let 
// -- operador de decremento 
// % operador de resto da divisão 

const expressao = 12 + 5 * 2
//um operador é um simbolo que faz uma operação utilizando valores (geralmente dois valores) resultando em um novo valor 
//expressão é uma sequencia de valores e operadores que resultam em um valor final
//operando é um valor utilizado por um operador 
// operadores relacionais : (expressa a relação entre os valores) os operandos podem ser qualquer tipo de valor 
// == , != , >= ,<= , < ,> 

//operadores lógicos : && || ! , esses operadores funcionam para valores booleanos
// (!)negação muda um valor false para true, e true para false
// concatenação de string quando usa o +

const texto2 = "oi" + " " + "tudo bem\n ola"
// caracteres é um simbolo, um simbolo pode ser um numero, uma letra ou alguma outra coisa 
console.log (texto2)
// \n pula um linha 
// \t faz uma tabulação (espaço grandão)

const expressao2 = true && false || false 
const expressao3 = 21==21 && 34 >= 30 && 2 > 3 || 60 <= 24 && !true 
// operadores relacionais tem que ter dois operandos,se quiser ter mais de um operador relacinal na expressão deve-se usar operadores lógicos 
const pessoa = "iane"

const texto4 = oi tudo bem ${pessoa}
//template string é uma forma de criar stings utilizando crases sem precisar da concatenação 

const valor = NaN
const valor1 = Number("iane")
console.log (valor)
console.log (valor1)
//console.log (NaN)
//

//console.log (expressao3)
//console.log ( 21==21 && 34 >= 30 && 2 > 3 || 60 <= 24 && !true)

console.log (Number.isNaN(valor)) //isNaN retorna true se o valor for NaN

{
    const nome3= "iane"
    
}

console.log(valor1)
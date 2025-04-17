
/*const teste2 = (a) => {
    return a + 5
}

teste2(5) //chamada da função de seta

function teste(a) {
    return a + 5
}

teste(5) // chamada da função teste

function teste3 (c,d) {
   return c * d
}
teste3 (4,6)


const teste4 = (e,f) => {
    return e * f
}
teste4 (7,8) */

/*const teste = function (a) {
    return a * 5
}*/

/*function teste (a,b,c) {
    return a + b + c
}
teste ( 1,2,3)//ok

const teste2 = (a,b,c) => {
    return a + b +c 
}
teste2 (4,5,6) //ok

const teste3 = function (a,b,c) {
    return a + b +c 
}
teste3 (7,8,9)// ok

////////////////////////////

const testeCopia = teste
testeCopia(1,2,4)

const teste2Copia = teste2
teste2Copia(1,2,4)

const teste3Copia = teste3
teste3Copia(1,2,4)*/

/*function teste1(a, b) {
    return a + b
}

function teste2(a,b) {
    return a * b
}

let teste = teste1
console.log(teste(2,4)) // qual a saida aqui?

teste = teste2
console.log(teste(2,4)) // qual a saida aqui?*/

//const teste3 = teste1 é diferente de const teste3 = teste1(2,3)
// no primeiro caso vc ta pegando a referencia da função pra depois chmar a função por meio de uma variavel, no segundo caso vc ta 
//chmando a função e atribuindo o retorno dela a uma variavel

/*function teste(a) {
    return a * 5
}

console.log(teste)
console.log(teste(4))*/

/*function teste1(a, b) {

    // fica assim, o parametro a vai ser a mesma coisa da funcao teste2
    // o parametro b vai ser o valor 3
    // entendeu
    // é quase a mesma coisa que ter feito const a = teste2
    return a(2) + b
}

function teste2(a) {
    return a * 10
}

teste1(teste2, 3) // aqui é a chamada ok?*/

  // eentao ate aqui vc sabe o seguinte 
    // a = teste1
    // b =  3
    // ja ta aqui em cima vc ta vendo, agente ja comento, o valor de a e b, vc entendeu emsmo?
    // ok?ok
    //se a = teste1, entao a(b, 5) é a mesma coisa que teste1(b, 5) que é a mesma coisa que teste1(3, 5), certo?sim, ve ai quanto da
    

function teste(a, b) {
    // to aqui agora ok?ok
    // quais serao os valores de a e b? a é teste 1 e b é 4
    // o valor de a é qual mesmo? ah teste 2
    // isso, vc tem que pestar atenao aos parametros que a chamada da passando
    // o return vai ficar assim :
    // return a(b, 3)
    // subsituindo o valor de a fica:
    // return teste2(b, 5)
    // colcoando o valor de b fica
    // return teste2(4, 5)
    // quanto que da isso ai
    //4 *5  20
    // qual vai ser a segunda saida? 20
    // isso
    // pronro, esse negocio de passar funcao como parametro pra outra agente chama de CALLBACK
    // é um dos conceitos mais complexos do javascript
    // pra entender assim é meio confuso mas acho que deu pra entender 
    //certo
    //foi mal 
    //pelo tempo
    //relaxa o importante é fazer o exercio e tentar compreender
    //de quebra agetetreina digitacao kkkk
    // verdade kkkk
    //
    // no readme escrevemos mais de 500 linhas kkkk
    // realmente é melhor por lá aqui fica muito poluido 
    // pois é 
    // muito bom queridona
    // amanha mando mais exercicos
    // acho que vou mandar 3 por dia
    //pra nao sobrecarrear tanto
    // mas no dia que eu tiver em casa e tiver mais tempo da pra fazer os 5 mesmo que demore 
    // ok
    //mas muito bem
    //as coisas que mostrei hj, sei que sao complicadas, mas mais pra frente mando exercicios disso, para praticarmos
    // sim acho que só vou dizer que entendi completamente se conseguir fazer os exercios de boa 
    // ok
    // mozona
    //que saudade de vc agora
    //agora queri estar com vossa pessoa do lado
    
    // cuidado que isso daqui vai ficar salvo kkkkk mas eu tbm mozão com certeza 
    // em breve nao teremos que nos despedir mais nem ficar mais de um dia pra se ver
    // amem com certeza mas vamos focar kkkkk
    // agente ta focado kkk, ja acabou por hj
    // acho que vamos numa churrascaria ali em sao caetano mesmo
    // e o que vc mandou ontem? no caso o de são caetano é rodizio? ou não
    // pelo que entedni é sim
    // huum sua mãe foi ver o da silva bueno tbm né?
    // viu mas nao é legal, so é comida simples basicameente
    // alem de que tem que ser um abiente razoavel
    // verdade, e esse de são caetano vc viu na internet?
    // vi
    // amanha eu te mando
    // ok até sexta tenho que mandar esse endereço pro meu pai se não ele mete o loco 
    // kkkk, to ligado, e a decoração?bom eu tava esperando ela falar alguma coisa mas amanhã de manhã eu pergunto novamente
    //hum caracas, é chato esse pessoal que agente tem que ficar se humilhando
    // pois é pq ela vizualizou poucos minutos depois de eu ter mandado custava responder 
    // mas como vc falou eles são ocupados tbm , vou ver amanha de novo 
    // senao responder agente tenta falar com a josy
    // sim eu pensei nisso tambem , eu mandei uma mesa que ela tinha no catalogo e só pergutei se tinha como adaptar pra referencia que mandei 
    // não é uma pergunta muito besta é?
    // não, é uma pergunta normal
    // ah não sei explicar pq tinha um modelo lá no catalogo e ela falou que era parecido com o que mandei 
    // hum, amanha agente comenta direitinho
    // eu começei a fazer a lista tbm da minha parte mas coloqei só quem eu lembrava vou falar com minha mãe 
    // ok
    // nem mexi nisso mais
    // amanha comentamos mais
    // ja esta tarde tb
    // sim eu tinha esquecido disso por um momento tbm mas temos que ver isso logo 
    // vdd, mas vai se resolver fica em paz
    // amem to de boa em relação a isso tbm 
    // amem
    // mozona queridona lindona
    // vamos indo, amanha nos falamos, pq sera um novo dia se Deus quiser
    // tenha uma otima noite, um bom descanso e ate manha se Deus quiser
    //amem mozão fica com deus ,até amanha se deus quiser kkkk
    //AggregateError, sai do discor hein kkkk
    // sim vou sai já já , xau, te amo 
    //m/uito mesmo
    // eu tambem te amo demais to com saudades tambem 
    //amem, boraindo, senao agente fica namorando pelo vscode kkkkk
    // falou
    // kkkkkkkkkkkk um beijo, um beijo
    return a(b, 5) //olha aqui, acho que nao entendi o que falei, quem dizer oq ue escrevi, vc entendeu a linha acima?
}

function teste1(a, b) {
    return a + b
}

function teste2(a, b) {
    return a * b
}

console.log(teste(teste1, 3))
console.log(teste(teste2, 4)) //quais parametros estao sendo passado pra função teste? responde aqui perai teste2 e 4, isso


//quais os parametros dessa chamada, ok, mas nessa chamada quais vao ser o valores que a e b vao receber

//a primeira ,teste 
//a,b
// era isso que tava pensando no caso pq tem a (b,5 )
//per ai ainda nao chegamos nessa parte certo
// qual vai ser o valor de a
// undefined
//nção pera ai
//teste(teste1, 3)
// a chamada é essa concorda? sim
//lembra que vc passa os parametros separadaos por virgula sim 
//quantos parametros tem nessa chamada? 2
//quais são eles a e b
//não iane
//nao estou pedindo pra vc olhar pra função, é pra olhar so pra chamada agora
//na chmada quais parametros eu estou enviando teste1 e 3, os parametros são teste1 e 3
//pronto depois que vc olha pra chamada, agora vc ola pra função

// a função tem 2 parametros, a e b

//a vai receber qual valor? 3  
// bora la de novo

// na chamada da função vc ta enviando quais parametros?teste 1 e 3 
// então a seria teste1? isso
//e b?3
// exato

// bora la pra cima agora kkk
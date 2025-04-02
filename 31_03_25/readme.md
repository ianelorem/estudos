const a = 2

switch (a) {
    case 1: {
        console.log ('este é o valor 1')
        if (3 > 2) {
            console.log ('a conta deu certo')
        }
        break 
    }
}
case 2:{
    console.log ('este é o valor 2')
    break 
}

defaut: {
    console.log ('não é nenhum dos anteriores')
}
// comando switch case
//defaut não precisa de break


// funções são códigos pra reutilizar códigos
/*const nome1 = "anderson"
const cidade1 = "são paulo "
console.log (`olá meu amigo ${nome1}, vc está bem ? vc mora em $(cidade1), né isso?`)

const nome2 = "iane"
const cidade2 = "são paulo" 
*/console.log (`olá meu amigo ${nome2}, vc está bem ? vc mora em $(cidade2), né isso?`)

function imprimirmensagemdeboasvindas (nome,cidade ) {
    console.log (`olá meu amigo ${nome},vc está bem ? vc mora em ${cidade}, né isso?)
}
imprimirmensagemdeboasvindas ('anderson', 'são paulo' )
imprimirmensagemdeboasvindas ('iane' , ' são paulo')

# invocar a função 
# variaveis de parâmetros ( nome , cidade )
# bloco console.log


função que não recebe nenhum parâmetro
function mostrarmensagem () {
    console.log ("testando")
}

mostrarmensagem ()
mostrarmensagem ()
mostrarmensagem ()
mostrarmensagem ()
# uma função retorna um valor 
function soma (){
    console.log ("qualquer coisa")
    return 10
}
const a = soma ()
console.log 
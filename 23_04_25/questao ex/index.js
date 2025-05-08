/*if(false) {
    console.log('entrou no if')
} else {
    console.log('entrou no else')
}

function teste() {
    console.log('ola meu amigo')
}
let a = 2
if(true)
    if(a > 5) console.log('aksjkajskajksa') 
    else console.log('aksjkajskajksa') 
else a = a + 5*/

//comando é uma instrução que faz algo
//declaração de variavel
//atribuição de variavel
//if
//if-else
//switch
//

//coerção de tipo booleana
//const a = '' // é convertido em false
//const a = 'skalskalksla' // é convertido em true
//const a = 12 // é convertido em true
//const a = 0// é convertido em false
//null é convertido para false
//undefined é convertido para false
//NaN é convertido para false
//const a = [1,2,3,4,5,6] arrays sempre são convertido em true
//const a = { nome: 'iane' } //objeto sempre são convertido em true

/*if(pessoa) {
    console.log('entrou no if')
} else {
    console.log('entrou no else')
}*/

//string para numero
//string para booleano
//null para booleano
//numero para booleano
//const nome = 'anderson'

//const pessoa = { idade: 29, nome: 'iane', condicao: true }
//const c = 'ola' + ' ' + nome + ', ' + 'sua idade é ' + pessoa.condicao

//console.log(c)

/*if(null == undefined) { //igualdade solta
    console.log('entrou no if')
}

if(null === undefined) { //igualdade estrita
    console.log('entrou no if 2222')
}*/

//if(3 !== 3 || 23 >= 12 && 34 !== 34) {
    //true || true && false
    // true $$ false
    // false
    //console.log('ola meu amigo 1111111111111')
//} 
/*else {
    console.log('ola meu amigo 2222222222222')
}*/


/*if(!(3 !== 3 || 23 >= 12 && 34 !== 34)) {
    console.log('ola meu amigo 2222222222222')
}

const a = 12

if(a > 10) {

} else {

}*/

/*const estaLogado = true;
const carrinho = ['produto1', 'produto2'];
const endereco = 'Rua das Flores, 123';

if (estaLogado) {
  if (carrinho.length > 0) { // estaLogado && carrinho.length > 0
    if (endereco) { // estaLogado && carrinho.length > 0 && endereco
      console.log('Compra finalizada com sucesso!');
    } else {
      console.log('Erro: informe um endereço de entrega.');
    }
  } else {
    console.log('Erro: o carrinho está vazio.');
  }
} else {
  console.log('Erro: você precisa estar logado para comprar.');
}

if(estaLogado && carrinho.length > 0 && endereco) {
    console.log('Compra finalizada com sucesso!');
} else {
    if(!estaLogado) {
        console.log('Erro: você precisa estar logado para comprar.'); 
    } else {
        if(carrinho.length === 0) {
            console.log('Erro: o carrinho está vazio.');
        } else {
            if(!endereco) {
                console.log('Erro: informe um endereço de entrega.');
            }
        }
    }
}
*/

/*
const tipoUsuario = 'admin';
// admin, moderador, usuario

if(tipoUsuario === 'admin') {
    console.log('Acesso total');
} else {
    if(tipoUsuario === 'moderador') {
        console.log('Acesso limitado');
    } else {
        if(tipoUsuario === 'usuario') {
            console.log('Acesso básico');
        } else {
            console.log('Sem acesso');
        }
    }
}

switch (tipoUsuario) {
    case 'admin': {
        console.log('Acesso total');
        break;
    }
    case 'moderador': {
        console.log('Acesso limitado');
        break;
    }
    case 'usuario': {
        console.log('Acesso básico');
        break;
    }
    default: {
        console.log('Sem acesso');
        break;
    }
}*/

/*const nota = 82;

if (nota >= 90) { //nota >= 90
    console.log('A');
} else {
    if(nota >= 80) {// nota >= 80 && nota < 90
        console.log('B');
    } else {
        if (nota >= 70) { //nota >= 70 && nota < 80 && nota < 90
            console.log('C');
        } else {
            console.log('F (reprovado)');
        }
    }
}

if (nota >= 90) { 
    console.log('A');
}

if(nota >= 80 && nota < 90) {
    console.log('B');
}

if(nota >= 70 && nota < 80 && nota < 90) {
    console.log('B');
}

if(nota < 70) {
    console.log('F (reprovado)');
}*/

/*const notaFinal = 65;
const frequencia = 85;

if (notaFinal >= 70 && frequencia >= 75) {
  console.log('Aprovado');
} else {
    if (notaFinal >= 60 && frequencia >= 75) {
        console.log('Recuperação');
    } else {
        console.log('Reprovado');
    }
}

if(notaFinal >= 70) {
    if(frequencia >= 75) { //notaFinal >= 70 && frequencia >= 75
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
} else {
    if(notaFinal >= 60) {
        if(frequencia >= 75) { //notaFinal >= 70 && frequencia >= 75
            console.log('Recuperação');
        } else {
            console.log('Reprovado');
        }
    } else {
        console.log('Reprovado');
    }
}*/
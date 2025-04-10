//objetos guardar informações, ele é um tipo de dado composto por dados mais simples
//objetos trabalham na forma de chave e valor, que são as propiedades 
const pessoa = {
    nome: 'iane',
    idade: 27,
    notas: [10,8,9,9],
    amigos: ['Anderson','Débora','Barbara'],
    endereco: {
        rua: 'vemag',
        numero: 121,
        bairro: 'ipiranga',
        casas:['hotel','predio']
    }
}
console.log (pessoa)
console.log (pessoa.endereco.casas[1])
function montartexto(a){
    return  `Olá ${a.nome} ${a.sobrenome} ${a.idade} anos !`
}
const pessoa ={
    nome: 'Iane Lorem',
    sobrenome: 'Alves',
    idade: 27 
}
console.log (montartexto(pessoa))
function exemplo (a,b ){
    const soma = a + b 
    if(soma <= 100 ){
        return ('não utrapassou o  limite')
    }
        
    if (soma > 100 && soma <= 200){
        return('esta bem perto do limite')
    }
    
    if (soma > 200){
        return('ja passou dos limites')
    }
           
}
const nome = "anderson"
console.log (`${nome},${exemplo(20,50)}`)
console.log (`${nome},${exemplo(80,40)}`)
console.log (`${nome},${exemplo(100,150)}`)

        
        
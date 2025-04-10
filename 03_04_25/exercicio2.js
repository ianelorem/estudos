function mensagem (a,b){
    const conta = a * b
    if(true) {
        console.log ("qualquer coisa")

    }  
    switch (conta)  {
        case 2 :{
            console.log ("está correto")
            break
        }

    }
    return conta    
}   

const calcular = mensagem (2,3)
console.log (calcular)
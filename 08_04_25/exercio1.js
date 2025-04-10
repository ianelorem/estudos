function calcular(a, b) {
    let resultado = 0
    if(a > 3) {
        switch (b) {
            case 1: {
                resultado = 23
                break;
            }
            case 2: {
                resultado = 45
                break;
            }
            case 3: {
                resultado = 78
                break;
            }
            default: {
                break;
            }
        }
    }
    return resultado
}

console.log(calcular(12, 3))
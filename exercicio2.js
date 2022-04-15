// 2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function mostreOMaiorValor(numero1, numero2) {
    if(numero1 > numero2) {
        return "O maior valor entre os dois numeros é  " + (numero1)
} else if (numero2 > numero1) {
        return "O maior valor entre os dois numeros é  " + (numero2)
    } else if (numero1 == numero2) {
        return "Os números são iguais"
    } else {
        return "Insira dois números"
    }
}

console.log (mostreOMaiorValor(56,67))
console.log (mostreOMaiorValor (10,10))

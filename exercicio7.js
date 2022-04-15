// 7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function calcularDivisao(numero1, numero2) {

    let resultadoDivisao = numero1 / numero2;

    if (resultadoDivisao % 2 == 0) {
        return "O resultado da divisão é " + (resultadoDivisao) + "sendo este um número par"
    } else {
        return "O resultado da divisão é " + (resultadoDivisao)
    }
}

console.log(calcularDivisao(2, 2))

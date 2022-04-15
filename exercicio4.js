// 4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function informeParOuImpar(numero) {

    if (numero % 2 == 0) {
        return "O número " + (numero) + " é par"
    } else {
        return "O número " + (numero) + " é ímpar"
    }
}

console.log(informeParOuImpar(22))
console.log(informeParOuImpar(33))

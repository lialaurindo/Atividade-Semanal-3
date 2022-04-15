// 5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function valideIdade(anoDeNascimento) {
    let calculoIdade = anoDeNascimento - 2022;

    if (calculoIdade => 18) {
        return "É maior de idade"
    } else {
        return "É menor de idade"
    }
}

console.log(valideIdade(1995))
console.log(valideIdade(2015))

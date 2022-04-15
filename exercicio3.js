// // 3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

//   - Se a media for igual ou maior que 7 - Aprovado
//   - Se a media for maior e igual a cinco e menor que 7 - Recuperação
//   - Se a media for menor que 5 - Reprovado


function avalieAluno(nota1, nota2, nota3) {
    let calculoMedia = (nota1 + nota2 + nota3) / 3

    if (calculoMedia => 7) {
        return "Parabéns, você está aprovado! :)"
    } else if (calculoMedia => 5 && calculoMedia < 7) {
        return "Opa, você está de recuperação"
    } else if (calculoMedia > 5) {
        return "Você foi reprovado"
    } else {
        return "Por favor, insira as três notas"
    }
}
console.log(calculoMedia(9, 6, 9))
console.log(calculoMedia(5, 3, 2))
console.log(calculoMedia(1, 2))

// 1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function retorneDiaDaSemana(dia) {
    switch (dia){
        case 1:
            return "Segunda-feira"
            break;
        case 2:
            return "Terça-feira"
            break;
        case 3:
            return "Quarta-feira"
            break;
        case 4:
            return "Quinta-feira"
            break;
        case 5:
            return " Sexta-feira"
            break;
        case 6:
            return "Sábado"
            break;
        case 7:
            return "Domingo"
            break;
        default:
            return "Número não corresponde a nenhum dia da semana"
            break;
    }


    console.log(retorneDiaDaSemana(5))
}

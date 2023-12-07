/* 
    Calcular a média e classificação de um aluno conforme:

        1. Menor que 5 = reprovado.
        2. Entre 5 e 7 = recuperação.
        3. Acima de 7 = aprovado.
*/

    const primeiraNota = 10;
    const segundaNota = 7;
    const terceiraNota = 3;

    const media = (primeiraNota+segundaNota+terceiraNota)/3;

    if (media < 5){
        var situacao = "Reprovado!";
    }else if (media >= 5 && media < 7){
        situacao = "Recuperação";
    }else{
        situacao ="Aprovado!";
    }

    console.log("Sua média é: ", media.toFixed(2), " e sua situação é: ", situacao);
/*
    Cálculo do IMC

    Classificação:
        < 18.5 = abaixo do peso;
        > 18.5 e < 25 = peso normal;
        > 25 e < 30 = acima do peso;
        > 30 e < 40 = obeso;
        > 40 = obesidade grave.
*/

const altura = 1.75;
const peso = 80;
const imc = peso/(altura**2);

if (imc < 18.5){
    var classificacaoImc = "Abaixo do peso!";
}else if (imc >= 18.5 && imc < 25){
    classificacaoImc = "Peso normal";
}else if(imc >= 25 && imc < 30){
    classificacaoImc = "Acima do peso";
}else if(imc >= 30 && imc < 40){
    classificacaoImc = "Obesidade";
}else{
    classificacaoImc = "Obesidade mórbida";
}

console.log("Seu IMC é: ", imc.toFixed(2), " e sua classificação: ", classificacaoImc)


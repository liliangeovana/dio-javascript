function calculoIMC(peso, altura){
    return peso/(altura**2)
}

function verificarClassificacao(imc){
    if (imc < 18.5){
        return "Abaixo do peso!";
    }else if (imc >= 18.5 && imc < 25){
        return "Peso normal";
    }else if(imc >= 25 && imc < 30){
        return "Acima do peso";
    }else if(imc >= 30 && imc < 40){
        return "Obesidade";
    }else{
        return"Obesidade mórbida";
    }
}

function main(){
    const peso = 75;
    const altura = 1.75;

    var imc = calculoIMC(peso, altura);
    console.log(imc.toFixed(2));

    var classificacao = verificarClassificacao(imc);
    console.log(classificacao) 
}
main();
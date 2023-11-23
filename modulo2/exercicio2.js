function ExibirNome(nome){
    return 'Meu nome é ' + nome;
}

function VerificarIdade(idade){
    if (idade >= 18){
        console.log(ExibirNome("Lílian"), ". Maior de idade!");
    }else{
        console.log("Menor de idade.");
    }
}

(function (){
    VerificarIdade(23);
})();
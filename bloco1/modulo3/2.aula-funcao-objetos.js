class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nomeParametro, idadeParametro){
        this.nome = nomeParametro;
        this.idade = idadeParametro;
        this.anoDeNascimento = 2022-idadeParametro;
    }

    descrever() {
        console.log (`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(pessoaUm, pessoaDois) {
    if (pessoaUm.idade > pessoaDois.idade){
        console.log (`${pessoaUm.nome} é mais velho que ${pessoaDois.nome}`);
    }else if (pessoaUm.idade < pessoaDois.idade){
        console.log(`${pessoaDois.nome} é mais velho que ${pessoaUm.nome}`);
    }else{
        console.log(`${pessoaUm.nome} e ${pessoaDois.nome} possuem a mesma idade.`);
    }
}

const fulano = new Pessoa('Fulano', 23);
const sicrano = new Pessoa ('Sicrano', 40);

compararPessoas(fulano, sicrano);
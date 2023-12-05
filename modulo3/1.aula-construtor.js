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

const fulano = new Pessoa('Fulano', 23);
console.log(fulano);
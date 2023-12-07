/*
    1. Classe para representar uma pessoa (nome, peso e altura).
    2. As pessoas devem poder indicar o valor do IMC (peso/(altura)^2)
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    //Não definem-se parâmetros, pois os dados já são inerentes à pessoa, não vêm de fontes externas.
    calcularImc(){
       return this.peso/(this.altura**2);
       
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return "Abaixo do peso!";
        }else if (imc >= 18.5 && imc < 25){
           return "Peso normal";
        }else if(imc >= 25 && imc < 30){
            return "Acima do peso";
        }else if(imc >= 30 && imc < 40){
            return "Obesidade";
        }else{
            return "Obesidade mórbida";
        } 
    }
}
var imc;
var classificacao;

//PESSOA 1
const jose = new Pessoa("José", 70, 1.75);
imc = jose.calcularImc()
classificacao = jose.classificarImc(imc)
console.log(jose.nome, ", seu IMC é: ", imc, " e você está: ", classificacao);

//PESSOA 2
const fulano = new Pessoa("Fulano", 100, 1.75);
imc = fulano.calcularImc();
classificacao = fulano.classificarImc();
console.log(fulano.nome, ", seu IMC é: ", imc, " e você está: ", classificacao);

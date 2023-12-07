/*
 1. Criar uma classe que represente carros (marca, cor, gasto médio de combustível por km)
 2. Criar um método que dado a quantidade de km e o preço do combustível dê o valor gasto em reais para realizar o percurso.
 */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    //Considerando os atributos obrigatórios na instância de um novo carro, definimos o construtor
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm; 
    }

    calcularGastoDeViagem(distanciaParametro, precoCombustivel){
        return distanciaParametro * precoCombustivel * this.gastoMedioPorKm;
    }
}

const uno = new Carro("Fiat", "Prata", 1/12); //1L a cada 12KM
viagemUno = uno.calcularGastoDeViagem(70,5);
console.log("Você gastou: R$",viagemUno, " de combustível");

const palio = new Carro ("Fiat", "Preto", 1/10);
viagemPalio = palio.calcularGastoDeViagem(70,5);
console.log("Você gastou: R$",viagemPalio, " de combustível no ", palio.marca);
const {gets, print} = require('./funcoes-auxiliares');

const numerosSorteados = [];
let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numero = gets();
    if (numero > maiorValor){
        maiorValor = numero;
    }
    numerosSorteados.push(numero);
}

print(maiorValor);

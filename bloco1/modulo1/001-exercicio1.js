/*
    Calcular o valor de uma viagem

    1. Preço do combustível
    2. Gasto médio de combustível do carro por KM
    3. Distância em KM da viagem
*/

var precoCombustivel = 5.79;
const litrosPorKm = 10;
var distanciaViagem = 3000;

const litrosConsumidos = distanciaViagem/litrosPorKm;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));


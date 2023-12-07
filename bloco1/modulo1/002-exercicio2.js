/*
    Calcular preço de uma viagem:

    Preço do etanol;
    Preço da gasolina;
    Tipo de combustível no carro;
    Gasto médio de combustível por KM;
    Distância em KM da vaigem;
*/

var precoGasolina = 6.66;
var precoEtanol = 5.79;
const litroPorKm = 10; 
const tipoCombustivel = "etanol";
var distanciaViagem = 100;

const combustivelConsumido = distanciaViagem/litroPorKm;

    if (tipoCombustivel==="etanol"){
       var valorGasto = combustivelConsumido * precoEtanol;
    }else{
        var valorGasto = combustivelConsumido * precoGasolina;
    }

    console.log(valorGasto.toFixed(2));



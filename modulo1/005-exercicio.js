/*
    Pagamento de um produto, considerando o preço normal e forma de pagamento.

    Formas de pagamento:
        - À vista Débito = 10% de desconto
        - À vista Dinheiro ou Pix = 15% de desconto
        - Em duas vezes, preço padrão = sem juros
        - Acima de duas vezes = preço padrão + 10% de juros
*/

const precoProduto = 100;
var formaDePagamento= 4;

//Forma de pagamento 1
var debito = precoProduto - (precoProduto*0.1)
//Forma de pagamento 2
var dinheiroPix = precoProduto - (precoProduto*0.15)
//Forma de pagamento 3
var parceladoDuasVezes = precoProduto
//Forma de pagamento 4
var parceladoMaisVezes = (precoProduto)+(precoProduto*0.1)

if (formaDePagamento=== 1){
    formaDePagamento = "Débito";
    var pagamento = debito;
}else if (formaDePagamento === 2){
    formaDePagamento= "Dinheiro ou Pix";
    pagamento = dinheiroPix;
}else if (formaDePagamento === 3){
    formaDePagamento = "Parcelado 2x";
    pagamento = parceladoDuasVezes;
}else{
    formaDePagamento ="Parcelado em mais de 2x"
    pagamento = parceladoMaisVezes;
}

console.log(formaDePagamento)
console.log(pagamento)

function AplicarDesconto(preco, desconto){
   desconto = desconto/100;
   return (preco - (preco*desconto))
}

function AcrescentarJuros(preco, acrescimo){
   acrescimo = acrescimo/100;
   return (preco+(preco*acrescimo))
}

(function (){
   var formaDePagamento = 2;
   var valorPagamento = 100;

   if (formaDePagamento=== 1){
      formaDePagamento = "Débito";
      console.log(AplicarDesconto(valorPagamento, 10));

  }else if (formaDePagamento === 2){
      formaDePagamento= "Dinheiro ou Pix";
      console.log(AplicarDesconto(valorPagamento, 15));   
  }else if (formaDePagamento === 3){
      formaDePagamento = "Parcelado 2x";
      console.log(valorPagamento)
  }else{
      formaDePagamento ="Parcelado em mais de 2x"
      console.log(AcrescentarJuros(valorPagamento, 10));
      
  }

   console.log(formaDePagamento)
})();
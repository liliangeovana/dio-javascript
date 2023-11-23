# FUNÇÕES NO JAVASCRIPT


## Conceitos Básicos

- **Funções** são trechos de códigos que podem ser requisitadas, posteriormente, em qualquer momento do código.

- Declarando uma função:
    ~~~javascript
        function identificador(){
        //...
        }
    ~~~

- Nos `()` são inseridos os parâmetros, valores, com que essa função vai trabalhar.

- Podem retornar valores:
    ~~~javascript
        function quadrado(numero){
            return numero**2;
        }

        var potencia = quadrado(10);
        console.log(potencia);
    ~~~
    >No terminal: 100
    - Nesse exemplo, o valor retornado pela função `quadrado()` é retornado para dentro da variável `potência`.

## Como organizar funções

- Criar um código principal, o qual é identificado:
    ~~~javascript
        function main(){
            //Bloco de código principal
        }
        main();
    ~~~
- Anteriormente a função `main`, criar as demais funções auxiliares.

- Se chamarmos uma função `console.log(main)`, ela se comporta como um valor (como se fosse um número, um texto, por exemplo).
    - Por isso, uma função pode ser passada como parâmetro.

- Usando toda uma função como um valor:
    ~~~~javascript
        (function quadrado(){
           numero = 10
           quadrado = numero**2
        })();
    ~~~~ 
    > Colocando a função em `()`, ela é toda resolvida e adquire o valor da sua solução
    - Exemplo:
        ~~~
            10 * (10+2)
        ~~~
        > Nesse exemplo, o `()` recebe o valor 12. O mesmo acontece com a função anteriormente.
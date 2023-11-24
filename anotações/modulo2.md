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
        (function main(){
           numero = 10
           quadrado = numero**2
        })();

        main();
    ~~~~ 
    > Colocando a função em `()`, ela é toda resolvida e adquire o valor da sua solução.
    - Exemplo:
        ~~~
            10 * (10+2)
        ~~~
        > Nesse exemplo, o `()` recebe o valor 12 antes de resolver o resto da equação. O mesmo acontece com a função anteriormente.

- Denomina-se **Função Imediatamente Invocada**, pois:

    - Os `()` após o final, significa que a função é resolvida e, em seguida, já executa a si mesmo (invocada imediatamente). Logo, não precisa chamá-la posteriormente.

        > Ou seja, a função é criada e já executada. 

    ~~~~javascript
        (function main(){
           numero = 10
           quadrado = numero**2
        })();
    ~~~~ 
    - Também é possível tirar o nome da função, ficando uma função não nomeada.

      ~~~~javascript
        (function (){
           numero = 10
           quadrado = numero**2
        })();
    ~~~~ 

- Assim, essa função só existe dentro dos `()` em que ela se encontra, não podendo mais ser chamada posteriormente.

- Muito utilizado em Desenvolvimento Web.
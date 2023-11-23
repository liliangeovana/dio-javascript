# MÓDULO 1
### 1. Variáveis e Operadores
- Declarando Variáveis
- Exemplo de declaração e escrita o console
-  
2. Estruturas Condicionais

# Introdução

- Executando arquivo JS no terminal:
    > node nome_arquivo.js

- Comando para imprimir no console
    > console.log('')

# Variáveis e Operadores

### Declarando Variáveis

- Há três tipos de declaração de variáveis:

1. var
    > Declara uma variável global.
    - Ex.:
        ~~~javascript
        var variavel_global = x;
        ~~~
2. let
    > Declara uma variável local de escopo do bloco.
      - Ex.:
        ~~~javascript
        let variavel_local = y;
        ~~~

3. const
    > Declara uma constante de escopo de bloco, apenas de leitura. É uma constante, logo seu valor não pode ser alterado posteriormente.
    - Ex.:
        ~~~javascript
        const pi = 3,14;
        ~~~

##### Exemplo de declaração e escrita o console
~~~ javascript     
var numero  = 10;
console.log(x);
 ~~~  

### Tipos de Operadores

1. Atribuição (=)
2. Igual (===)
3. Soma (+)
4. Subtração (-)
5. Multiplicação (*)
6. Divisão (/)
7. Resto divisão (%)

- (==) VS (===)

    O `==` ignora o tipo da variável declarada. Faz uma conersão implicita.
    - Exemplo
        ~~~ javascript     
        const numeroPar = (2 % 2) === '0';
        ~~~ 
    > No terminal, mesmo o '0' sendo uma String ele ainda irá analisar a igualdade. Retornando true.

##### Arredondando um valor:
~~~ javascript     
console.log(x.toFixed(2));
 ~~~ 
> Esse método pega um número, converte para String e o retorna - string - com o número de casas decimais definido.

## Estruturas Condicionais:

##### Boolean 

- Boolean: variável recebe `true` ou `false`.

#### Estrutura IF/ELSE:
~~~javascript
        if(){
            //...
        }else if(){
            //...
        }else{
            //...
        }
~~~



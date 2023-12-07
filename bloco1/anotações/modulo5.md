# Importação e Exportação com JavaScript

- Considerando um arquivo `main.js` que será o executado no terminal e um outro arquivo, separado, que possui funcionalidades que preciso `importar` para o meu principal, faz-se:

    - **main.js**

    ~~~javascript
    const funcoes = require('./funcoes-auxiliares');

    //A função require() existe dentro do próprio node.
    //funcoes que recebe o objeto.
    ~~~

- Porém, ao usar o `require`, é feita a `importação` das funcionalidedes do arquivo desejado e que precisam, paralelamente, estar sendo também `exportados`

    - **funcoes-auxiliares.js**

    ~~~javascript
    function gets() {
    return 10;
    }

    function print(texto) {
    console.log(texto);
    }  
    
    //Exportando as funções
    module.exports = { gets, print };
    ~~~

## Object Destructuring

- Object Destructuring é destruir o objeto.
- Ao destruí-lo, os atributos definidos nos `{}` recebem as funcionalidades.

    - Exemplo:
    1. Anteriormente:
    ~~~javascript
    const funcoes = require('./funcoes-auxiliares');

    console.log(funcoes.gets());
    ~~~
    > No terminal: 10

    2. Com Object Destructuring
    ~~~javascript
    const {gets, print} = require('./funcoes-auxiliares');

    console.log(gets());
    ~~~
    > No terminal: 10
# Criando Objetos e Classes

## Declaração de um Objeto Literal

- `const/var/let nomeObjeto = {}`
- Um objeto, em JavaScript, é um condição dinâmica de chave e valor.
- Exemplo:
~~~javascript
    const fulano = {
        nome: "Fulano";
        idade: 20;
    }

    console.log(pessoa.nome);
    console.log(pessoa.idade);
    console.log(pessoa);
~~~

> No terminal: Fulano | 20 | { nome: 
'Fulano", idade: 20 }

- Este é um objeto literal, criado sem o uso de uma Classe. 

- Por ser dinâmico, é possível incrementar e/ou remover valores do objeto.

~~~javascript
    const fulano = {
        nome: "Fulano";
        idade: 20;
    }
    
    delete pessoa.nome; 

    pessoa.altura = 1.60;
    console.log(pessoa);
~~~
> No terminal: { idade: 20, altura: 1.69 }

## Métodos

- São funções criadas dentro de um objeto.
- Por estarem dentro de um objeto, elas podem usar os valores desse objeto. Para isso, refere-se aos valores com a palavra `this`, que assume o valor daquele objeto.

~~~javascript
    //OBJETO PESSOA
    const fulano = {
        nome: "Fulano";
        idade: 20;

        //MÉTODO DESCREVER
        descrever: function(){
            console.log (`Meu nome é: ${this.nome} e minha idade é ${this.idade}`);
        }
        //
    }
    
    pessoa.descrever();
~~~
> No terminal: Meu nome é: Fulano e minha idade é 20

#### Acessando Dinamicamente Valores de um Objeto

~~~javascript
    const fulano = {
        nome: "Fulano";
        idade: 20;
    }
    
    console.log(pessoa['nome']);
    pessoa['nome'] = "Sicrano";
    console.log(pessoa['nome']);
~~~
> No terminal: Fulano | Sicrano

## Classes
- Considerando o objeto `fulano` como um modelo de pessoa, se eu desejar outro objeto com as mesmas características não seria prático repeti-las.

- Assim, considerando os atributos comuns aos objetos `pessoas`. Cria-se a classe para receber esses atributos.

- Dessa maneira, a `Classe` define os atributos que caracterizam os objetos que serão **instanciados** (criados).

~~~javascript
    class Pessoa {
        nome;
        idade;

        descrever(){
            console.log (`Meu nome é: ${this.nome} e minha idade é ${this.idade}`);
        }
    }

    // Instanciando o objeto fulano
    const fulano = new Pessoa();
    fulano.nome = 'Fulano';
    fulano.idade = 20;

    // Instanciando o objeto sicrano
    const sicrano = new Pessoa();
    sicrano.nome = 'Sicrano';
    sicrano.idade = 50;

    fulano.descrever();
    sicrano.descrever();
~~~

- No exemplo do IMC
    - Classe Pessoa com os atributos: peso e altura
    - Método para calcular o IMC.

## Instâncias com Construtor
- No exemplo da `classe Pessoa`, considera-se que para instanciar um novo `objeto pessoa` é obrigatório ter o `nome` e a `idade`.
    - Da forma que se encontra, não é obrigatório, pois posso remover essas informações.

~~~javascript
    class Pessoa {
        nome;
        idade;

        descrever(){
            console.log (`Meu nome é: ${this.nome} e minha idade é ${this.idade}`);
        }
    }

    // Instanciando o objeto fulano sem definir os dados
    const fulano = new Pessoa();

    // Instanciando o objeto sicrano sem definir os dados
    const sicrano = new Pessoa();
    
    fulano.descrever();
    sicrano.descrever();
~~~

- Dessa forma, podemos usar o método `constructor()`
    - Ele define o que acontecerá quando um novo objeto é instânciado.

~~~javascript
    class Pessoa {
    nome;
    idade;

    constructor(){
        this.nome = "CONSTRUCTOR";
        this.idade = 0;
    }

    descrever() {
        console.log (`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const fulano = new Pessoa();
const sicrano = new Pessoa();


fulano.descrever();
sicrano.descrever();
~~~
~~~
> No terminal: 
//fulano
Meu nome é CONSTRUCTOR e minha idade é 0 
//sicrano
Meu nome é CONSTRUCTOR e minha idade é 0
~~~

- Entre os `()` do `constructor()` posso receber parâmetros.

~~~javascript
    class Pessoa {
    nome;
    idade;

    constructor(nomeParametro, idadeParametro){
        this.nome = nomeParametro;
        this.idade = idadeParametro;
    }

    descrever() {
        console.log (`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
~~~

- Assim, ao instânciar o objeto, já define-se os parâmetros.

~~~javascript
    const fulano = new Pessoa('Fulano', 10);
    fulano.descrever();
~~~
> No terminal: Meu nome é Fulano e minha idade é 10

- Também pode-se definir novos atributos e inseri-los no construtor sem necessariamente passá-lo como parâmetro:
~~~javascript
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nomeParametro, idadeParametro){
        this.nome = nomeParametro;
        this.idade = idadeParametro;
        this.anoDeNascimento = 2022-idadeParametro;
    }

    descrever() {
        console.log (`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const fulano = new Pessoa('Fulano', 23);
console.log(fulano);
~~~

1. No exemplo é definido o atributo `anoDeNascimento`.
2. No construtor, ele é definido pelo ano_atual menos o parâmetro da idade.
3. Ao exibir - console.log - o objeto `fulano`:
    > No terminal: Pessoa { nome: 'Fulano', idade: 23, anoDeNascimento: 1999 }

## Funções recebendo Objetos
- Digamos que eu queira fazer a comparação de idades entre duas pessoa - meus objetos - indicando quem seria o mais velho.

- Tendo a classe `Pessoas`, cria-se a função `compararPessoas(pessoaUm, pessoaDois)`
    - Onde, `pessoaUm` e `pessoaDois` são os objetos que serão instanciados.

~~~javascript
    function compararPessoas(pessoaUm, pessoaDois) {
    if (pessoaUm.idade > pessoaDois.idade){
        console.log (`${pessoaUm.nome} é mais velho que ${pessoaDois.nome}`);
    }else if (pessoaUm.idade < pessoaDois.idade){
        console.log(`${pessoaDois.nome} é mais velho que ${pessoaUm.nome}`);
    }else{
        console.log(`${pessoaUm.nome} e ${pessoaDois.nome} possuem a mesma idade.`);
    }
}

const fulano = new Pessoa('Fulano', 23);
const sicrano = new Pessoa ('Sicrano', 40);

compararPessoas(fulano, sicrano);
~~~

> No terminal: Sicrano é mais velho que Fulano

# Arrays e Estruturas de Repetição em JavaScript

## O que é um Array?

- Podem ser chamados de `listas` ou `vetores`.
- Conjunto de dados heterogêneos unidimensionais.
- Declarados da seguinte forma:

    ~~~javascript
    const nomeVetor = [];
    ~~~
    - Exemplo:

        ~~~javascript
        const nomeAlunos = ['A', 'B', 'C'];
        console.log(nomeAlunos[1])
        console.log(nomeAlunos[3]) //resulta `undefined`, pois não foi declarado valor para essa posição.
        ~~~
        > No terminal: B || undefined

## Adicionando e Removendo Itens de um Array

### Adicionando - método push()

- Ao digitar o `nomeVetor.` aparecerão diversos métodos. Entre eles, temos:
    - `push()`, no qual insere um novo dado no final do vetor.

        ~~~javascript
        const nomeAlunos = ['A', 'B', 'C'];
        nomeAlunos.push('D');
        console.log(nomeAlunos[3]);
        ~~~
        > No terminal: D

### Adicionando - inidicando posição

- Coloca-se o nome do vetor e a posição onde deseja acrescentar o dado:
    ~~~javascript
    const nomeAlunos = ['A', 'B', 'C'];
    nomeAlunos[4] = "E";
    console.log(nomeAlunos[4]);
    ~~~

### Adicionando - dados variados

- Pode-se iniciar o vetor vazio e ir acrescentando conforme a necessidade, além do mesmo receber dados variados.
    ~~~javascript
    const alunos = [];
    alunos.push('A');
    alunos.push('10');
    
        console.log(alunos);
    ~~~
    > No terminal: [ 'A', 10 ]

### Removendo - método pop()

- Ao digitar o `nomeVetor.` aparecerão diversos métodos. Entre eles, temos:
    - `pop()`, no qual remove e imprime o ÚLTIMO dado do vetor.

    ~~~javascript
    const numero = ['1', '2', '3'];
    console.log(numeros);
    console.log(numeros.pop());
    console.log(numeros)
    ~~~

    - No terminal:
        ~~~
        [ '1', '2', '3']
        3
        [ '1', '2']
        ~~~

    - `shift()`, no qual remove e imprime o PRIMEIRO dado do vetor.

    ~~~javascript
    const numero = ['1', '2', '3'];
    console.log(numeros);
    console.log(numeros.shift());
    console.log(numeros)
    ~~~

    - No terminal:
        ~~~
        [ '1', '2', '3']
        1
        [ '2', '3']
        ~~~

#### Retornando tamanho do vetor
- O vetor/lista pode ter um tamanho dinâmico.
    - Para retornar quantas posições tem utiliza-se:  `nomeVetor.length`.

## Estrutura FOR

~~~javascript
for (let contador = 0; contador < vetor.length; contador++){
    //Bloco
}
~~~

- É possível executar o FOR em uma string.

~~~javascript
const nome = "Fulano Sicrano";

for (let i = 0; i < nome.length; i++) {
   console.log(nome[i]);   
}
~~~
    - No terminal:
        F
        u
        l
        a
        n
        o

        S
        i
        c
        r
        a
        n
        o


- Isso acontece pois a `String` é um array de caracteres.

## Como Depurar/Debugar o Código
- Depurar o código é o processo de identificar e corrigir erros, bugs.

1. Marcar, na lateral, no ponto vermelho, onde será a interrupção (breakpoint) e início do passo a passo.
2. Ir para o menu de depuração > Executar e Depurar > NodeJS
    - F10 vai passando linha por linha
    - F5 passa o código todo

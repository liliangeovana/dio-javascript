# Protocolo HTTP e Integração com a PokeAPI

## Introdução a APIs

- Uma API pode ser considerada um servidor, que disponibiliza dados.

#### Como funcionam as requisições:

- Protocolo HTTP: 
    - É um protocolo cliente/servidor.
    > Cliente faz o pedido. Servidor processa e devolve uma resposta.

#### URL, Path e Method:

- URL:
    - É composta por `IP` e `Path`
    ~~~
    https://pokeapi.co/api/v2/pokemon/
    ~~~
    IP/Endereço: https://pokeapi.co
    > O domínio também é um IP, pois é convertido em um endereço de números pelo DNS.

    PATH: /api/v2/pokemon/
    > É a identificação do queremos trazer do servidor.

- Method:
    - Sempre que é feita uma requisição pro servidor, ela tem um tipo:
    1. `GET` : se der um GET na url, o servidor entende que quero buscar o recurso.
    2. `POST`: se a API estiver seguindo os princípios de REST (padrão de projeto API), esse método indica que quero inserir um novo item.
    3. `PUT` : atualizar um item.
    4. `DELETE` : deletar um item. 

## Path Params e Query String

- Para poder fazer uma requisição ao servidor, buscando um recurso (GET), em determinado ponto é necessário fornecer dados ao servidor para que ele possa retornar.

- Há várias formas de se passar dados: 
    - Pelo PATH:
    ~~~
    https://pokeapi.co/api/v2/pokemon/${id}
    ~~~
    O atributo do `id`, passado diretamente no PATH, é dinâmico.

    - Pela Query String:
        - É uma forma de filtrar a pesquisa de um determinado recurso.
        - Sintaxe: 
            ~~~
            https://pokeapi.co/api/v2/pokemon?type=grass&name=i
            ~~~
            > Tudo depois do `?` é uma Query String

            > No exemplo, há dois filtros: tipo grass e nomes que comecem com i.

## Header
- Configuração da requisição.

## Body e Status Code

- Body:
    - Dependendo do método que esteja sendo utilizado na requisição, há p `body` - corpo - da minha requisição, que é o dado que desejo que trafegue.
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
    - Por exemplo, se desejo enviar para cadastro informações no formato JSON, no header faço essa configuração.

## Body e Status Code

- Body:
    - Dependendo do método que esteja sendo utilizado na requisição, há o `body` - corpo - da minha requisição, que é o dado que desejo que trafegue.

    - Método GET: não tem um body na requisição, pois a sua transferência de dados se dá pelo path e/ou header.

    -  Método POST: Desejando inserir um novo dado, o envio dos dados a serem cadastrados se dá através do body.
        Exemplo:

            
            //Request Headers
                content-type: application/json

            //Body
                {
                    "name": "AAA"
                }
    
    - O body pode ter tanto na requisição quanto na resposta (nesse cenário o GET já tem body).

- Status Code:
    - É uma resposta do servidor indicando o que aconteceu com a requisição feita. Se ela foi processada, se deu algum problema.
    
    - É um número que o servidor retorna, no qual:
        - Família 200 (200-299): sucesso na resposta.
        - 300 - 399: mensagem de redirecionamento.
        - 400 - 499: erro do cliente.
        - 500 - 599: erro do servidor.
    
    - Possui o respose header e body.

#### Resumindo:
- Mando para o servidor o que compõe uma requisição:
    - URL
    - Request Method
    - Request Header
    - Request Body

- O servidor devolve:
    - Status Code 
    - Response header: como a resposta está configurada.
    - Response body: a resposta em si.
        > O status code também pode ser uma resposta no body.

## Integrando com a PokeAPI

### Primeira requisição
- Para iniciar a listagem dos pokémons, é necessário pegar o `end-point` que será consumido da PokeAPI.

- No site `https://pokeapi.co/` temos a API, onde:
    - `https://pokeapi.co/api/v2/pokemon/`: faz a listagem dos 20 primeiros pokémons em um arquivo JSON.
        > Após pokemon/ pode-se colocar o nome ou número de um pokémon específico. 
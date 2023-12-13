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
    IP: https://pokeapi.co
    > O domínio também é um IP, pois é convertido pelo DNS.

    PATH: /api/v2/pokemon/
    > É a identificação do queremos trazer do servidor.
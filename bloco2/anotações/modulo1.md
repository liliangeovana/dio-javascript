# Introdução ao Desenvolvimento Web com JavaScript
- Site referência para o design: https://dribbble.com/

### Configuração do ambiente
- Uso de uma biblioteca:

    1. `npm install -g http-server`
    > -g: instalando globalmente, permite acessar essa biblioteca de qualquer lugar, podendo executá-la no terminal.

## Primeiros passos:

### Arquivo index.html:
- Criando arquivo no terminal (linux): `touch nomeArquivo.extensão` 
- Para abrir arquivo no browser: 
1. Indo direto no diretório raiz (não indicado).
2. Usando a funcionalidade da biblioteca instalada.
    > Normalmente, as páginas que estão em produção ficam abaixo de um servidor http (simulado pela biblioteca http-server).
    - Iniciando com a biblioteca
        - No terminal: `http-server ./`
        > Deixando ./ significa ser o diretório atual, no caso: dio-js > bloco2> pokedex

        - Para abrir no navegador com o http-server rodando: `http://localhost:8080`

## Introdução ao JavaScript voltado para Web
- HTML - Linguagem de marcação de texto
- CSS - Estilização 
- JavaScript - Interação/Dinamização

- Tag `<script></script>` ficam no final do arquivo inicialmente.
    - Assim como o node possui seus objetos e estruturas que funcionam para servidor, já para o front haverá também funcionalidades particulares para Web.

- Dois objetos mais utilizados inicialmente, que permitem a manipulação do site:
    - `window`: representa a manipulação do brownser.
    - `document`: representa a manipulação do documento corrente.

- Exemplo: 
    ~~~javascript
    <body>

    //HTML
    <button id="btnTeste" type="button">
        Teste
    </button>

    //JavaScript
    <script>
       const botao = document.getElementById("btnTeste");
       botao.addEventListener("click", function () {
        console.log("Clicou no botão");
       })
    </script>
    </body>
    ~~~
1. Temos o botão no HTML criado pela tag `<button>`.
2. Essa tag possui um `id` (identificação única).
3. No `script`, cria-se uma variável `botao` que recebe:
    - `document` - pois estou manipulando um item do meu documento, não no brownser.
    - `getElementById` - puxando, pelo id, qual elemento desejo inserir na variável.
4. `.addEventeListener` - quando acontecer um evento, no caso, o evento "click", é executada a funtion() que, no exemplo, exibe a mensagem "Clicou no botão".

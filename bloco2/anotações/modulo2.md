# HTML/CSS PARA LISTAGEM DE POKÉMON

## Adicionando Normalize CSS:

- Nos navegadores, pode ocorrer um problema na interpretação do CSS, pois cada browser tem um estilo padrão definido.

- Assim, é importante inserir um `normalizer`, pois, ele é responsável por padronizar todo o estilo inicial.

- Há vários tipos de normalizer, o utilizado no projeto: `https://necolas.github.io/normalize.css/`
    - No lugar de instalar, no projeto foi inserido com cdn: um servidor que todos podem utilizar.
    `https://cdnjs.com/libraries/normalize`

> Ao desenvolver para Web, pode acontecer do navegador gaurdar cache. Assim, na ferramenta do desenvolvedor (inspecionar) > network > desabilitar cache.

## Organizando o projeto
- Criando a pasta `assets`: nela serão inseridos os arquivos de imagens, css e javascript.
1. Pasta `css`:
    - Inicialmente com um arquivo de estilização global, mas que será refatorado posteriormente para organização.
    - Tendo o arquivo `global.css`, para importá-lo para o HTML:
        - Abaixo do título (<>title</>), digitar link (link:css):
        ~~~html
        <link rel="stylesheet" href="./caminho até o arquivo">
        ~~~

2. Pasta `javascript`:
    - Inicialmente com o arquivo main (principal).
    - Tendo o arquivo `main.js`, para importá-lo para o HTML:
        - Acima do final do body (</>body<>)
        ~~~html
        <script src="./caminho até o arquivo"></script>
        ~~~
## Adicionando uma fonte

- CDN utlizada: `Google Fonts`
- Fonte selecionada: Roboto
- Seleciona as fontes desejadas e copia o link para baixo do `<title>`

## Estilização inicial

1. No css, o padding da class `content` é de 1rem , pois é uma medida mais maleável do que utilizar o pixel.
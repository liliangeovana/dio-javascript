const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

// FETCH RETORNA UMA PROMISE (PROMESSA DE UM RESULTADO)
// É UM PROCESSO ASSÍNCRONO, POIS, AO RETORNAR UMA REQUISIÇÃO É UM PROCESSO DE MUITAS ETAPAS E QUE PODE DEMORAR PARA SER RETORNADO.
fetch(url)

//then: assim que a promessa for retornada, disponibilizada, realiza-se a função para mexer com os dados
.then((response) =>response.json())
.then((jsonBody) => console.log(jsonBody))
//em caso de erro
.catch((error)=> console.error(error)
)
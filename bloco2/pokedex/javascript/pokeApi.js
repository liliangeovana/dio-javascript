const PokeAPI = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.picture = pokeDetail.sprites.other["official-artwork"].front_default

    return pokemon
}


PokeAPI.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

PokeAPI.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) =>  response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(PokeAPI.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then ((pokemonDetails) => pokemonDetails)
}
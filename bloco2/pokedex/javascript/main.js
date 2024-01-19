function convertTypesToList(pokemonTypes){
    return pokemonTypes.map((typeSlote)=> `<li class="type">${typeSlote.type.name}</li>`)
}
function convertPokemonToList(pokemon) {
        const caminho = "official-artwork"
        return `
        
        <li class="pokemon">
                    <span class="number">#${pokemon.id}</span>
                        <span class="name">${pokemon.name}</span>
                            <div class="details">
                                <ol class="types">
                                    ${convertTypesToList(pokemon.types).join(' ')}
                                </ol>
                                <img src="${pokemon.sprites.other.caminho.front_default}" alt="${pokemon.name}"/>
                            </div>           
                    </li>`    
}

const pokemonList = document.getElementById('pokemonList');
      
PokeAPI.getPokemons().then((pokemonCount = []) => {

    const newList = pokemonCount.map((pokemon) => convertPokemonToList(pokemon));

    const newHTML = newList.join('');

    pokemonList.innerHTML += newHTML

})
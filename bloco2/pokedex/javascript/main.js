
function convertPokemonToList(pokemon) {
        return `
        
        <li class="pokemon">
                    <span class="number">#001</span>
                        <span class="name">${pokemon.name}</span>
                            <div class="details">
                                <ol class="types">
                                    <li class="type">grass</li>
                                        <li class="type">poison</li>
                                </ol>
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.name}"/>
                            </div>           
                    </li>`    
}

const pokemonList = document.getElementById('pokemonList');
      
PokeAPI.getPokemons().then((pokemonCount = []) => {

    const newList = pokemonCount.map((pokemon) => convertPokemonToList(pokemon));

    const newHTML = newList.join('');

    pokemonList.innerHTML += newHTML

})
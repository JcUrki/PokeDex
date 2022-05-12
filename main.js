/**
 * @constant pokemonContainer
 * @description recupera el div pokemon-container
 * */
/* YOUR CODE HERE  */
    const pokemonContainer= document.querySelector(".pokemon-container");

/**
 * @function fetchOnePokemon(id)
 * @param: id
 * El id se debe concatenar a la url: https://pokeapi.co/api/v2/pokemon/
 * Realiza un fetch a la @api con la función anterior
 * Los datos convertidos a @json se enviarán a la función @function createPokemonCard()
*/
/* YOUR CODE HERE  */
function fetchOnePokemon(id){ 
	fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json()) 
    .then(data => createPokemonCard(data)) 
}

/**
 * @function fetchManyPokemons
 * @param number
 * @description Llama a la api X @param number de veces para ver diferentes pokemon
 * */
function fetchManyPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchOnePokemon(i);
    }
}

/**
 * @function createPokemonCard
 * @param pokemon
 * @description Manipula el DOM para crear la tarjeta de Pokémon:
 *  - Crea un div, que será la card del pokemon, y asígnale la @class pokemon-card
 *  - Crea un div y asígnale la @class img-container
 *  - Crea un tag de imagen; En la @api las imágenes aparecen como "sprites", y hay varias para elegir, nosotras escogemos la imagen por defecto (default)
 *  -  Crea un párrafo para el nombre (y convierte la primera letra del pokemon en mayúscula)
 *  -  Crea un tag @link con el texto "More"
 *  -  Añade los elementos creados a la card
 *  -  Añade la card al DOM
 */
/* YOUR CODE HERE  */
function createPokemonCard(pokemon){
   const card= document.createElement("div");
    card.classList.add("pokemon-card");

    const imgContainer= document.createElement("div");
    imgContainer.classList.add("img-container");

    const sprites= document.createElement("img");
    sprites.src= pokemon.sprites.front_default;

    const name=  document.createElement("p");
    name.classList.add("name");
    name.textContent= pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const link= document.createElement("a");
    link.classList.add("link");
    link.setAttribute ("href", "pokemon.html")
    link.textContent= "More";

    card.appendChild(imgContainer);
    card.appendChild (name);
    card.appendChild(link);
    imgContainer.appendChild(sprites);
    pokemonContainer.appendChild(card);
}

/**
 * @event onload
 * @description Ejecutar la función para llamar a los primeros X pokémons de la API
 * */
window.onload = () => fetchManyPokemons(20);


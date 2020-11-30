const apiUrl = "https://pokeapi.co/api/v2/pokemon";

export function fetchPokemon(pokemonId) {
  return fetch(`${apiUrl}/${pokemonId}`)
    .then((response) => response.json())
    .then((data) => ({
      name: data.name,
      types: data.types.map((t) => t.type)
    }));
}

const url = "https://pokeapi.co/api/v2/";

export async function pokeType(type){
    const res = await fetch(`${url}type/${type}`);
    const data = await res.json()
    
    const pokemons = data.pokemon
        .map(p => ({
        name: p.pokemon.name,
        url: p.pokemon.url,
        id: parseInt(p.pokemon.url.split('/').filter(Boolean).pop())
        }))
        .sort((a, b) => a.id - b.id)

  return pokemons;
}

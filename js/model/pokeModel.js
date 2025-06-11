const url = "https://pokeapi.co/api/v2/";

export async function pokeGen(gen) {
    if(!gen) {
        gen = 1
    }
    
    const res = await fetch(`${url}generation/${gen}`);
    const data = await res.json()

    const pokemons = data.pokemon_species
        .map(p => ({
        name: p.name,
        url: p.url,
        id: parseInt(p.url.split('/').filter(Boolean).pop())
        }))
        .sort((a, b) => a.id - b.id);
  return pokemons;
}

export async function pokeRegion(input) {
    const res = await fetch(`${url}pokedex/${input}`);
    const data = await res.json();
    
    console.log(data)
    const pokemons = data.pokemon_entries
        .map(p => ({
        name: p.pokemon_species.name,
        url: p.pokemon_species.url,
        id: parseInt(p.pokemon_species.url.split('/').filter(Boolean).pop())
        }))
        
  return pokemons;
}


export async function pokeDetails(input){
    const res = await fetch(`${url}pokemon/${input}`);
    const data = await res.json();
    return data;
}


export async function pokeMove(url) {
    const res = await fetch(url);
    return await res.json();

}

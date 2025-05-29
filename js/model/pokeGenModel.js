
export async function pokeGen(gen) {
    if(!gen) {
        gen = 1
    }
    
    const res = await fetch(`https://pokeapi.co/api/v2/generation/${gen}`);
    const data = await res.json();

    const pokemons = data.pokemon_species
        .map(p => ({
        name: p.name,
        url: p.url,
        id: parseInt(p.url.split('/').filter(Boolean).pop())
        }))
        .sort((a, b) => a.id - b.id);
  return pokemons;
}

import { ProcessPoke } from "./processPoke.js";
//retirar los procees

export async function pokeDetails(input){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await res.json();
    
    const abilities = await ProcessPoke.getabilities(data)
    console.log(abilities)
    return data;
}





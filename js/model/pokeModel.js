async function onegen() {

    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    let data = await response.json()
    let general = data.results  
    return general
}


async function pokedetails(object){
   
    let response = await fetch(object.url)
    let data = await response.json()
    let general = data
    return general
}

const poke = {
    onegen,
    pokedetails
}

export default poke;
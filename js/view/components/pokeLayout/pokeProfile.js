
const colorType = {
    normal:     ['#A8A77A', '#ffffff'],
    fire:       ['#EE8130', '#ffffff'],
    water:      ['#6390F0', '#ffffff'],
    electric:   ['#F7D02C', '#000000'],
    grass:      ['#7AC74C', '#ffffff'],
    ice:        ['#96D9D6', '#000000'],
    fighting:   ['#C22E28', '#ffffff'],
    poison:     ['#A33EA1', '#ffffff'],
    ground:     ['#E2BF65', '#000000'],
    flying:     ['#A98FF3', '#000000'],
    psychic:    ['#F95587', '#ffffff'],
    bug:        ['#A6B91A', '#000000'],
    rock:       ['#B6A136', '#000000'],
    ghost:      ['#735797', '#ffffff'],
    dragon:     ['#6F35FC', '#ffffff'],
    dark:       ['#705746', '#ffffff'],
    steel:      ['#B7B7CE', '#000000'],
    fairy:      ['#D685AD', '#000000'],
    default:    ['#A8A77A', '#ffffff']
};

export function pokeProfile(types, abilities, object){

    const section = document.createElement('section')
    section.classList.add('pokeProfile')
  
    const divType = type(types)
    const divAbility = ability(abilities)
    const divInfo = info(object)
 
    section.appendChild(divType)
    section.appendChild(divAbility)
    section.appendChild(divInfo)
    
    return section
}

function type(array){
    const div = document.createElement('div')
    div.classList.add('pokeType')

    array.forEach(element => {
        const span = document.createElement('p')
        const colorValue = Object.keys(colorType).find(key => key === element) || 'default'

        span.textContent = element
        span.style.backgroundColor = colorType[colorValue][0]
        span.style.color = colorType[colorValue][1]

        div.appendChild(span)
    })


    return div
}

function ability(array){
    const div = document.createElement('p')
    div.classList.add('pokeAbility')
    const h3 = document.createElement('h3')
    h3.textContent = 'Abilities: '
    div.appendChild(h3)

    array.forEach(element => {
        const span = document.createElement('span')
        span.textContent = element
        div.appendChild(span)
    })
    return div
}

function info(object){
    const div = document.createElement('div')
    div.classList.add('pokeInfo')

    const height = document.createElement('p')
    height.innerHTML = `<strong>Height: </strong>${object.height} m`

    const weight = document.createElement('p')
    weight.innerHTML = `<strong>Weight: </strong>${object.weight} kg`

    const base_experience = document.createElement('p')
    base_experience.innerHTML = `<strong>Base Experience: </strong>${object.base_experience}`

    div.appendChild(height)
    div.appendChild(weight)
    div.appendChild(base_experience)

    return div
}



/*
    <section class="pokeProfile">
        <div class="poketype">
            <h3>Type</h3>
            <span>Poison</span>
            <span>Grass</span>
        </div>

        <div class="pokeAbility">
            <h3>Abilities</h3>
            <span>Overgrow</span>
            <span>Chlorophyll</span>
        </div>

        <div class="pokeInfo">
            <h3>Info</h3>
            <span>Height: 0.7 m</span>
            <span>Weight: 6.9 kg</span>
            <span>Base experience: 64</span>
        </div>
    </section>
            */
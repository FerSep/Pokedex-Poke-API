          
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
    div.classList.add('poketype')
    const h3 = document.createElement('h3')
    h3.textContent = 'Type'

    div.appendChild(h3)
    array.forEach(element => {
        const span = document.createElement('span')
        span.textContent = element
        div.appendChild(span)
    })
    return div
}

function ability(array){
    const div = document.createElement('div')
    div.classList.add('pokeAbility')
    const h3 = document.createElement('h3')
    h3.textContent = 'Abilities'
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
    const h3 = document.createElement('h3')
    h3.textContent = 'Info'
    div.appendChild(h3)

    const height = document.createElement('p')
    height.textContent = `Height: ${object.height} m`

    const weight = document.createElement('p')
    weight.textContent = `Weight: ${object.weight} kg`

    const base_experience = document.createElement('p')
    base_experience.textContent = `Base experience: ${object.base_experience}`

    div.appendChild(height)
    div.appendChild(weight)
    div.appendChild(base_experience)

    return div
}
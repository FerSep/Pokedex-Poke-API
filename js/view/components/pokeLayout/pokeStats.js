
const colorStat = { 
    'hp': '#e60000',
    'attack': '#cc7a00',
    'defense': '#d4b200',
    'special-attack': '#0055ff',
    'special-defense': '#4CAF50',
    'speed': '#cc0066' 
}

export function pokeStats(array){

    const section = document.createElement('section')
    section.classList.add('pokeStats')
  
    const h3 = document.createElement('h3')
    h3.textContent = 'Stats'

    const stat = document.createElement('ul')

    section.appendChild(h3)
    array.forEach(element => {
        const li = document.createElement('li')
        
        const name = document.createElement('span')
        name.textContent = element.name + ': '

        name.style.color = colorStat[element.name]

        const baseStat = document.createElement('p')
        baseStat.textContent = element.base_stat

        li.appendChild(name);
        li.appendChild(baseStat);

        stat.appendChild(li)
    });

    section.appendChild(stat)
 
    return section
}
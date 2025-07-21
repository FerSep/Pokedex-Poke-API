
export function pokeNav(){
    const nav = document.createElement('nav')
    nav.classList.add('pokeNav')

    const profile = document.createElement('input')
    profile.type = 'radio'
    profile.classList.add('navElement')
    profile.id = 'profile'
    profile.name = 'nav'
    profile.value = 'profile'
    profile.checked = true

    const stats = document.createElement('input')
    stats.type = 'radio'
    stats.classList.add('navElement')
    stats.id = 'stats'
    stats.name = 'nav'
    stats.value = 'stats'

    const moves = document.createElement('input')
    moves.type = 'radio'
    moves.classList.add('navElement')
    moves.id = 'moves'
    moves.name = 'nav'
    moves.value = 'moves'

    const labelProfile = document.createElement('label')
    labelProfile.setAttribute('for', 'profile')
    labelProfile.textContent = 'Profile'
    const labelStats = document.createElement('label')
    labelStats.setAttribute('for', 'stats')
    labelStats.textContent = 'Stats'
    const labelMoves = document.createElement('label')
    labelMoves.setAttribute('for', 'moves')
    labelMoves.textContent = 'Moves'

    
    nav.appendChild(profile)
    nav.appendChild(labelProfile) 
    nav.appendChild(stats)
    nav.appendChild(labelStats)
    nav.appendChild(moves)
    nav.appendChild(labelMoves) 

    return nav
}
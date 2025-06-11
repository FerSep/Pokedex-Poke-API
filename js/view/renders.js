import { card } from './components/card.js'
import {pokeHeader} from './components/pokeLayout/pokeHeader.js'
import {pokeProfile} from './components/pokeLayout/pokeProfile.js'
import {pokeStats} from './components/pokeLayout/pokeStats.js'
import {pokeMoves} from './components/pokeLayout/pokeMoves.js'

import {pokeNav} from './components/pokeNave.js'

export function renderList(pokemon){
   
    const pokeList = document.getElementById("pokelist")
    pokemon.forEach(poke => {     
        pokeList.appendChild(card(poke.name, poke.id))
    })
}

export function renderHeader(index, name, url){
   
    const pokeCard = document.querySelector('.pokeCard')
    console.log(url)
    pokeCard.appendChild(pokeHeader(index, name, url))
    pokeCard.appendChild(pokeNav())
}

export function renderInfo(types, abilities, object){
    const pokeCard = document.querySelector('.pokeCard')  
    pokeCard.appendChild(pokeProfile(types, abilities, object))
}

export function renderStats(array){
    const pokeCard = document.querySelector('.pokeCard')
    pokeCard.appendChild(pokeStats(array))
}

export function renderMoves(array){
    const pokeCard = document.querySelector('.pokeCard')
    pokeCard.appendChild(pokeMoves(array))
}
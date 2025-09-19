import { card } from './components/card.js'
import {pokeHeader} from './components/pokeLayout/pokeHeader.js'
import {pokeProfile} from './components/pokeLayout/pokeProfile.js'
import {pokeStats} from './components/pokeLayout/pokeStats.js'
import {pokeMoves} from './components/pokeLayout/pokeMoves.js'
import { notFound } from './components/notFound.js'
import {pokeNav} from './components/pokeNave.js'

 const pokeList = document.getElementById("pokelist")
 const pokeCard = document.querySelector('.pokeCard')

 export function cleanPoke(){
    pokeCard.innerHTML = ""
 }

export function renderList(pokemon){
    pokeList.style.display = 'flex'
    pokeList.innerHTML = ""
    pokemon.forEach(poke => {     
        pokeList.appendChild(card(poke.name, poke.id))
    })
}

export function renderHeader(index, name, url){
    pokeCard.appendChild(pokeHeader(index, name, url))
    pokeCard.appendChild(pokeNav())
}

export function renderInfo(types, abilities, object){
    pokeCard.appendChild(pokeProfile(types, abilities, object))
}

export function renderStats(array){
    pokeCard.appendChild(pokeStats(array))
}

export function renderMoves(array){
    pokeCard.appendChild(pokeMoves(array))
}

export function renderNotFound(){
    pokeCard.innerHTML = ""
    pokeCard.appendChild(notFound())

}

import { renderList, renderHeader, renderInfo, renderStats, renderMoves, renderNotFound, cleanPoke} from "../view/renders.js";
import { ProcessPoke } from "../model/processPoke.js";
import {getPoke} from "./pokeController.js";


export async function getAll(gen){
   const datos = await getPoke.getAll(gen);
    if(!datos){
        console.log('No hay datos');
        return;
    }
    renderList(datos)
}

export async function getRegion(input){
    const res = await getPoke.getRegion(input)
    if(!res) {
        console.log('No hay datos')
        return
    }
    renderList(res)
}

export async function getDetails(input){
    const res = await getPoke.getDetails(input)
    if(!res) {
        console.log('404')
        renderNotFound()
        return
    }

    const base = await getHeader(res)
    const info = await getInfo(res)

    cleanPoke()
    renderHeader(base.id, base.name, base.img)
    renderInfo(info.types, info.abilities, info.object)
    renderStats(await ProcessPoke.getstats(res))
    renderMoves(await ProcessPoke.getmoves(res))
}


export async function changeDiv() {
     const sectionInfo = document.querySelector('.pokeProfile') 
     const sectionStats = document.querySelector('.pokeStats')
     const sectionMoves = document.querySelector('.pokeMoves')

     document.querySelectorAll('input[name="nav"]').forEach((input) => {
        input.addEventListener('change', (e) => {
            const seleccionado = e.target;
            sectionInfo.style.display = 'none';
            sectionStats.style.display = 'none';
            sectionMoves.style.display = 'none';

            if (seleccionado.id === 'profile') {
                sectionInfo.style.display = 'flex';
            } else if (seleccionado.id === 'stats') {
                sectionStats.style.display = 'block';
            } else if (seleccionado.id === 'moves') {
                sectionMoves.style.display = 'block';
            }
            console.log("Elemento seleccionado:", seleccionado.id);
        });
    });
     
}

export async function searchMove(move) {
    const res = await getPoke.searchMove(move)
    if(!res) {
        console.log('No hay datos')
        return
    }
    

}

export async function getType(type){
    const datos = await getPoke.getType(type);
    if(!datos) {
        console.log('No hay datos');
        return;
    }
    renderList(datos)
}
async function getHeader(res){
    
    const base = {
        name: await ProcessPoke.getname(res),
        id: await ProcessPoke.getid(res),
        img: await ProcessPoke.getimg(res),
    }   
    return base
}
async function getInfo(res) {
    const types = await ProcessPoke.gettypes(res)
    const abilities = await ProcessPoke.getabilities(res)
    const object = await ProcessPoke.getinfo(res)
    return {types, abilities, object}
}


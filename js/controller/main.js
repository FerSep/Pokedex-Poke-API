
import { renderList, renderHeader, renderInfo } from "../view/renders.js";
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

export async function getDetails(input){
    const res = await getPoke.getDetails(input)
    if(!res) {
        console.log('No hay datos')
        return
    }

    const sectionInfo = document.querySelector('.pokeProfile') 

    const base = await getHeader(res)
    const info = await getInfo(res)

    renderHeader(base.id, base.name, base.img)

    renderInfo(info.types, info.abilities, info.object)
}

export async function getType(type){
    const datos = await getPoke.getType(type);
    if(!datos) {
        console.log('No hay datos');
        return;
    }
    renderList(datos)
}

async function changeDiv(id) {
    
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
import { pokeGen, pokeDetails, pokeRegion} from "../model/pokeModel.js";
import { pokeType } from "../model/pokeTypeModel.js";

export class getPoke{

    static async getAll(gen){
        const datos = await pokeGen(gen);
        if(!datos) {
            return;
        }
        console.log(datos);
        const pokeList = document.getElementById("pokelist");
        pokeList.innerHTML = "";

        return datos
    }

    static async getDetails(input){
        const res = await pokeDetails(input)
            if(!res) {
                return 
            }
            const pokeCard = document.querySelector('.pokeCard')
            pokeCard.innerHTML = ""
            
            return res
    }

    static async getType(type){
        const datos = await pokeType(type);
        if(!datos) {
            console.log('No hay datos');
            return;
        }
        console.log(datos);
        const pokeList = document.getElementById("pokelist");
        pokeList.innerHTML = "";

        return datos
    }

    static async getRegion(input){
        const res = await pokeRegion(input)
            if(!res) {
                console.log('No hay datos')
                return
            }
            const pokeList = document.getElementById('pokelist')
            pokeList.innerHTML = ""
            
            return res
    }

}
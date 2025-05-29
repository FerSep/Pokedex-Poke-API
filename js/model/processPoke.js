
export class ProcessPoke {
    static async getname(poke){
        return poke.name
    }
    static async getid(poke){
        return poke.id
    }

    static async getimg(poke){
        return poke.sprites.front_default
    }
    
    static async gettypes(poke){
        return poke.types.map(type => type.type.name)
    }

    static async getabilities(poke){
        return poke.abilities.map(ability => ability.ability.name)
    }
    
    static async getinfo(poke){
        const info = {
            height: poke.height,
            weight: poke.weight,
            base_experience: poke.base_experience
        }
        return info
    }
}
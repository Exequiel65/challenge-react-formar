import { POKEMON_TYPE_COLORS } from "../CONSTANTS/colors"
import { IPokemon, Pokemon} from "../Types/interface"

export const getColorType = (pokemon: IPokemon | Pokemon | undefined, indece: number)=>{
    const type = pokemon?.types?.[0].type.name ? pokemon?.types?.[indece].type.name : "normal"
    return POKEMON_TYPE_COLORS[type]
}


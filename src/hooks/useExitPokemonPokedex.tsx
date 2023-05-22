import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { IInitialState } from "../Types/PokemonLes"
import { IPokemon} from "../Types/interface"

export default function useExitPokemonPokedex(id: string | undefined) {
    const [ExistPokedex, setExistPokedex] = useState(false)
    const state:any = useSelector((state: IInitialState) => state)

    useEffect(() => {
        existPokemon(id)
    }, [ExistPokedex])
    
    const existPokemon = (id: string | undefined)=>{
        if (id != undefined) {
            const pokemonList = state?.pokedex?.MyPokemons || []
            const exist = pokemonList.find((p:IPokemon) => p.id == +id)
            setExistPokedex(exist ? true : false);
        }
        


    }
  return {
    ExistPokedex,
    setExistPokedex,
  }
}

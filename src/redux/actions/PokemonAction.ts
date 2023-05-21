import { IPokemon } from '../../Types/interface';
import { types } from "../types/typesReducer";


export const addPokemon = (data:IPokemon): any =>{
    const newPokemon: IPokemon | undefined = data
    const pokemonsStorage = JSON.parse(localStorage.getItem("pokemons") || "[]")
    pokemonsStorage.push(newPokemon)
    localStorage.setItem("pokemons", JSON.stringify(pokemonsStorage))
    return(dispatch:any) =>{
        dispatch({
            type : types.addPokemon,
            payload : newPokemon
        })
    }
    
}


export const deletePokemon = (data: IPokemon): any=>{
    const newPokemon: IPokemon | undefined = data
    const pokemonsStorage = JSON.parse(localStorage.getItem("pokemons") || "[]")
    const newPokemons = pokemonsStorage.filter( (p:IPokemon | undefined) => p?.id != newPokemon.id);
    localStorage.removeItem("pokemons")
    localStorage.setItem("pokemons", JSON.stringify(newPokemons))
    return(dispatch:any) =>{
        dispatch({
            type : types.deletePokemon,
            payload : newPokemons
        })
    } 
}




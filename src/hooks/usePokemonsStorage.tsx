import { useEffect, useState } from 'react';
import { IPokemon } from '../Types/interface';
import { useSelector } from 'react-redux';



export default function usePokemonsStorage() {
    const [Pokemons, setPokemons] = useState<IPokemon[] | never[]>([])
    const state: any= useSelector((state) => state)

    useEffect(() => {
        getPokemonsStorage();
    }, [])
    

    const getPokemonsStorage = ()=>{
        setPokemons(state?.pokedex?.MyPokemons)
        
    }

    return {
        Pokemons
    }
    
}

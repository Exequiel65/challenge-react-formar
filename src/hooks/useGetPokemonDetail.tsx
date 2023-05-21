import { useEffect, useState } from 'react';
import { Pokemon } from '../Types/interface';
import { reqResApi } from '../api/reqResPokeApi';

export default function useGetPokemonDetail(id:string | undefined) {
  const [Pokemon, setPokemon] = useState<Pokemon>();
  const [load, setLoad] = useState<boolean>(true)

  useEffect(() => {
    ( async ()=> await getPokemon())()
  }, [])
  
  const getPokemon = async ()=>{
    try {
        const response = await reqResApi('/pokemon/' + id)
        if (response.status === 200) {
            setLoad(false)
        }
        setPokemon(response.data)
    } catch (error) {
        console.log(error)
    }
  }


  return {
    load,
    Pokemon
  }
}

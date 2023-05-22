/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import { PokemonList } from '../Types/ApiGetList';
import { reqResApi } from "../api/reqResPokeApi";
import axios from 'axios';
import { IPokemon, Pokemon } from "../Types/interface";

export default function useGetPokemons() {
  const [ListPokemon, setListPokemon] = useState<IPokemon[]>();
  const [NextUrl, setNextUrl] = useState<string | null >(null)
  const [TypeSelected, setTypeSelected] = useState<string[]>([])

  useEffect(() => {
    if (!ListPokemon ) {
      ( async ()=> { await loadPokemons() } )()
    }

  }, [ListPokemon, TypeSelected])
  
  const getList = async (urlNext: string | null, limit:number): Promise<PokemonList | undefined > => {
    try {
        const url = `/pokemon?limit=${limit}&offset=0`;
        const resp = await reqResApi.get( urlNext || url )
        if (resp?.status === 200) {
            return resp.data
        }
    } catch (error) {
        console.log(error)
    }
  }

  const getPokemonsByUrl = async(url:string): Promise<Pokemon | undefined> =>{
    let resp;
    try {
        resp = await axios.get(url);
    } catch (error) {
        console.log(error)
    }

    return resp?.data

  }

  const loadPokemons =async () => {
    try {
        const response = await getList(NextUrl, 50)
        setNextUrl(response?.next || null)
        const pokemons: IPokemon[]= ListPokemon || [];
        const pokList = response?.results || []
        for await (const pokemon of pokList) {
            const pokemonDetail = await getPokemonsByUrl(pokemon.url);
            pokemons.push({
                id : pokemonDetail?.id,
                name : pokemonDetail?.name,
                types: pokemonDetail?.types,
                order: pokemonDetail?.order,
                image: pokemonDetail?.sprites?.other?.["official-artwork"].front_default

            })
        }

      setListPokemon([...pokemons])
    } catch (error) {
        console.log(error)
    }
  
  }

  const loadPokemonsFilter =async (more:boolean) => {
    try {
        const response = more ? await getList(NextUrl, 100) : await getList(null, 100)
        
        const pokemons: IPokemon[]= [];
        const pokList = response?.results || []
        for await (const pokemon of pokList) {
            const pokemonDetail = await getPokemonsByUrl(pokemon.url);
            const pokemonsExist = more && ListPokemon?.filter(p => p.id == pokemonDetail?.id) 
            pokemonDetail?.types.forEach(t =>{
              if ( TypeSelected.includes(t.type.name) && !pokemonsExist) {

                pokemons.push({
                    id : pokemonDetail?.id,
                    name : pokemonDetail?.name,
                    types: pokemonDetail?.types,
                    order: pokemonDetail?.order,
                    image: pokemonDetail?.sprites?.other?.["official-artwork"].front_default
    
                })    
              }
            })
        }
        const pokemonstate: IPokemon[] = ListPokemon || []
        more && setListPokemon([...pokemonstate, ...pokemons])
        !more && setListPokemon(pokemons)
    } catch (error) {
        console.log(error)
    }
  
  }


  const loadMore = async ()=>{
    if (TypeSelected.length <= 0) {
      await loadPokemons();
      
    } else {
      await loadPokemonsFilter(true)
    }

  }

  const setType = async (type: string)=>{
    const types = TypeSelected;
    types.push(type)
    setTypeSelected(types)
    await loadPokemonsFilter(false)

  }


  return {
    ListPokemon,
    loadMore,
    setType,
    TypeSelected
  }
}

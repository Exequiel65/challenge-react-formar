/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import { PokemonList } from '../Types/ApiGetList';
import { reqResApi } from "../api/reqResPokeApi";
import axios from 'axios';
import { IPokemon, Pokemon } from "../Types/interface";

export default function useGetPokemons() {
  const [ListPokemon, setListPokemon] = useState<IPokemon[]>();
  const [NextUrl, setNextUrl] = useState<string | null >(null)

  useEffect(() => {
    ( async ()=> { await loadPokemons() } )()
  }, [])
  
  const getList = async (urlNext: string | null): Promise<PokemonList | undefined > => {
    try {
        const url = `/pokemon?limit=20&offset=0`;
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
        const response = await getList(NextUrl);
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
  return {
    ListPokemon
  }
}

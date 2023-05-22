import { IInitialState } from '../../Types/PokemonLes';
import { types } from '../types/typesReducer';


const pokemonsStorage = JSON.parse(localStorage.getItem("pokemons") || "[]")

const initialState : IInitialState = {
    MyPokemons: pokemonsStorage
};

const MyPokemonsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.addPokemon:
            return {
                ...state,
                MyPokemons : [
                    ...state.MyPokemons,
                    action.payload
                ]
            }
        case types.deletePokemon:
            return {
                ...state,
                MyPokemons : action.payload,
            }
        case types.pokemons:
            return {
                MyPokemons : "",
            }
        default:
            return state
    }
}

export default MyPokemonsReducer;



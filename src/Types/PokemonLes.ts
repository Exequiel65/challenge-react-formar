import { IPokemon, Type } from "./interface";

class PokemonLes{
    id:                       number | undefined;
    name:                     string | undefined;
    types:                    Type[] | undefined;
    order:                    number | undefined;
    image:                    string | undefined;
}


export default PokemonLes


export interface IInitialState{
    MyPokemons : IPokemon[] | never[]
}
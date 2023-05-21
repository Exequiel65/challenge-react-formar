
import List from "../../components/Home/ListPokemons/List";
import Nav from "../../components/Nav/Nav";
import usePokemonsStorage from "../../hooks/usePokemonsStorage";

import "../ListPokemons/ListPokemon.css"
export default function Pokedex() {
  const {Pokemons} = usePokemonsStorage();
  return (
    <>
        <Nav />
        <div className="list-main">
            <List listPokemon={Pokemons} />
      
        </div>
    </>
  )
}
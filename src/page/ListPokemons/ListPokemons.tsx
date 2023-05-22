
import InfiniteScrollComponent from "../../components/Home/ListPokemons/InfiniteScrollList";
import Nav from "../../components/Nav/Nav";

import "./ListPokemon.css"
export default function ListPokemons() {

  return (
    <>
        <Nav />
        <div className="list-main">
            {/* <List listPokemon={ListPokemon} /> */}
            <InfiniteScrollComponent />
      
        </div>
    </>
  )
}

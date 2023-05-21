import List from "../../components/Home/ListPokemons/List";
import Nav from "../../components/Nav/Nav";
import Search from "../../components/Nav/Search";
import useGetPokemons from "../../hooks/useGetPokemons";
import "./ListPokemon.css"
export default function ListPokemons() {
const { ListPokemon } = useGetPokemons();
  return (
    <>
        <Nav />
        <Search />
        <div className="list-main">
            <List listPokemon={ListPokemon} />
      
        </div>
    </>
  )
}

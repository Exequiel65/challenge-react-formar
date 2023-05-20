import { useState } from "react";
import LoadFirst from "../../components/loadFirst/LoadFirst";
import "./home.css"
import List from "../../components/Home/ListPokemons/List";
import Nav from "../../components/Nav/Nav";
import GetPokemons from "../../hooks/GetPokemons";
// eslint-disable-next-line react-hooks/rules-of-hooks

export default function Home() {
  const [load, setfLoad] = useState<boolean>(true)
  const { ListPokemon } = GetPokemons();
  


  if (!load) {
    return <LoadFirst />
  }
  return (
    <>
    <Nav/>
    <div className="home">
      <List listPokemon={ListPokemon} />
    </div>
    </>
  )
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import LoadFirst from "../../components/loadFirst/LoadFirst";
import "./home.css"
import List from "../../components/Home/ListPokemons/List";
import Nav from "../../components/Nav/Nav";
import useGetPokemons from "../../hooks/useGetPokemons";
// eslint-disable-next-line react-hooks/rules-of-hooks

export default function Home() {
  const [load, setfLoad] = useState<boolean>(true)
  const { ListPokemon } = useGetPokemons();
  


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

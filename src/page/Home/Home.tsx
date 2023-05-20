import { useEffect, useState } from "react";
import LoadFirst from "../../components/loadFirst/LoadFirst";
import "./home.css"
import List from "../../components/Home/ListPokemons/List";
import Nav from "../../components/Nav/Nav";
// eslint-disable-next-line react-hooks/rules-of-hooks

export default function Home() {
  const [load, setfLoad] = useState<boolean>(false)


// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  currutine();
}, [load])

const currutine = ()=>{
  setTimeout(() => {
    setfLoad(true)
  }, 2000);
}


  if (!load) {
    return <LoadFirst />
  }

  return (
    <>
    <Nav/>
    <div className="home">
      <List />
    </div>
    </>
  )
}

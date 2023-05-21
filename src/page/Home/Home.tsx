/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import LoadFirst from "../../components/loadFirst/LoadFirst";
import "./home.css"
import Nav from "../../components/Nav/Nav";
import { Link } from 'react-router-dom';
// eslint-disable-next-line react-hooks/rules-of-hooks

export default function Home() {
  const [load, setfLoad] = useState<boolean>(true)
  
  useEffect(() => {
    setTimeout(() => {
      setfLoad(false)
    }, 2000);
  }, [])
  


  if (load) {
    return <LoadFirst />
  }
  return (
    <>
    <Nav/>
    <div className="home">
      <section>
        <h2>Mi Pokedex</h2>
        <div className='body-contain'>
          <h5>Elije un Opcion:</h5>
          <div className='links-contain'>
            <Link className='link-nav' to="/mis-pokemons" >Ir a mi Pokedex</Link>
            <Link className='link-nav'  to="/pokemon" >Ver Pokemons</Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../page/Home/Home';
import { PokemonDetail } from '../page/PokemonDetail/PokemonDetail';
import ListPokemons from '../page/ListPokemons/ListPokemons';
import Pokedex from '../page/Pokedex/Pokedex';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/pokemon",
      element: <ListPokemons />
    },
    {
      path: "/pokemon/:id",
      element : <PokemonDetail />
    },
    {
      path: "/mis-pokemons",
      element : <Pokedex />
    },
  ]);
  
export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


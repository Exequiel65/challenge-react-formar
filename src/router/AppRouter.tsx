import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../page/Home/Home';
import { PokemonDetail } from '../page/PokemonDetail/PokemonDetail';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/pokemon/:id",
      element : <PokemonDetail />
    }
  ]);
  
export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


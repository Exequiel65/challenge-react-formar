import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../page/Home';
import Nav from '../components/Nav/Nav';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/test",
      element : <div>Hola</div>
    }
  ]);
  
export const AppRouter = () => {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  )
}


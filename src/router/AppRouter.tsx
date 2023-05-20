import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../page/Home';


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
    <RouterProvider router={router} />
  )
}


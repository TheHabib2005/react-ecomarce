
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/app-layout'
import Home from './pages/home'

const App = () => {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [

        {
          element: <Home />,
          path: "/"
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
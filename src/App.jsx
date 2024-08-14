import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import ProductsPage , { loader as productsLoader} from './pages/BootCampsPage'
import AboutPage from './pages/AboutPage'
import ContactUsPage from './pages/ContactUsPage'
import Contact from './pages/Contact'
import BootCampsDetailsPage , {loader as productLoader} from './pages/BootCampsDetailsPage'

const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'/about-us',
        element:<AboutPage/>,
      },
      {
        path:'/contact-us',
        element:<ContactUsPage/>,
      },
      {
        path:'/boot-camps',
        element:<ProductsPage/>,
        loader:productsLoader
      },
      {
        path:'/boot-camps/:id',
        element:<BootCampsDetailsPage/>,
        loader:productLoader
      },
      {
        path:'/contact',
        element:<Contact/>,
      }
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

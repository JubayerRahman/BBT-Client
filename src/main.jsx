import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import AddProduct from './Pages/AddProduct/AddProduct.jsx'
import LogIn from './Pages/Login/LogIn.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Registration from './Pages/Registration/Registration.jsx'
import About from './Pages/About/About.jsx'
import Brands from './Pages/Brands/Brands.jsx'
import AuthProvider from './Pages/AuthProvider/AuthProvider.jsx'
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes.jsx'
import SingleProduct from './Pages/SingleProduct/SingleProduct.jsx'
import Updateproduct from './Pages/UpdateProduct/Updateproduct.jsx'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        loader: ()=> fetch("/BrandsData.json"),
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/updateproduct/:id",
        element:<PrivateRoutes><Updateproduct/></PrivateRoutes>,
        loader:({params})=> fetch(`https://assignment-10-server-three-chi.vercel.app/products/${params.id}`)
      },
      {
        path:"/:id",
        element:<Brands/>,
        loader:()=> fetch("https://assignment-10-server-three-chi.vercel.app/products")
      },
      {
        path:"/:id/:id",
        element: <PrivateRoutes><SingleProduct/></PrivateRoutes>,
        loader:({params})=> fetch(`https://assignment-10-server-three-chi.vercel.app/products/${params.id}`)
      },
      {
        path:"/add-product",
        element: <PrivateRoutes><AddProduct/></PrivateRoutes>
      },
      {
        path:"/cart",
        element:<PrivateRoutes><Cart/></PrivateRoutes>,
        loader:()=> fetch("https://assignment-10-server-three-chi.vercel.app/cart")
      },
      {
        path:"/log-in",
        element: <LogIn/>
      },
      {
        path:"/registration",
        element: <Registration/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)

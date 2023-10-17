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

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/add-product",
        element: <AddProduct/>
      },
      {
        path:"/cart",
        element:<Cart/>
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
    <RouterProvider router={routes} />
  </React.StrictMode>,
)

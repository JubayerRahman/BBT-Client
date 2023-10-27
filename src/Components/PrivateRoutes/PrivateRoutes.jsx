import React from 'react'
import { useContext } from 'react'
import { AuthContent } from '../../Pages/AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    // console.log(childern);
    const{user, Loader} = useContext(AuthContent)
    const locationtoGo = useLocation()
    

    if(Loader){
        return (
        <div className='w-full h-full bg-white flex justify-center items-center'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
        )
    }

    if(user == null){
        return <Navigate state={locationtoGo.pathname} to="/log-in"/>
    }
  return children 
}

export default PrivateRoutes

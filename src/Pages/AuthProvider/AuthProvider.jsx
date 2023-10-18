import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../FIrebase/Firebase.config'

export const AuthContent = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [Loader, setLoader] = useState(true)

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoader(false)
      })
      return unSubscribe
    },[])

    const Register =(emai, password)=>{
      setLoader(true)
      return createUserWithEmailAndPassword(auth, emai, password)
    } 

    const SignIn =(email, password)=>{
      setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
      setLoader(true)
      const provider = new GoogleAuthProvider()
      return signInWithPopup(auth, provider)
    }

    const SighOut =()=>{
      setLoader(true)
      return signOut(auth)
    }

    
    const userData ={
        user,
        Loader,
        Register,
        SignIn,
        googleSignIn,
        SighOut
    }
    
  return (
    <AuthContent.Provider value={userData}>
      {children}
    </AuthContent.Provider>
  )
}

export default AuthProvider

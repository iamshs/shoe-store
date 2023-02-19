import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState("")
    //creating user by email & pass
    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
//implementing logout
    const logout = () =>{
        return signOut(auth) ;
    }
//logging in by email pass
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

//logging in by google

const loginProvider = (provider) =>{
   return signInWithPopup( auth,provider )
}

//updating userInfo
    const updateUser = userInfo =>{
        return updateProfile( user , userInfo)
    }
//observing user
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return () => unsubscribe
    } ,[])

  const authInfo = {
  createUser,
  loginUser,
  updateUser,
  loginProvider,
  logout,
  user
  }
    return (
        <AuthContext.Provider value={authInfo}  >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
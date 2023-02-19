import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState("")
    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        return signOut(auth) ;
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = userInfo =>{
        return updateProfile( user , userInfo)
    }

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
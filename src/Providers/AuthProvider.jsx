import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import app from '../Firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth';



export const AuthContext =createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser= (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{

        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);  
    }

    const gitLogin = () =>{
        return signInWithPopup (auth,gitProvider);
    }


    const logOut = () =>{
        return signOut(auth);
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin,
        gitLogin
        
        
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;
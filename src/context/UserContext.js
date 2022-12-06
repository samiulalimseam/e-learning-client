import { createUserWithEmailAndPassword,updateProfile, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,  signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);


export const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const loginWithGoogle = () =>{
            return signInWithPopup(auth, googleProvider);
    }
    const loginWithGitHub = () => {
        return signInWithPopup(auth, gitHubProvider);
    }
    const updateUser = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = ()=>{
        return signOut (auth)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
            console.log('Sate changed ', currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    
    

    const authInfo = {user,updateUser, createUser, login, logOut, loginWithGoogle, loginWithGitHub};
    
    return(

        <AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>
        );
}
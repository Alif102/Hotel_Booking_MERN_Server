/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config";
// import axios from 'axios';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
 

    // Google LogIn
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // Sign in
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=> {
        const unSubscribe =onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })
        return ()=> {
            return unSubscribe();
        }
    },[])

    // useEffect( ()=> {
    //     const unSubscribe =   onAuthStateChanged(auth, currentUser => {
    //         const UserEmail = currentUser?.email || user?.email;
    //         const loggedUser = {email : UserEmail }
    //         setUser(currentUser)
    //         setLoading(false);
    //         if(currentUser){
                
    //             axios.post( 'https://backend-nine-liart.vercel.app/jwt', loggedUser, {withCredentials : true})
    //             .then(res=> {
    //                 console.log('token response', res.data)
    //             })
    //         }
    //         else{
    //             axios.post('https://backend-nine-liart.vercel.app/logout',loggedUser , {
    //                 withCredentials: true
    //             })
    //             .then(res => {
    //                 console.log(res.data);
    //             })
    //         }

    //     })
    //     return ()=> {
    //         unSubscribe();
    //     }

    // } , [user?.email])


    const authentications = {
        googleLogin,
        createUser,
        user,
        loading,
        signIn,
        LogOut,
        handleUpdateProfile
    }



  return (
    <AuthContext.Provider value={authentications}>
        {children}

    </AuthContext.Provider>
  )
}
 
export default AuthProvider

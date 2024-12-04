/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true)

    const createUser = (email, password) => {
        setLoadingUser(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const loginUser = (email, password) => {
        setLoadingUser(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const updateProfileUser = (name, photo) => {
        setLoadingUser(true)
        return updateProfile(auth.currentUser, {
            displayName: name , photoURL : photo 
        })
    };
    const userLogout = () => {
        setLoadingUser(true);
        return signOut(auth);
    };
    const LoginWithGoogle = () => {
        setLoadingUser(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoadingUser(false)
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = {
        user, loadingUser,
        createUser,
        loginUser,
        updateProfileUser,
        userLogout,
        LoginWithGoogle,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
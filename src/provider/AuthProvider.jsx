import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config'
import { GoogleAuthProvider } from 'firebase/auth';
export const AuthContext = createContext(null)
const  googleProvider= new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut=()=>{
        setLoading(true)
        signOut(auth)
       }
        
    // observe auth state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Current value of the current use",currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = { user, createUser, singInUser, logOut, loading, signInWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}
/***
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider componnet as childeren and use it in the middle of the provider
 * 
 * ***/
import { createContext,useContext } from "react";
import { initializeApp } from "firebase/app";


const firebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyAnPfzLEvpHzl8hD0VOkmCMJ5HpmlBLJug",
    authDomain: "med-saathi.firebaseapp.com",
    projectId: "med-saathi",
    storageBucket: "med-saathi.firebasestorage.app",
    messagingSenderId: "553777557133",
    appId: "1:553777557133:web:8d30729f2ca82cddb87cc4"
  };

export const useFirebase = () => {
    return useContext(firebaseContext);
}
const firebaseApp = initializeApp(firebaseConfig); //instance of firebase app and it got connected to firebe apP

export const FirebaseProvider = (props) => {


    return (
    <firebaseContext.Provider value={{signUpUserWithEmailAndPassword,signInUserWithEmailAndPassword,signInWithGoogle}}>
    {props.children}
</firebaseContext.Provider>
    )
}


//COVER APP IN MAIN.JSX WITH THIS PROVIDER
//import "bootstrap/dist/css/bootstrap.min.css" ; in the App.jsx --this is done to add Bootstrap in react 

import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";


const firebaseAuth = getAuth(firebaseApp);

const signUpUserWithEmailAndPassword = (email, password) =>{
  createUserWithEmailAndPassword(firebaseAuth,email,password)
}

// for login 
import {signInWithEmailAndPassword} from "firebase/auth";

const signInUserWithEmailAndPassword = (email,password) => {
  signInWithEmailAndPassword(firebaseAuth,email,password)
}


//google
import {GoogleAuthProvider} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
import {signInWithPopup} from "firebase/auth";

const signInWithGoogle = () => {
  signInWithPopup(firebaseAuth,googleProvider)
}


//NOW TO MAKE A SAFE AUTHENTICATION GO TO FIREBASE AUTHENTICAL SETTING AND ADD = 127.0.0.1  DOMAIN TO SAFE THE GOOGLE OPENING 

//To check whether user is logged in or not


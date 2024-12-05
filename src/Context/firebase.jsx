import { createContext,useContext } from "react";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {signInWithPopup} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";



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
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);

export const FirebaseProvider = (props) => {

  const [user , setUser] = useState(null);

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,(user)=>{
           if(user){
               setUser(user);
           }
               else{
                   setUser(null);
               }
        })
    },[]);

    const signUpUserWithEmailAndPassword = async (email,password) => {
      try{
          const user = await createUserWithEmailAndPassword(firebaseAuth,email,password);
          return user;
      }catch(err){
          return err;
      }
  }

  const signInUserWithEmailAndPassword = async (email,password) => {
    try{
        const signIn = await signInWithEmailAndPassword(firebaseAuth,email,password);
        return signIn;
    }catch(err){
        return err;
    }
}

const signInWithGoogle = async () => {
  try{
      const Goog = await signInWithPopup(firebaseAuth,GoogleProvider);
      return Goog;
  }catch(err){
      return err;
  }
}


    console.log(user);
  
    const handleCreateNewPatient = async (name, age, address) => {
      try {
          if (!user) throw new Error('User must be logged in to create a listing');
                    const docRef = await addDoc(collection(firestore, 'form'), {
              name,
              age,
              address,
              userId: user.uid,
              userEmail: user.email,
              displayName: user.displayName,
              createdAt: new Date().toISOString()
          
              // createdAt: new Date().toISOString()
          });
          
          return { id: docRef.id, success: true };
      } catch (error) {
          console.error('Error creating new listing:', error);
          return { error: error.message, success: false };
      }
  }
 

  const AllPatient = async () => {
    return(
      getDocs(collection(firestore, 'form'))
    )
  }    

  const getPatientById = async (id) => {
    const docRef = doc(firestore, 'form', id);
    const result = await getDoc(docRef);
    return result;
  }

    return (
    <firebaseContext.Provider value={{signUpUserWithEmailAndPassword,signInUserWithEmailAndPassword,signInWithGoogle ,handleCreateNewPatient, AllPatient ,getPatientById}}>
    {props.children}
</firebaseContext.Provider>
    )

}


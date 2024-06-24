
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDM99-tkdWyRwQyzkqNjZ-qPDXeMkA9_WE",
  authDomain: "clone-netflix-f6560.firebaseapp.com",
  projectId: "clone-netflix-f6560",
  storageBucket: "clone-netflix-f6560.appspot.com",
  messagingSenderId: "242371122125",
  appId: "1:242371122125:web:7088492060bac5ca7b6a84"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local", 
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

    
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }       
}

const logout = async () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};

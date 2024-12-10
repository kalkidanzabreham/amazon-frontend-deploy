// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtuR7xx4XTUA97DTaYPP4ssq6aLo1sBdU",
  authDomain: "clone-c663d.firebaseapp.com",
  projectId: "clone-c663d",
  storageBucket: "clone-c663d.firebasestorage.app",
  messagingSenderId: "895094973972",
  appId: "1:895094973972:web:5995af21c226415c002901",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = firebase.firestore()

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "@firebase/firestore";
import firebase from 'firebase/compat/app'
// import * as firebase from "firebase";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import {getAuth , GoogleAuthProvider , } from 'firebase/auth'; 
// import { FacebookAuthProvider } from "firebase/auth";
// import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8c1ELlc3Kz9SEIYx5h7n7Vo_QRkUGq44",
  authDomain: "pepperfry-a4a65.firebaseapp.com",
  databaseURL: "https://pepperfry-a4a65-default-rtdb.firebaseio.com/",
  projectId: "pepperfry-a4a65",
  storageBucket: "pepperfry-a4a65.appspot.com",
  messagingSenderId: "518917201034",
  appId: "1:518917201034:web:5e1eb812af1e3191fc6173"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};
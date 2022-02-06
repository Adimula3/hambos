
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfG7Ta2Ucm5CRvgOXosI4GnJ_kNYnlP0Q",
    authDomain: "hambos-app.firebaseapp.com",
    projectId: "hambos-app",
    storageBucket: "hambos-app.appspot.com",
    messagingSenderId: "150891337837",
    appId: "1:150891337837:web:f1be08a7c6931860820764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore();
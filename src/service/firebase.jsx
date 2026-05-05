// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//variable de entorno
  //apiKey: import.meta.env.VITE_API_KEY,
const firebaseConfig = {
  apiKey: "AIzaSyDhPJ7ItjKZvtUnzSHIgEaXki_HWb6fuXg",
  authDomain: "coder-suplencia-89730.firebaseapp.com",
  projectId: "coder-suplencia-89730",
  storageBucket: "coder-suplencia-89730.firebasestorage.app",
  messagingSenderId: "610867139511",
  appId: "1:610867139511:web:ca35b6ce95a79570060e32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//OBTENER FIRESTORE
export const db = getFirestore(app)
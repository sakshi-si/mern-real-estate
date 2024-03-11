// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f5261.firebaseapp.com",
  projectId: "mern-estate-f5261",
  storageBucket: "mern-estate-f5261.appspot.com",
  messagingSenderId: "768139525213",
  appId: "1:768139525213:web:37bf9c88627962a1a4a1b4",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

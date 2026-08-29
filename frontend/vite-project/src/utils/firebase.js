// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexai-d043f.firebaseapp.com",
  projectId: "cortexai-d043f",
  storageBucket: "cortexai-d043f.firebasestorage.app",
  messagingSenderId: "170518633122",
  appId: "1:170518633122:web:b9fc198aa7aa9c8bf315fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()

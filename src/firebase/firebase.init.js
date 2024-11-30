// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEBWzzZNEZaVvpNdbOLdaY-PmxEco8KLw",
  authDomain: "coffee-store-4d92e.firebaseapp.com",
  projectId: "coffee-store-4d92e",
  storageBucket: "coffee-store-4d92e.firebasestorage.app",
  messagingSenderId: "919796486487",
  appId: "1:919796486487:web:3717f1c30e4a130e926e12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
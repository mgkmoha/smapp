// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXhdoBZ4uw-ucx84UOLIWl38BVFk_UztI",
  authDomain: "smapp-55a98.firebaseapp.com",
  projectId: "smapp-55a98",
  storageBucket: "smapp-55a98.appspot.com",
  messagingSenderId: "217474412121",
  appId: "1:217474412121:web:76e2346ff7d62a24f44b48",
  measurementId: "G-0WJ5GTZR8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
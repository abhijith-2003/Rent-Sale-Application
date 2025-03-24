import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ3gJcdWcn5AHvxU3xaRY6qz8RfB1Bfc8",
  authDomain: "home-rent-sale.firebaseapp.com",
  projectId: "home-rent-sale",
  storageBucket: "home-rent-sale.firebasestorage.app",
  messagingSenderId: "904781612035",
  appId: "1:904781612035:web:264287fe16bff1df9efa36"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged,  signOut  };

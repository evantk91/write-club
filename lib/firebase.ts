import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmcNAK2SyZ-m2JbOMqdHMWWX_KS4gJges",
  authDomain: "write-club-97e2e.firebaseapp.com",
  projectId: "write-club-97e2e",
  storageBucket: "write-club-97e2e.firebasestorage.app",
  messagingSenderId: "178872405728",
  appId: "1:178872405728:web:18605582c2da7606ffca85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
export const auth = getAuth(app);
export const db = getFirestore(app);
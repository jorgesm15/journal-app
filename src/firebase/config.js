// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFGCdQuBPP80J-xx-6TreSzaKnJ6LOZkQ",
  authDomain: "journal-app-45676.firebaseapp.com",
  projectId: "journal-app-45676",
  storageBucket: "journal-app-45676.appspot.com",
  messagingSenderId: "366239325932",
  appId: "1:366239325932:web:62f44d514c71233ee00fc9",
  measurementId: "G-226H72431S",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

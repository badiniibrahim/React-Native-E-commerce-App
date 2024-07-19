// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGyxnDYrKzgKm2_FBOG4xbn0NPGOukoEc",
  authDomain: "business-5cec8.firebaseapp.com",
  projectId: "business-5cec8",
  storageBucket: "business-5cec8.appspot.com",
  messagingSenderId: "892023431451",
  appId: "1:892023431451:web:853cd4be3f5adff12933be",
  measurementId: "G-5MF409R3PB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

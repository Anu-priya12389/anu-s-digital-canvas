// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn9M2ECpuqFE0NxP1xI8RBjEjRPjOxxro",
  authDomain: "anuportfolio-2f848.firebaseapp.com",
  projectId: "anuportfolio-2f848",
  storageBucket: "anuportfolio-2f848.firebasestorage.app",
  messagingSenderId: "770421236262",
  appId: "1:770421236262:web:140ae41038b4e4db8abce7",
  measurementId: "G-VQ46VJ731V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

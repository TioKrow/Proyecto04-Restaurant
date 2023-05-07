// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDo6qZda5-7X4v_mSuM7nGemKWpvEnmZl0",
    authDomain: "pryrestaurant-3a6ce.firebaseapp.com",
    projectId: "pryrestaurant-3a6ce",
    storageBucket: "pryrestaurant-3a6ce.appspot.com",
    messagingSenderId: "730241226894",
    appId: "1:730241226894:web:e383a0cb2202cb3432d1df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
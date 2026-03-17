// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5dv4jWhXoGvKKMxOeTKuSPGMvoMV5e5Y",
    authDomain: "baemi-group.firebaseapp.com",
    projectId: "baemi-group",
    storageBucket: "baemi-group.firebasestorage.app",
    messagingSenderId: "321039439456",
    appId: "1:321039439456:web:42fc37dd1d5fe580a95505",
    measurementId: "G-9JLJ6RF25Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

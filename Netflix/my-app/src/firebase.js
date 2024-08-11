// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeTO1iFG_lu7JlT7N4_cK2FGVogmjmfLo",
    authDomain: "netflix-react-ba887.firebaseapp.com",
    projectId: "netflix-react-ba887",
    storageBucket: "netflix-react-ba887.appspot.com",
    messagingSenderId: "43271136215",
    appId: "1:43271136215:web:3cf7025131bd314a9f6192"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAKNukXjDNKnH4fJ77MG5uBgsJHIcAWmw",
  authDomain: "react-signin-35967.firebaseapp.com",
  projectId: "react-signin-35967",
  storageBucket: "react-signin-35967.appspot.com",
  messagingSenderId: "223865835213",
  appId: "1:223865835213:web:690fc11f3577c68e712384"
};
// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
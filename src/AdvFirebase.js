// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACS7315fU7GgqzvGmUskghIK8v_C52W04",
  authDomain: "devproject-8ab21.firebaseapp.com",
  projectId: "devproject-8ab21",
  storageBucket: "devproject-8ab21.firebasestorage.app",
  messagingSenderId: "685833946696",
  appId: "1:685833946696:web:ff819fbc7b5a70b79b7a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
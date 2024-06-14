// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6RT-J6OuZ1AHLWJ-f2E8pVuQI1NMgx_4",
  authDomain: "tech-store-ch.firebaseapp.com",
  projectId: "tech-store-ch",
  storageBucket: "tech-store-ch.appspot.com",
  messagingSenderId: "591117465811",
  appId: "1:591117465811:web:391f15f25a939e24647c26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
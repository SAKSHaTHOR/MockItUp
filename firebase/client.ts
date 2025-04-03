// Import the functions you need from the SDKs you need
import { initializeApp ,getApp ,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlZaBHG5PJT5EAI8PNC5Q9Jt6H63rJ9OA",
  authDomain: "mockitup-9202b.firebaseapp.com",
  projectId: "mockitup-9202b",
  storageBucket: "mockitup-9202b.firebasestorage.app",
  messagingSenderId: "545814753135",
  appId: "1:545814753135:web:9c8027ea65b2a3fe05c29a",
  measurementId: "G-K5T43VYTSM"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db =getFirestore(app);
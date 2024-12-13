import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Fw_u1K2-ZF-Ui109PEnwIBhHvT1EYAE",
  authDomain: "sudemy-f1692.firebaseapp.com",
  projectId: "sudemy-f1692",
  storageBucket: "sudemy-f1692.firebasestorage.app",
  messagingSenderId: "321613830125",
  appId: "1:321613830125:web:3f805dba69c3cb2ab9f9e4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
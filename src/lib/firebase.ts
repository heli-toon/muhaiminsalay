import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaklaDBLRDjNnUfgF2sDS_rEQEO3budA4",
  authDomain: "muhaiminsalay.firebaseapp.com",
  projectId: "muhaiminsalay",
  storageBucket: "muhaiminsalay.firebasestorage.app",
  messagingSenderId: "1011462294894",
  appId: "1:1011462294894:web:01ab09f1f0158e55a6c57f",
  measurementId: "G-VHH3F5HPFY",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
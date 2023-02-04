// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxEQqr5mm1KKYQyJBmW_Pcid-erbdnLlw",
  authDomain: "ic-hack-23.firebaseapp.com",
  projectId: "ic-hack-23",
  storageBucket: "ic-hack-23.appspot.com",
  messagingSenderId: "972406666719",
  appId: "1:972406666719:web:278c73867767f7c92d806a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
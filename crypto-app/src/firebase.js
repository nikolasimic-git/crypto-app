// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: `AIzaSyBtBFiaZ7XxMdw0ReJdSfQs8a5XXWtx2nQ`,
  authDomain: "projekat1233.firebaseapp.com",
  projectId: "projekat1233",
  storageBucket: "projekat1233.appspot.com",
  messagingSenderId: "542484327431",
  appId: "1:542484327431:web:198aa7fdd44377946fcea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


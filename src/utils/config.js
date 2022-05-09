// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSp3SBTE8G-w7Lm2zRoZc3DG03qVC7AO0",
  authDomain: "meal-planner-a065b.firebaseapp.com",
  projectId: "meal-planner-a065b",
  storageBucket: "meal-planner-a065b.appspot.com",
  messagingSenderId: "721993272694",
  appId: "1:721993272694:web:77bf4d7a08ee03f3f1be57"
};

// Initialize Firebase

const fire = initializeApp(firebaseConfig);
export const auth = getAuth(fire);

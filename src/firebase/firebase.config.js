// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2MBeyo8lgvUha8ZjQ7FVXr_JUJJ4oqHI",
  authDomain: "educare-4950e.firebaseapp.com",
  projectId: "educare-4950e",
  storageBucket: "educare-4950e.appspot.com",
  messagingSenderId: "57447937238",
  appId: "1:57447937238:web:9d247c9986fde6b9afc577"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

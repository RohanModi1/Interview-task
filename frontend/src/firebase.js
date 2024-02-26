// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "task-auth-674f9.firebaseapp.com",
  projectId: "task-auth-674f9",
  storageBucket: "task-auth-674f9.appspot.com",
  messagingSenderId: "606552711285",
  appId: "1:606552711285:web:1a2f53b74fa95acecc583c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
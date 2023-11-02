import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0r7q7TMn72SU-fIYv3uLfvh6AnBxtxy8",
  authDomain: "uber-next-clone-57310.firebaseapp.com",
  projectId: "uber-next-clone-57310",
  storageBucket: "uber-next-clone-57310.appspot.com",
  messagingSenderId: "327610492267",
  appId: "1:327610492267:web:e5da1d721621a42523d82e",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };

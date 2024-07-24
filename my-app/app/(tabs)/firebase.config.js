// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9CsSZQvechTGuDSVp0XNamDQYI-OR5KE",
  authDomain: "chatvalencia-d1499.firebaseapp.com",
  projectId: "chatvalencia-d1499",
  storageBucket: "chatvalencia-d1499.appspot.com",
  messagingSenderId: "613289662676",
  appId: "1:613289662676:web:4a34b0a325d3ebd4a8c341"
};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };





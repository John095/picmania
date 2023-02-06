// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB0dpwgVlcMBCrRkxLAHuKRzfHjqgiqQlc",
  authDomain: "picmania-edc22.firebaseapp.com",
  projectId: "picmania-edc22",
  storageBucket: "picmania-edc22.appspot.com",
  messagingSenderId: "483577370365",
  appId: "1:483577370365:web:c7b5070b72da41c5e7d094",
});

// Initialize Firebase
export const auth = app.auth();
export const googleProvider = new GoogleAuthProvider();

export default app;

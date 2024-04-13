// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9NxpZjH4yL78r0Hb3OtCU41lOj8al4f4",
  authDomain: "react-auth-dragon-news-cab4d.firebaseapp.com",
  projectId: "react-auth-dragon-news-cab4d",
  storageBucket: "react-auth-dragon-news-cab4d.appspot.com",
  messagingSenderId: "893904119188",
  appId: "1:893904119188:web:61b325273c2ae85a339b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
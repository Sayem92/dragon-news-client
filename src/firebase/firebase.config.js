// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHFqIHtNO22Atpkb4T3q1PkzcZHIOcC9Q",
  authDomain: "dragon-news-c3d8a.firebaseapp.com",
  projectId: "dragon-news-c3d8a",
  storageBucket: "dragon-news-c3d8a.appspot.com",
  messagingSenderId: "87598430492",
  appId: "1:87598430492:web:853003799e3b4dbb95e2d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
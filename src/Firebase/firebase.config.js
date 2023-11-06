// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZi5aLD4QAMVqvS3sy4lxRKO8e-3zkGpI",
  authDomain: "hotel-booking-mern-c8edc.firebaseapp.com",
  projectId: "hotel-booking-mern-c8edc",
  storageBucket: "hotel-booking-mern-c8edc.appspot.com",
  messagingSenderId: "921105867761",
  appId: "1:921105867761:web:f61adee75e54782dc55a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
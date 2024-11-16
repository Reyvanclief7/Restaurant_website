// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZf4UVW1Sir90Uus6XAxexa1V9t6j0_6k",
  authDomain: "restaurant-booking-web.firebaseapp.com",
  projectId: "restaurant-booking-web",
  storageBucket: "restaurant-booking-web.firebasestorage.app",
  messagingSenderId: "175373677619",
  appId: "1:175373677619:web:ede6619e4492f240955f46",
  measurementId: "G-CCD3PRD9NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
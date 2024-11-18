// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
<<<<<<< HEAD
=======
import { getAnalytics } from "firebase/analytics";
>>>>>>> 991fc21766f46a7ff321159a1b89c14c358abe0a
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBId1sohMS04OzGf0gxEZ6yW-yKkXEOK4",
  authDomain: "website-restaurant-59720.firebaseapp.com",
<<<<<<< HEAD
  databaseURL: "https://website-restaurant-59720-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "website-restaurant-59720",
  storageBucket: "website-restaurant-59720.firebasestorage.app",
  messagingSenderId: "993398823908",
  appId: "1:993398823908:web:e479b7c4d23438b4bd05f1",
  measurementId: "G-G4B15T9FMX"
=======
  projectId: "website-restaurant-59720",
  storageBucket: "website-restaurant-59720.firebasestorage.app",
  databaseURL:
    "https://website-restaurant-59720-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "993398823908",
  appId: "1:993398823908:web:e479b7c4d23438b4bd05f1",
  measurementId: "G-G4B15T9FMX",
>>>>>>> 991fc21766f46a7ff321159a1b89c14c358abe0a
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
=======
const analytics = getAnalytics(app);
>>>>>>> 991fc21766f46a7ff321159a1b89c14c358abe0a

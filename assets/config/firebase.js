// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtX4u1irhuLyTnMLtTkjRFf3SMiXrDSJE",
  authDomain: "carteirinhadigitalufv.firebaseapp.com",
  projectId: "carteirinhadigitalufv",
  storageBucket: "carteirinhadigitalufv.appspot.com",
  messagingSenderId: "1028685218957",
  appId: "1:1028685218957:web:54a794a1920785ceca0ec4"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase
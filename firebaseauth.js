// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO5k1MCl6OWI-0CrOSucW1CTD5IDmc1jI",
  authDomain: "wpclona.firebaseapp.com",
  projectId: "wpclona",
  storageBucket: "wpclona.appspot.com",
  messagingSenderId: "338028689643",
  appId: "1:338028689643:web:b35cc5ad7d9bd32d2166ae",
  measurementId: "G-B29YH4LF71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
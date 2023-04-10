// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkHiZ9UiAoPTzSo-OdU64AHouM14EwLQU",
  authDomain: "briefly-89063.firebaseapp.com",
  projectId: "briefly-89063",
  storageBucket: "briefly-89063.appspot.com",
  messagingSenderId: "163085153253",
  appId: "1:163085153253:web:eff901f9a9ac0af49e750c",
  measurementId: "G-VBXF530TQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpQc2e9DVFSmRtkKWxNuTKs4r66QFmqFM",
  authDomain: "reitha-portfolio-751d0.firebaseapp.com",
  projectId: "reitha-portfolio-751d0",
  storageBucket: "reitha-portfolio-751d0.firebasestorage.app",
  messagingSenderId: "393285968419",
  appId: "1:393285968419:web:69941f2aea9b7ed7964796",
  measurementId: "G-24W1M5RZFK"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
const db = getFirestore(app);

export { db, analytics }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLnxmBG38biue5zro7gkkZbZUTPZ4V424",
  authDomain: "ai-trip-planner-fff3c.firebaseapp.com",
  projectId: "ai-trip-planner-fff3c",
  storageBucket: "ai-trip-planner-fff3c.firebasestorage.app",
  messagingSenderId: "366602821897",
  appId: "1:366602821897:web:6d0a915058687b6fa8b3d8",
  measurementId: "G-1LRNV678WK"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

//const analytics = getAnalytics(app);
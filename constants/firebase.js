// Import the necessary functions from Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// Import getAnalytics only if you are running in a browser
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_0FNCXFh6oT4KfuL5NTMgTHJQm0vEaIk",
  authDomain: "indiapost-33d9d.firebaseapp.com",
  databaseURL: "https://indiapost-33d9d-default-rtdb.firebaseio.com",
  projectId: "indiapost-33d9d",
  storageBucket: "indiapost-33d9d.appspot.com",
  messagingSenderId: "854003854755",
  appId: "1:854003854755:web:8ff777fd77c4f37a16fe16",
  measurementId: "G-L13LPC5GK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = typeof window !== "undefined" ? getAnalytics(app) : null; // Use analytics only in browser

// Export Firebase services
export const auth = getAuth(app);
export const database = getDatabase(app);

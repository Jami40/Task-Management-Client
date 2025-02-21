// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyALOKPoRLNk9NktUoVBLGT3vVfDjJ8ZEbo",
//   authDomain: "task-mangment-system-40055.firebaseapp.com",
//   projectId: "task-mangment-system-40055",
//   storageBucket: "task-mangment-system-40055.firebasestorage.app",
//   messagingSenderId: "87564195070",
//   appId: "1:87564195070:web:686b386e0d8e526565c1af"
apiKey: import.meta.env.VITE_apiKey,
authDomain: import.meta.env.VITE_authDomain,
projectId: import.meta.env.VITE_projectId,
storageBucket: import.meta.env.VITE_storageBucket,
messagingSenderId: import.meta.env.VITE_messagingSenderId,
appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
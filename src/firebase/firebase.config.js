// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArLih6bNCowhoxM4cAzr-XG16s8YuOFIc",
  authDomain: "auth-router-connection-ccbc9.firebaseapp.com",
  projectId: "auth-router-connection-ccbc9",
  storageBucket: "auth-router-connection-ccbc9.appspot.com",
  messagingSenderId: "1093416901419",
  appId: "1:1093416901419:web:2eb5697170e4e0e82a836e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3GqN1r_1FVX4MJS5PiEFShiqQju-Z384",
  authDomain: "my-assignment-10-4d054.firebaseapp.com",
  projectId: "my-assignment-10-4d054",
  storageBucket: "my-assignment-10-4d054.firebasestorage.app",
  messagingSenderId: "578520795582",
  appId: "1:578520795582:web:a933b86bbff524f23d91ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRp3a7aMXqM9jr463eQazDFRYW46VPuqw",
  authDomain: "phimmoi-react.firebaseapp.com",
  projectId: "phimmoi-react",
  storageBucket: "phimmoi-react.appspot.com",
  messagingSenderId: "555544988222",
  appId: "1:555544988222:web:c2a944744d7ca618841f6f",
  measurementId: "G-KS1S8NHYXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app);
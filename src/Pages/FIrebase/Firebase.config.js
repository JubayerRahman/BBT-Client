// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgoaoQROxH2wcHZasc3xc7wSssZpo2KLg",
  authDomain: "assignment-10-f2c36.firebaseapp.com",
  projectId: "assignment-10-f2c36",
  storageBucket: "assignment-10-f2c36.appspot.com",
  messagingSenderId: "393355839670",
  appId: "1:393355839670:web:b88134f363f8ce9c063e17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
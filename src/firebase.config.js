// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIsaJGeIJ0Gi-kReGzWNoeImnV5WQkeSI",
  authDomain: "car-doctor-client-site.firebaseapp.com",
  projectId: "car-doctor-client-site",
  storageBucket: "car-doctor-client-site.appspot.com",
  messagingSenderId: "426231521053",
  appId: "1:426231521053:web:c7bb9f9b9957aef7d2cbf4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
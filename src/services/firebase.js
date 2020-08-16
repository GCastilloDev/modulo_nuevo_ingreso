import firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAza0ffb0QjYofr5ZjEnzz-YdSld6mS0-0",
  authDomain: "utsv-nuevo-ingreso.firebaseapp.com",
  databaseURL: "https://utsv-nuevo-ingreso.firebaseio.com",
  projectId: "utsv-nuevo-ingreso",
  storageBucket: "utsv-nuevo-ingreso.appspot.com",
  messagingSenderId: "1085650154682",
  appId: "1:1085650154682:web:8ded53b4c1c0f46341be83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };

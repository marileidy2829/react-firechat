// firebase deps
import firebase from 'firebase/app';
import 'firebase/auth' ;
import 'firebase/firestore';
// incializar firebase

const firebaseConfig = {
    apiKey: "AIzaSyB6tkXXJx6yXs-apoQbMbq2Nvc4ag7Mqpc",
    authDomain: "react-firechat1.firebaseapp.com",
    databaseURL: "https://react-firechat1-default-rtdb.firebaseio.com",
    projectId: "react-firechat1",
    storageBucket: "react-firechat1.appspot.com",
    messagingSenderId: "754194757476",
    appId: "1:754194757476:web:c60abe55fe80e64c7eec71",
    measurementId: "G-4X9M18F5F9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//tomo los elementos basicos para trabajar con firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
} 





  
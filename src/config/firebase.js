// firebase deps
import firebase from 'firebase/app';
import 'firebase/auth' ;
import 'firebase/firebase' ;
// incializar firebase

const firebaseConfig = {
    apiKey: "AIzaSyAwUNbJGdxcN0zz5YYqYKeT1kM-E63TBDU",
    authDomain: "firechat-4b15f.firebaseapp.com",
    databaseURL: "https://firechat-4b15f-default-rtdb.firebaseio.com",
    projectId: "firechat-4b15f",
    storageBucket: "firechat-4b15f.appspot.com",
    messagingSenderId: "200578898619",
    appId: "1:200578898619:web:1bf62ee99f939621ff279e",
    measurementId: "G-4YFT28DBY4"
  };

firebase.initializeApp (firebaseConfig);
//tomo los elementos basicos para trabajar con firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
} from './config/firebase';

function app (){
    return (
        <div></div>
    );
}

export default app;
  
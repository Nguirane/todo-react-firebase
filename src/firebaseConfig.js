import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDgrhLsRxsl5yfPaRuy_M-gnm81RewRTP4",
    authDomain: "todoapp-9e278.firebaseapp.com",
    projectId: "todoapp-9e278",
    storageBucket: "todoapp-9e278.appspot.com",
    messagingSenderId: "216850004854",
    appId: "1:216850004854:web:05034e99c9981c5ace5857"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
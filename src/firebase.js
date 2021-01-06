// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB6AgllvakAzRQIdizjB4PUfxr9pbkewSw",
    authDomain: "clone-3f8ea.firebaseapp.com",
    projectId: "clone-3f8ea",
    storageBucket: "clone-3f8ea.appspot.com",
    messagingSenderId: "222196502158",
    appId: "1:222196502158:web:c89b0a6574d71e1aa403df",
    measurementId: "G-LY9F2119GR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
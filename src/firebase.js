import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkzxRJVV7H1AG7EK0bOUzq0TGJ89VZ-I0",
    authDomain: "challenge-c28e0.firebaseapp.com",
    databaseURL: "https://challenge-c28e0.firebaseio.com",
    projectId: "challenge-c28e0",
    storageBucket: "challenge-c28e0.appspot.com",
    messagingSenderId: "633211197444",
    appId: "1:633211197444:web:183719aafbd866739c7d51",
    measurementId: "G-CVR2PBXG3V"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
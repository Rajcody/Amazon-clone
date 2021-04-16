// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDkGbtnFl7cDWU4JPgY__qKzp3noVaqEZg",
    authDomain: "c-97e8e.firebaseapp.com",
    projectId: "c-97e8e",
    storageBucket: "c-97e8e.appspot.com",
    messagingSenderId: "168043526563",
    appId: "1:168043526563:web:8d09af22bfd2872b084216",
    measurementId: "G-VD2NN0868N"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
  
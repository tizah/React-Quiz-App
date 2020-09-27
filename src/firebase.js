import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDn20gEuKWQTunD7ooqLKlapIeEMdDGyj4",
  authDomain: "quizz-app-615d7.firebaseapp.com",
  databaseURL: "https://quizz-app-615d7.firebaseio.com",
  projectId: "quizz-app-615d7",
  storageBucket: "quizz-app-615d7.appspot.com",
  messagingSenderId: "1076546438019",
  appId: "1:1076546438019:web:ddacedda1142e7e48b2cb6",
  measurementId: "G-DW2869R2XN",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

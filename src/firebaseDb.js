import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyByGOG3A2r93sNyDAaSz29eI7dkQz4oeus",
  authDomain: "new-project-65a0b.firebaseapp.com",
  databaseURL: "https://new-project-65a0b-default-rtdb.firebaseio.com",
  projectId: "new-project-65a0b",
  storageBucket: "new-project-65a0b.appspot.com",
  messagingSenderId: "397198092195",
  appId: "1:397198092195:web:53eb942c944c0cdece1c16",
  measurementId: "G-7D58FYNXJ8"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
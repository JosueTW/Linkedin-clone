import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDEwqvA7Ne2Ugxx4gMtmLM6-GNRm-FbTk0",
    authDomain: "linkedin-clone-f8e0e.firebaseapp.com",
    projectId: "linkedin-clone-f8e0e",
    storageBucket: "linkedin-clone-f8e0e.appspot.com",
    messagingSenderId: "677439958138",
    appId: "1:677439958138:web:45982761f3dfac4a155fc3",
    measurementId: "G-CZ9TKKGKBZ",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
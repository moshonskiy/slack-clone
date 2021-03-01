import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAnOOdz2BQfEPSUi2NRz3ni9MG5sWLLPOc",
    authDomain: "slack-clone-54c21.firebaseapp.com",
    projectId: "slack-clone-54c21",
    storageBucket: "slack-clone-54c21.appspot.com",
    messagingSenderId: "738752877973",
    appId: "1:738752877973:web:21e9926a55715e04ca929c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export const db = firebaseApp.firestore();
export { auth, provider }
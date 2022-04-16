import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeQ_ntReXiZ7acqcgXDZmSEsspnK4HWjI",
  authDomain: "chartme-37c19.firebaseapp.com",
  projectId: "chartme-37c19",
  storageBucket: "chartme-37c19.appspot.com",
  messagingSenderId: "253288683101",
  appId: "1:253288683101:web:28b58794849d46e70fdfb4",
};

//if (firebase.apps.length === 0) {
let firebaseApp = firebase.initializeApp(firebaseConfig);
//}

const db = firebaseApp.firestore;
export default firebaseApp;

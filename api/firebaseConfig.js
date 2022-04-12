import * as firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeQ_ntReXiZ7acqcgXDZmSEsspnK4HWjI",
  authDomain: "chartme-37c19.firebaseapp.com",
  projectId: "chartme-37c19",
  storageBucket: "chartme-37c19.appspot.com",
  messagingSenderId: "253288683101",
  appId: "1:253288683101:web:28b58794849d46e70fdfb4",
};
let Firebase;

if (firebase.getApps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;

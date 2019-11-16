import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCTaluPleg0baR_3VyU1_cUT9klNhsZ19Y",
  authDomain: "jim-clothing-db.firebaseapp.com",
  databaseURL: "https://jim-clothing-db.firebaseio.com",
  projectId: "jim-clothing-db",
  storageBucket: "jim-clothing-db.appspot.com",
  messagingSenderId: "326823164000",
  appId: "1:326823164000:web:0ed77b9f9efb21063c6b05",
  measurementId: "G-FKQ35V0WNF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyAE0PcRWd_1cOXDC-C7KpJTGMqPkgJfk",
  authDomain: "alaska-360520.firebaseapp.com",
  projectId: "alaska-360520",
  storageBucket: "alaska-360520.appspot.com",
  messagingSenderId: "21106027430",
  appId: "1:21106027430:web:0a3454e11e449cb2fbfd67",
  measurementId: "G-3S0EFVLFRF",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth()

export {auth};
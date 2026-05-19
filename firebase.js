import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut

}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

  apiKey:
  "AIzaSyAA5mzO0fzc0bMr9wnbBHm1f2nax4XrwQ4",

  authDomain:
  "perpustakaan-digital-smakins.firebaseapp.com",

  projectId:
  "perpustakaan-digital-smakins",

  storageBucket:
  "perpustakaan-digital-smakins.firebasestorage.app",

  messagingSenderId:
  "203203851480",

  appId:
  "1:203203851480:web:8a0b63e9dce12819db53ad",

  measurementId:
  "G-Y6N0ZJRM20"

};

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

export {

  auth,

  signInWithEmailAndPassword,

  createUserWithEmailAndPassword,

  onAuthStateChanged,

  signOut

};
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAA5mzO0fzc0bMr9wnbBHm1f2nax4XrwQ4",
    authDomain: "perpustakaan-digital-smakins.firebaseapp.com",
    projectId: "perpustakaan-digital-smakins",
    storageBucket: "perpustakaan-digital-smakins.firebasestorage.app",
    messagingSenderId: "203203851480",
    appId: "1:203203851480:web:8a0b63e9dce12819db53ad",
    measurementId: "G-Y6N0ZJRM20"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

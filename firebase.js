// Import fungsi inti dari Firebase CDN resmi (Versi 10.12.0)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Konfigurasi Firebase milik Anda
const firebaseConfig = {
  apiKey: "AIzaSyAA5mzO0fzc0bMr9wnbBHm1f2nax4XrwQ4",
  authDomain: "perpustakaan-digital-smakins.firebaseapp.com",
  databaseURL: "https://perpustakaan-digital-smakins-default-rtdb.firebaseio.com",
  projectId: "perpustakaan-digital-smakins",
  storageBucket: "perpustakaan-digital-smakins.firebasestorage.app",
  messagingSenderId: "203203851480",
  appId: "1:203203851480:web:8a0b63e9dce12819db53ad",
  measurementId: "G-Y6N0ZJRM20"
};

// Inisialisasi Aplikasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Layanan yang dibutuhkan sistem
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Ekspor semua variabel agar bisa dibaca oleh admin.html, buku.html, dll.
export { auth, onAuthStateChanged, signOut, db, storage };
// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0TT_lP2anQmuq7jTAWjpQfinA8XfW7j8",
    authDomain: "holbaek-loebet.firebaseapp.com",
    databaseURL: "https://holbaek-loebet.firebaseio.com",
    projectId: "holbaek-loebet",
    storageBucket: "",
    messagingSenderId: "583419676238",
    appId: "1:583419676238:web:3c9660313d7f0e53"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
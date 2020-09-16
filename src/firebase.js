import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBcQJtal3khbfdayF0P-47uKtKT6Jes4HY",
    authDomain: "instagram-clone-anish.firebaseapp.com",
    databaseURL: "https://instagram-clone-anish.firebaseio.com",
    projectId: "instagram-clone-anish",
    storageBucket: "instagram-clone-anish.appspot.com",
    messagingSenderId: "96542249928",
    appId: "1:96542249928:web:7d94c17f939ac9e69026fd",
    measurementId: "G-PM5RYXCES9"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
import firebase from "firebase"

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyA_ntiR34F_G7JCXTc3Sma8V1S0XPPMn14",
    authDomain: "facebook-messenger-dc5ea.firebaseapp.com",
    databaseURL: "https://facebook-messenger-dc5ea.firebaseio.com",
    projectId: "facebook-messenger-dc5ea",
    storageBucket: "facebook-messenger-dc5ea.appspot.com",
    messagingSenderId: "575943517751",
    appId: "1:575943517751:web:dd59fd69595365c1dec1b2",
    measurementId: "G-5QWZB2YCCG"
});

const db = firebaseApp.firestore();

export default db

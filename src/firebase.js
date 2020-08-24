import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpQz_-XUllVcm93Nt64xEVEhAzbbo-DOc",
    authDomain: "staratlas-demo.firebaseapp.com",
    databaseURL: "https://staratlas-demo.firebaseio.com",
    projectId: "staratlas-demo",
    storageBucket: "staratlas-demo.appspot.com",
    messagingSenderId: "389625505254",
    appId: "1:389625505254:web:b25a1d85f83edeeafe2227",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
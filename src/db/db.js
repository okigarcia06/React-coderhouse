import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCFFr8KfwJZHde3GMUY_c_u1tVETmbaDU",
    authDomain: "maldad-miaulactica.firebaseapp.com",
    projectId: "maldad-miaulactica",
    storageBucket: "maldad-miaulactica.appspot.com",
    messagingSenderId: "576937578240",
    appId: "1:576937578240:web:1c20fa38dbc25d30fa2de5",
};

initializeApp(firebaseConfig);

const db = getFirestore();
export default db;

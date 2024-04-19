import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBndHd3cbssz28r360tSS-SqtIzmc6wRpw",
    authDomain: "crz-racing-parts-coderhouse.firebaseapp.com",
    projectId: "crz-racing-parts-coderhouse",
    storageBucket: "crz-racing-parts-coderhouse.appspot.com",
    messagingSenderId: "400633155054",
    appId: "1:400633155054:web:005832636af0d3121f52ff",
    measurementId: "G-0FXSGV5HE2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
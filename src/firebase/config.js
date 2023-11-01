// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTgMTFJPoJZU2lzkczKRghVLna7bq3NDQ",
    authDomain: "chat-ed262.firebaseapp.com",
    projectId: "chat-ed262",
    storageBucket: "chat-ed262.appspot.com",
    messagingSenderId: "628502146660",
    appId: "1:628502146660:web:b1d7f2128fe552de4ff971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)




export const auth=getAuth(app)

export const provider = new GoogleAuthProvider
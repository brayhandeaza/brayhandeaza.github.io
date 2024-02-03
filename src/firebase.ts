import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// description: Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyD793ks1oXZhr9W_kvZIW8JGtlF6-SZrRI",
    authDomain: "brayhandeaza-1a9b5.firebaseapp.com",
    projectId: "brayhandeaza-1a9b5",
    storageBucket: "brayhandeaza-1a9b5.appspot.com",
    messagingSenderId: "932854286145",
    appId: "1:932854286145:web:4b740ef3f8e0ecdb15c3c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)


export {
    app,
    firestore
}
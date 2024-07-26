import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYxjRtnuUpq96H1VDMk6yVS1mx_HaJxV0",
    authDomain: "ecommner.firebaseapp.com",
    projectId: "ecommner",
    storageBucket: "ecommner.appspot.com",
    messagingSenderId: "1022272539638",
    appId: "1:1022272539638:web:26eca637487173d50515d7",
    measurementId: "G-5RH68JD5Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

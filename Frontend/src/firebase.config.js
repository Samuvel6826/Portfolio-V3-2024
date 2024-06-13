// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCg8VmwYMq-EsJl3qoybCX6RelP2l6Rfrs",
    authDomain: "samtocode24.firebaseapp.com",
    projectId: "samtocode24",
    storageBucket: "samtocode24.appspot.com",
    messagingSenderId: "426305563071",
    appId: "1:426305563071:web:49b535c1caabc512e2d90a",
    measurementId: "G-THT25FBCLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
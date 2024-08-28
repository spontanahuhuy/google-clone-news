import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyBY5b6AjqSo89Fu2WuPbEWcCA7ejHW95aw",
        authDomain: "clone-news-nasipadang.firebaseapp.com",
        projectId: "clone-news-nasipadang",
        storageBucket: "clone-news-nasipadang.appspot.com",
        messagingSenderId: "101061961745",
        appId: "1:101061961745:web:0c092bf9feb1de54f7a9b0"
    };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
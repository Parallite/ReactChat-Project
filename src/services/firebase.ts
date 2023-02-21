import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDfz4XnzYoK8yCwGfHvfoUWS4i1cljkazE",
    authDomain: "chat-project-cabcc.firebaseapp.com",
    databaseURL: "https://chat-project-cabcc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-project-cabcc",
    storageBucket: "chat-project-cabcc.appspot.com",
    messagingSenderId: "1076514658075",
    appId: "1:1076514658075:web:1a0dfb717d4f263bce65be",
    measurementId: "G-ZLTHGGSMGN"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)

export const signUp = async (email: string, password: string) =>
    await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
    await signInWithEmailAndPassword(firebaseAuth, email, password);

    export const logOut = async () =>
    await signOut(firebaseAuth);

export const db = getDatabase(app);

export const getChats = () => ref(db, 'chats');
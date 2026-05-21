import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBkBS1WDoR3due8FnmPP9U-OUV20vPK_oA",
    authDomain: "toughmanwebsite.firebaseapp.com",
    projectId: "toughmanwebsite",
    storageBucket: "toughmanwebsite.firebasestorage.app",
    messagingSenderId: "846884296513",
    appId: "1:846884296513:web:504eb865e3ea046bd573c0",
    measurementId: "G-VE0SC3EPS3"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
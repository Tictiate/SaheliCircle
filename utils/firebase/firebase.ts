import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import admin from "firebase-admin";
import path from "path";

const serviceAccount = require(path.resolve(__dirname, "../config/serviceAccountKey.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const adminDb = admin.firestore();

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "sahelicircle.firebaseapp.com",
    projectId: "sahelicircle",
    storageBucket: "sahelicircle.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

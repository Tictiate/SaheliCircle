// src/firebase/firebaseAuth.ts
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginUser = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerUser = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logoutUser = () => signOut(auth);


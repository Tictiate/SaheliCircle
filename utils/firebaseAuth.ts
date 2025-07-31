// utils/firebaseAuth.ts
import { auth } from "./firebase";
import { signInAnonymously, User } from "firebase/auth";

export async function signInAnonymouslyUser(): Promise<User> {
  try {
    const userCredential = await signInAnonymously(auth);
    return userCredential.user;
  } catch (error) {
    console.error("Anonymous sign-in failed:", error);
    throw error;
  }
}

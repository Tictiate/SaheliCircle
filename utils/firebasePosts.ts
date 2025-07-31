
// utils/firebasePosts.ts
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface Post {
  text: string;
  userId: string;
  timestamp?: any; // Firestore serverTimestamp
}

export async function addPost(userId: string, text: string): Promise<string> {
  try {
    const post: Post = {
      text,
      userId,
      timestamp: serverTimestamp(),
    };
    const docRef = await addDoc(collection(db, "posts"), post);
    return docRef.id;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
}
// utils/firebasePosts.ts (can be in same file as above)
import { query, orderBy, getDocs, limit } from "firebase/firestore";

export async function getPosts(limitNumber = 20): Promise<Post[]> {
  try {
    const q = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc"),
      limit(limitNumber)
    );
    const snapshot = await getDocs(q);
    const posts: Post[] = [];
    snapshot.forEach(doc => {
      posts.push(doc.data() as Post);
    });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

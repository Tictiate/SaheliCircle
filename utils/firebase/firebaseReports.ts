// firebaseReports.ts
import {
    addDoc,
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

/**
 * Create a new report in Firestore
 * @param data - An object containing report details
 */
export const createReport = async (data: {
  title: string;
  description: string;
  category: string;
  userId: string;
}) => {
  try {
    const reportsRef = collection(db, "reports");
    await addDoc(reportsRef, {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("✅ Report created successfully");
  } catch (error) {
    console.error("❌ Error creating report:", error);
    throw error;
  }
};

/**
 * Fetch recent reports
 * @param count - Number of reports to fetch (default 10)
 */
export const getRecentReports = async (count = 10) => {
  try {
    const reportsRef = collection(db, "reports");
    const q = query(reportsRef, orderBy("createdAt", "desc"), limit(count));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("❌ Error fetching reports:", error);
    throw error;
  }
};

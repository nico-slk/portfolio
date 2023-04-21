import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getStorage,
  ref,
  uploadBytes
} from 'firebase/storage';
import {
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PORTFOLIO_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_PORTFOLIO_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PORTFOLIO_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_PORTFOLIO_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_PORTFOLIO_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_PORTFOLIO_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_PORTFOLIO_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const firebaseTest = async (file: any, fileName: string): Promise<void> => {
  const storage = getStorage();
  const storageRef = ref(storage, `images/${fileName}`);
  try {
    const snapshot = await uploadBytes(storageRef, file)
    console.log(snapshot)
  } catch (error) {
    console.log(error)
  }
}

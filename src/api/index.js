import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import vegetables from '../ison/vegetables.json';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID
};

const app_length = getApps().length > 0;

//Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const vegetablesCollection = collection(db, "vegetables"); 

export const feedVegetables = async () => {
    //DELETE ALL EXISTING DOCS
    const querySnapshot = await getDocs(vegetablesCollection);
    querySnapshot.forEach(async (vegetable) => {
        await deleteDoc(doc(db, "vegetables", vegetable.id));
    });
    //ADD NEW DOCS
    vegetables.forEach(async (vegetable) => {
        const docRef = await doc(vegetablesCollection);
        await setDoc(docRef, {...vegetable, id: docRef.id, image:vegetable.image });
    });
};
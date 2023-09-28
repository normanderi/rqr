import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";


console.log('1111111111111', process.env.VITE_API_KEY)

const firebaseConfig = {
    apiKey: process.env.VITE_API_KEY,
    authDomain: process.env.VITE_PROJECT_ID + '.firebaseapp.com',
    projectId: process.env.VITE_PROJECT_ID,
    storageBucket: process.env.VITE_PROJECT_ID + ".appspot.com",

};
// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage),
// })
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

export const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
});
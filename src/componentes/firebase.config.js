import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAhzpqzQmX7C_iYUJEQPMisw2eYCnapfdM",
    authDomain: "unifood-1b3b5.firebaseapp.com",
    databaseURL: "https://unifood-1b3b5-default-rtdb.firebaseio.com",
    projectId: "unifood-1b3b5",
    storageBucket: "unifood-1b3b5.appspot.com",
    messagingSenderId: "225712927391",
    appId: "1:225712927391:web:7c3082f996044c2019a8aa"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

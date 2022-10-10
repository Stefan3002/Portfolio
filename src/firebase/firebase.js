// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore, query, getDocs} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6y4YJPHZh-5j8hXPA9HdVBRk1APZVWcM",
    authDomain: "portfolio-8fd31.firebaseapp.com",
    projectId: "portfolio-8fd31",
    storageBucket: "portfolio-8fd31.appspot.com",
    messagingSenderId: "646001583669",
    appId: "1:646001583669:web:7403d879ae04f8d61f337c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const retrieveCollectionFromDB = async (collectionName) => {
    const collectionRef = collection(db, collectionName)
    const q = query(collectionRef)
    const collectionSnaps = await getDocs(q)
    return collectionSnaps.docs.reduce((acc, collectionSnap) => {
        acc.push(collectionSnap.data())
        return acc
    }, [])
}

export const retrieveSkillsFromDB = async () => {
    const collectionRef = collection(db, 'skills')
    const q = query(collectionRef)
    const collectionSnaps = await getDocs(q)
    return collectionSnaps.docs.reduce((acc, collectionSnap) => {
        const {title, skills, id} = collectionSnap.data()
        acc.push({skills, title})
        return acc
    }, [])
}
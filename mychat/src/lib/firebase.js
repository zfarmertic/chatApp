// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getauth } from 'firebase/auth'
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "chatme-d3890.firebaseapp.com",
    projectId: "chatme-d3890",
    storageBucket: "chatme-d3890.firebasestorage.app",
    messagingSenderId: "949967546273",
    appId: "1:949967546273:web:28e572791c60e5af024de0",
    measurementId: "G-F01KKDPV8V"
  };
  


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
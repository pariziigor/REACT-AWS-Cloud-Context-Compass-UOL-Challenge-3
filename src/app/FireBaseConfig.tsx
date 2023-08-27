// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMwfCGLzYu9NTCqSFc6pUGG9rZh7ka3g0",
  authDomain: "compass-uol-challenge-3.firebaseapp.com",
  projectId: "compass-uol-challenge-3",
  storageBucket: "compass-uol-challenge-3.appspot.com",
  messagingSenderId: "742886253542",
  appId: "1:742886253542:web:07a9e7d84d23cba5efac27",
  measurementId: "G-0JDLCFTT74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;
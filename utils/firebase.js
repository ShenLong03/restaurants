import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhCqHUpFpi9n_qEXP4KYcOCHydGX3UGqk",
  authDomain: "restaurants-43589.firebaseapp.com",
  projectId: "restaurants-43589",
  storageBucket: "restaurants-43589.appspot.com",
  messagingSenderId: "995109610893",
  appId: "1:995109610893:web:e491077d4779decf7cc9c4",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

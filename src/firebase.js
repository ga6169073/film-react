import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDR7B1FOFrCOSDbFtXWmF1uFAk5JWlOfgs",
  authDomain: "react-film-74ced.firebaseapp.com",
  projectId: "react-film-74ced",
  storageBucket: "react-film-74ced.appspot.com",
  messagingSenderId: "982926053595",
  appId: "1:982926053595:web:6761d75df023ed5875bcfe",
  measurementId: "G-03LF161FD0"
};

const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
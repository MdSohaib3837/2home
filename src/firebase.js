import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "firebase/auth";
import { Navigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBvUoIX46gXrATytUitSPh9JXF8dVUyrIM",
  authDomain: "secondhome-c5f64.firebaseapp.com",
  databaseURL: "https://secondhome-c5f64-default-rtdb.firebaseio.com",
  projectId: "secondhome-c5f64",
  storageBucket: "secondhome-c5f64.appspot.com",
  messagingSenderId: "600412636345",
  appId: "1:600412636345:web:06ae357f3b63942fc3c768",
  measurementId: "G-HQ7T5QM6FD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

const auth = getAuth();
export const signIn = async (user) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      user.data.username.trim(),
      user.data.password
    ).then((res) => {
      console.log(res);
    });
    alert("You've logged in successfuly");
  } catch (err) {
    console.error(err);
    alert("The email or password is incorrect, please try again");
  }
};

export const signUp = async (user) => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      user.email.trim(),
      user.password
    ).then((res) => {
      console.log(res);
    });
    alert("You've logged in successfuly");
    Navigate(-1);
  } catch (err) {
    console.error(err);
    alert("The email or password is incorrect, please try again");
  }
};

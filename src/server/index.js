import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrUF0tB5aAhfNng5RhPn-Ift7CwIMzJLs",
  authDomain: "uzum-43760.firebaseapp.com",
  projectId: "uzum-43760",
  storageBucket: "uzum-43760.appspot.com",
  messagingSenderId: "484431727923",
  appId: "1:484431727923:web:9db5f812722b76be5d8246",
  measurementId: "G-ZNNE12Y1JD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
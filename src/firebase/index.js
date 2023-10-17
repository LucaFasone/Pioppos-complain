import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFU9hqrMLvquQuGZTGKNR1KJ3D0oXUe_w",
  authDomain: "pioppo-s-complain.firebaseapp.com",
  databaseURL: "https://pioppo-s-complain-default-rtdb.firebaseio.com",
  projectId: "pioppo-s-complain",
  storageBucket: "pioppo-s-complain.appspot.com",
  messagingSenderId: "191611138980",
  appId: "1:191611138980:web:2d7f0b5613578b77b00731"
};

export const app = initializeApp(firebaseConfig);


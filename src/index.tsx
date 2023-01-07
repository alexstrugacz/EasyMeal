import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import firebase from 'firebase/compat/app';

const config = {
  apiKey: "AIzaSyBzK7f5grKq_yhSgIQ0opk8ijnWc5eFRbg",
  authDomain: "easymeal-01.firebaseapp.com",
  projectId: "easymeal-01",
  storageBucket: "easymeal-01.appspot.com",
  messagingSenderId: "937693610669",
  appId: "1:937693610669:web:3ebce88fcf45040b357c24",
  measurementId: "G-K2T8BJ48HT"
};
firebase.initializeApp(config);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
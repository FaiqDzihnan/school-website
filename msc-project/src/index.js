import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYuZG7Iz7uTeBDKsOUm_4j8tekdMjSyOA",
  authDomain: "msc-project-dfeea.firebaseapp.com",
  projectId: "msc-project-dfeea",
  storageBucket: "msc-project-dfeea.appspot.com",
  messagingSenderId: "162116430339",
  appId: "1:162116430339:web:ba60f497e2427449767c36",
  measurementId: "G-51LND68D1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
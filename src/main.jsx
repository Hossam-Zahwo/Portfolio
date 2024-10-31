import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeApp } from 'firebase/app';
import { getAllImages } from './getAllImages';

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Load a specific image from Firebase Storage and update img element
const storage = getStorage();
const storageRef = ref(storage, 'gs://hossam-zahwo.appspot.com/LOGO.png');
getDownloadURL(storageRef).then((url) => {
  const img = document.getElementById('logo-img');
  if (img) {
    img.src = url;
  }
}).catch((error) => {
  console.error("Error getting download URL:", error);
});

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App getAllImages={getAllImages} />
  </StrictMode>
);

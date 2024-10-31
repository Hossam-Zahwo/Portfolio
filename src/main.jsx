import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Firebase
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
initializeApp(firebaseConfig);

const storage = getStorage();
const storageRef = ref(storage, 'gs://your-bucket-name/your-image.jpg');
getDownloadURL(storageRef).then((url) => {
  const img = document.getElementById('your-img-id');
  if (img) {
    img.src = url;
  }
}).catch((error) => {
  console.error("Error getting download URL:", error);
});



// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);



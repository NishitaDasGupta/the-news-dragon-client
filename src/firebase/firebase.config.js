// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeI58v3UxoVQFsZtwQfqFe6C8vPslA2_8",
  authDomain: "the-news-dragon-a901f.firebaseapp.com",
  projectId: "the-news-dragon-a901f",
  storageBucket: "the-news-dragon-a901f.appspot.com",
  messagingSenderId: "71403026889",
  appId: "1:71403026889:web:6eb56a20240a0866461018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDc1aSF7zJV7aNQ6IdQg0iMdH9ORGAwyOo",
  authDomain: "blueweb-crud-react.firebaseapp.com",
  projectId: "blueweb-crud-react",
  storageBucket: "blueweb-crud-react.appspot.com",
  messagingSenderId: "839246646447",
  appId: "1:839246646447:web:6e641e55b793b318c1585a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

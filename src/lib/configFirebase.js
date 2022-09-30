import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFilFchDmubB4Z5vnAdH5H0U0pNcLVv7Y",
  authDomain: "scl021-clubmatch.firebaseapp.com",
  projectId: "scl021-clubmatch",
  storageBucket: "scl021-clubmatch.appspot.com",
  messagingSenderId: "573382733022",
  appId: "1:573382733022:web:9e9924290ec1436716e64f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Cloud Firestore and get a reference to the service
//const db = firebase.firestore();

export {
  auth,
  app,
  db
}
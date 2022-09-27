import {
    db,
    auth
} from "./configFirebase.js";
import { collection, addDoc, onSnapshot,query, where } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

// Add a new document with a generated id.
export const savePost = async (title, description, link) => {
    const docRef = await addDoc(collection(db, "Post"), {
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        title: title,
        description: description,
        link: link,
    });
    console.log("Document written with ID: ", docRef.id);
}

// const q = query(collection(db, "Post"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const post = [];
//   querySnapshot.forEach((doc) => {
//       post.push(doc.data().title);
//   });
//   console.log("Hola probando", post.join(", "));
// });
export const printPrueba = (callback) => {
    const showPost = query(collection(db, "Post"));
    onSnapshot(showPost, callback);
  
}
 //console.log(printPrueba, showPost)
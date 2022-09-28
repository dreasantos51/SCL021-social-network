import {
    db,
    auth
} from "./configFirebase.js";
import { collection, addDoc, onSnapshot, query } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

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

export const showingPosts = (callback) => {
    onSnapshot(query(collection(db, "Post")), (docs) => {
        docs.forEach(doc => {
            callback(doc.data())
            //console.log(doc.data())
        })
    })

}

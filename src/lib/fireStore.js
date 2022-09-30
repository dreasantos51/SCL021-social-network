import {
    db,
    auth
} from "./configFirebase.js";
import { collection, addDoc, onSnapshot, query } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

// funcion que genera en firebase un nuevo documento por cada post
export const savePost = async (title, description, link) => {
    const docRef = await addDoc(collection(db, "Post"), {
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName != null ? auth.currentUser.displayName : auth.currentUser.email,
        title: title,
        description: description,
        link: link,
    });
    console.log("Document written with ID: ", docRef.id);
}
// funcion que muestra todos los post de la colección en tiempo real
export const showingPosts = (callback) => {
    onSnapshot(query(collection(db, "Post")), (docs) => {
        docs.forEach(doc => {
            callback(doc.data())

        })
    })

}

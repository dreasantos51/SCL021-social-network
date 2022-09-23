import {
    db,
    auth
} from "./configFirebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

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
let allPosts = []
let data = {};
export const printPost = async () => {
    const querySnapshot = await getDocs(collection(db, "Post"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        allPosts.push({ ...doc.data(), id: doc.id });
        
        

    });
    
    return allPosts;

}
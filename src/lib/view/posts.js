import { signOut } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { auth } from "../configFirebase.js";

export const posts = () => {
    const divPosts = document.createElement('div');

    const viewPosts = `
        <h1>Este será el muro con los posts</h1>
        
      `
      const signOutPosts = document.createElement('button');
      signOutPosts.innerText = "Cerrar jeje"
      signOutPosts.addEventListener('click', function() {
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      })
      ;
    divPosts.innerHTML = viewPosts;
    divPosts.appendChild(signOutPosts);

    return divPosts;
};
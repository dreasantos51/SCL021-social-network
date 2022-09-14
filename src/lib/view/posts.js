import { signOut } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { auth } from "../configFirebase.js";

export const posts = () => {
    const divPosts = document.createElement('div');

    const viewPosts = `
    <header class="header">
    <h1 class="h1">Club Match</h1>

    <button class="button">--
    </button>

    <nav class="nav">
        <ul class="ul">
            <li class="li"><a href="#" class="a">Perfil</a></li>
            <li class="li"><a href="#" class="a">Cerrar sesion</a></li>
        </ul>
    </nav>
  </header>
        
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
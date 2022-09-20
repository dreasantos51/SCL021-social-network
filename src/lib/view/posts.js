import { signOut } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { auth } from "../configFirebase.js";

export const posts = () => {
  const divPosts = document.createElement('div');
  divPosts.classList.add("divPosts");

  /*     const viewPosts = `
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
          
        ` */
  /*Header y menu desplegable*/
  /*Header*/
  const headerPost = document.createElement('header');
  headerPost.classList.add('headerPost');
  divPosts.appendChild(headerPost);

  /*Imagen de Header*/
  const imgHeader = document.createElement('img');
  imgHeader.src = "./images/manos.png"
  imgHeader.classList.add('imgHeader');
  headerPost.appendChild(imgHeader)

  /*Boton de menu "Hamburguesa"*/
  const buttonMenu = document.createElement('button');
  buttonMenu.classList.add('buttonMenu');
  buttonMenu.innerHTML = "¡¡";
  headerPost.appendChild(buttonMenu);

  const clubMatchTitle = document.createElement("h1");
  clubMatchTitle.classList.add("clubMatchTitle")
  clubMatchTitle.innerText = "Club Match";
  headerPost.appendChild(clubMatchTitle);

  /*Nav */
  const navPosts = document.createElement("nav");
  navPosts.classList.add("navPosts");
  headerPost.appendChild(navPosts);

  const ulPosts = document.createElement("ul");
  ulPosts.classList.add("ulPosts");
  navPosts.appendChild(ulPosts);

  const liProfile = document.createElement("li");
  liProfile.classList.add("liMenu");
  liProfile.innerText = "Perfil";
  ulPosts.appendChild(liProfile);


  const liSignOff = document.createElement('li');
  liSignOff.innerText = "Cerrar Sesión";
  liSignOff.classList.add('liMenu');
  ulPosts.appendChild(liSignOff)


  buttonMenu.addEventListener("click", () => {
    navPosts.classList.toggle("active");
  })

  const signOutPosts = document.createElement('button');
  signOutPosts.innerText = "Cerrar jeje"
  signOutPosts.addEventListener('click', function () {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  })
    ;
  /*     divPosts.innerHTML = viewPosts; */
  divPosts.appendChild(signOutPosts);

  return divPosts;
};
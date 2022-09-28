import { signOut } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { auth } from "../configFirebase.js";
import { usuario } from "../../main.js";
import { showingPosts } from "../fireStore.js";
import { savingPost } from "../index.js";

export const posts = () => {



  const body = document.getElementsByTagName("body");
  if (window.location.hash === "#/posts") {
    //console.log(body);
    const bodyPosts = body[0];
    bodyPosts.id = "bodyPosts";
  }

  const divPosts = document.createElement("div");
  divPosts.classList.add("divPosts");

  /*Header y menu desplegable*/
  /*Header*/
  const headerPost = document.createElement("header");
  headerPost.classList.add("headerPost");
  divPosts.appendChild(headerPost);

  /*Boton de menu "Hamburguesa"*/

  const buttonMenu = document.createElement("button");
  buttonMenu.classList.add("buttonMenu");
  headerPost.appendChild(buttonMenu);

  const clubMatchTitle = document.createElement("h1");
  clubMatchTitle.classList.add("clubMatchTitle");
  clubMatchTitle.innerText = "Club Match";
  headerPost.appendChild(clubMatchTitle);

  /*Imagen de Header*/
  const imgHeader = document.createElement("img");
  imgHeader.src = "./images/LogoManos.png";
  imgHeader.classList.add("imgHeader");
  headerPost.appendChild(imgHeader);

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

  const liSignOff = document.createElement("li");
  liSignOff.classList.add("liMenu");
  ulPosts.appendChild(liSignOff);

  buttonMenu.addEventListener("click", () => {
    navPosts.classList.toggle("active");
  });

  const signOutPosts = document.createElement("button");
  signOutPosts.id = "logOut"
  signOutPosts.innerText = "Cerrar Sesión";
  signOutPosts.addEventListener("click", function () {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        const bodyPosts = body[0];
        bodyPosts.id = "bodyLogin";
      })
      .catch((error) => {
        // An error happened.
      });
  });
  liSignOff.appendChild(signOutPosts);

  /*Profile */
  const divProfile = document.createElement("div");
  divProfile.id = "divProfile";
  divPosts.appendChild(divProfile);

  let imageUser = usuario.photoURL;
  console.log(usuario);
  console.log(usuario.photoURL);

  const imageProfile = document.createElement("img");
  imageProfile.id = "imageProfile";
  imageProfile.src = imageUser != null ? imageUser : "./images/LogoClubMatch.png"
  divProfile.appendChild(imageProfile);

  let userName = usuario.displayName;
  const nameProfile = document.createElement("h2");
  nameProfile.id = "nameProfile";
  nameProfile.innerText = userName != null ? userName : auth.currentUser.email;
  divProfile.appendChild(nameProfile);

  /*Crear Post*/
  const divCreatePost = document.createElement("div");
  divCreatePost.id = "divCreatePost";
  divPosts.appendChild(divCreatePost);

  const title = document.createElement("input");
  title.type = "text";
  title.classList.add("createPost");
  title.id = "titlePost";
  title.placeholder = "Titulo";
  divCreatePost.appendChild(title);

  const description = document.createElement("input");
  description.type = "text";
  description.classList.add("createPost");
  description.id = "descriptionPost"
  description.placeholder = "Actualiza tú pasatiempo, y haz Match!";
  divCreatePost.appendChild(description);

  const link = document.createElement("input");
  link.type = "text";
  link.classList.add("createPost");
  link.id = "linkPost";
  link.placeholder = "Enlace";
  divCreatePost.appendChild(link);

  /*Boton Publicar*/
  const buttonPost = document.createElement("button");
  buttonPost.classList.add("buttonPost");
  buttonPost.innerText = "Publicar";
  divCreatePost.appendChild(buttonPost);

  buttonPost.addEventListener("click", savingPost);

  /*Imprimir Posts*/

  const divPrintPost = document.createElement("div");
  divPrintPost.id = "divPrintPost"

  showingPosts((post) => {
    let viewHtml = `<div id="containerPost">
    <div id="userInfo">
        <h1 id="userName">${post.name}</h1>
      </div>
        <h2 id="titleP">${post.title}</h2>
        <p id="descriptionPost">${post.description}</p>
        <p id="linkP">${post.link}</p>
        <button id="buttonLike"><img id="imgBtnLike" src="images/LogoManos.png"/></button>
        </div>
        `;
    divPrintPost.innerHTML += viewHtml;
    divPosts.appendChild(divPrintPost);
  });

  return divPosts;
};

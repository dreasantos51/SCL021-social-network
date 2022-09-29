import { signOut } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { auth } from "../configFirebase.js";
import { usuario } from "../../main.js";
import { showingPosts } from "../fireStore.js";
import { savingPost } from "../index.js";

/*Se crea funcion posts que renderiza segun #/Posts */
export const posts = () => {

  /* div que contiene toda la estructura de la vista Posts */
  const divPosts = document.createElement("div");
  divPosts.classList.add("divPosts");

  /*Header*/
  const headerPost = document.createElement("header");
  headerPost.classList.add("headerPost");
  divPosts.appendChild(headerPost);

  /*Boton de menu "Hamburguesa"*/
  const buttonMenu = document.createElement("button");
  buttonMenu.classList.add("buttonMenu");
  headerPost.appendChild(buttonMenu);

  /*Titulo*/
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

  //evento que escucha click y agrega class active a nav
  buttonMenu.addEventListener("click", () => {
    navPosts.classList.toggle("active");
  });
  //se crea button para cerrar sesion y se le da funcionalidad para deslogear
  const signOutPosts = document.createElement("button");
  signOutPosts.id = "logOut"
  signOutPosts.innerText = "Cerrar Sesión";
  signOutPosts.addEventListener("click", function () {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  });
  liSignOff.appendChild(signOutPosts);

  /*Profile */
  //div que contiene la foto de perfil y nombre de usuario
  const divProfile = document.createElement("div");
  divProfile.id = "divProfile";
  divPosts.appendChild(divProfile);

  let imageUser = usuario.photoURL;

  const imageProfile = document.createElement("img");
  imageProfile.id = "imageProfile";
  imageProfile.src = imageUser != null ? imageUser : "./images/LogoClubMatch.png" //se img es null utiliza el logo como img de perfil
  divProfile.appendChild(imageProfile);

  let userName = usuario.displayName;
  const nameProfile = document.createElement("h2");
  nameProfile.id = "nameProfile";
  nameProfile.innerText = userName != null ? userName : auth.currentUser.email; //operador ternario, reconoce el "username" y se no existe ocupa el email
  divProfile.appendChild(nameProfile);

  /*Crear Post*/
  //div que contiene  la estructura para crear un post
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
  // escucha el click y guarda la informacion de lo post en firebase
  buttonPost.addEventListener("click", savingPost);

  /*Imprimir Posts*/
  // div que contiene el template para mostrar los posts
  const divPrintPost = document.createElement("div");
  divPrintPost.id = "divPrintPost"
  //function que trae los datos guardados en la colecion de firebase
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

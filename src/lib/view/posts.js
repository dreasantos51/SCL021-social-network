import { signOut } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { auth } from "../configFirebase.js";
import { db } from "../configFirebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";


export const posts = () => {
  const divPosts = document.createElement('div');
  divPosts.classList.add("divPosts");

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
  liSignOff.classList.add('liMenu');
  ulPosts.appendChild(liSignOff)


  buttonMenu.addEventListener("click", () => {
    navPosts.classList.toggle("active");
  })

  const signOutPosts = document.createElement('button');
  signOutPosts.innerText = "Cerrar Sesión"
  signOutPosts.addEventListener('click', function () {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  })
    ;
  liSignOff.appendChild(signOutPosts);

/*Imput de Publicaciones*/
const title = document.createElement('input');
  title.type = "text"
  title.classList.add("title");
  title.placeholder = 'Titulo';
  divPosts.appendChild(title);

            
  const description = document.createElement('input');
  description.type = 'text'
  description.classList.add("description");
  description.placeholder = 'Publicación';
  divPosts.appendChild(description);

  
  const link = document.createElement('input');
  link.type = "text"
  link.classList.add("link");
  link.placeholder = 'Enlace';
  divPosts.appendChild(link);

  /*Boton Publicar*/
  const buttonPost = document.createElement('button');
  buttonPost.classList.add = 'buttonPost';
  buttonPost.innerText = 'Publicar'
  divPosts.appendChild(buttonPost);



  buttonPost.addEventListener("click", async () => {
    const docRef = await addDoc(collection(db, "post"), {
        title: title.value,
        description: description.value,
       link: link.value,
      });
      console.log("Document written with ID: ", docRef.id);
    })

/*   const email = document.createElement('input');
  description.type = 'email'
  description.classList.add("email");
  description.placeholder = 'Correo';
  divPosts.appendChild(email);
 */
  return divPosts;
};
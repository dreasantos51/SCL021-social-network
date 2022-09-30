import { showView } from "./lib/router.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { auth } from "./lib/configFirebase.js";


// variable que guarda la información del usuario cuando esta logeado
export let usuario = {};

//Función que escucha cuando cambia la ruta, y corre la funcion showView para renderizar según el hash
const init = () => {
  window.addEventListener("hashchange", () => {
    console.log(window.location.hash);
    showView(window.location.hash);
  });

};
// evento que escucha cuando la ventana se carga y corre la funcion init
window.addEventListener("load", init);

//Obversador de Firebase, cuando el usuario está logeado redirige a la vista de Posts,
//cuando el usuario no está logeado redirige a la vista login
onAuthStateChanged(auth, (user) => {
  if (user) {
    usuario = user;
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("estoy logeado", user)
    showView("#/posts");
    window.location.hash = "#/posts";
  } else {
    showView("#/login");
    window.location.hash = "#/login";
    // User is signed out
    // ...
    console.log("no estoy logeado", user);
  }
});


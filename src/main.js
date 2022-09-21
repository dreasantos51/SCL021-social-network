import { changeRoute } from "./lib/router.js";
import { login } from "./lib/view/login.js";
import { register } from "./lib/view/register.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { auth } from "./lib/configFirebase.js";

export let usuario = {};

const init = () => {
  //document.getElementById("root").appendChild(login());
  window.addEventListener("hashchange", () => {
    console.log(window.location.hash);
    changeRoute(window.location.hash);
  });

};

window.addEventListener("load", init);


onAuthStateChanged(auth, (user) => {
  if (user) {
    usuario = user;
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    changeRoute("#/posts");
    window.location.hash = "#/posts";
  } else {
    changeRoute("#/login");
    window.location.hash = "#/login";
    // User is signed out
    // ...
    console.log("no estoy logeado", user);
  }
});


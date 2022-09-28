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
    console.log("estoy logeado", user)
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

// const user = auth.currentUser;

// export const pruebauser = () => {
//   console.log("hola")
//   if (user !== null) {
//     user.providerData.forEach((profile) => {
//       console.log("Sign-in provider: " + profile.providerId);
//       console.log("  Provider-specific UID: " + profile.uid);
//       console.log("  Name: " + profile.displayName);
//       console.log("  Email: " + profile.email);
//       console.log("  Photo URL: " + profile.photoURL);
//     });
//   }

// }

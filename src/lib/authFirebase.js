import { auth } from "./configFirebase.js"
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";



//login con google
const provider = new GoogleAuthProvider();

export let loginWithGoogle = () => {
  console.log('login')
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage)
      // ...
    });
}
//crear el usuario
export let registerWithEmail = (email, password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password, displayName)
    .then((userCredential) => {
      console.log("prueba")
      // Signed in
      const user = userCredential.user;
      console.log(user);
      user.displayName = displayName;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

//Login con email y contraseña
export let loginWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Noerror")
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      alert("El usuario no existe")
      const errorCode = error.code;
      const errorMessage = error.message;

    });
}
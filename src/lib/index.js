// aqui exportaras las funciones que necesites

import { savePost } from "./fireStore.js";

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

//---------- Función para Guardar Posts ----------
export const savingPost = () => {
  const titlePost = document.getElementById("titlePost").value;
  const descriptionPost = document.querySelector(".createPost").value;
  const linkPost = document.getElementById("linkPost").value;
  savePost(titlePost, descriptionPost, linkPost);
  document.getElementById("titlePost").value = "";
  document.querySelector(".createPost").value = "";
  document.getElementById("linkPost").value = "";
  divPrintPost.innerHTML = "";
}

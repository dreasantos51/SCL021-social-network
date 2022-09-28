import { savePost } from "./fireStore.js";

//Función para Guardar Posts según la información escrita en los input 
export const savingPost = () => {
  const titlePost = document.getElementById("titlePost").value;
  const descriptionPost = document.getElementById("descriptionPost").value;
  const linkPost = document.getElementById("linkPost").value;
  savePost(titlePost, descriptionPost, linkPost);
  document.getElementById("titlePost").value = "";
  document.getElementById("descriptionPost").value = "";
  document.getElementById("linkPost").value = "";
  divPrintPost.innerHTML = "";
}

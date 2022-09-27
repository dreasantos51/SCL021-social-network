import { signOut } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { auth } from "../configFirebase.js";
import { usuario } from "../../main.js";
import { printPrueba, savePost } from "../fireStore.js";
import { async } from "regenerator-runtime";

export const posts = () => {
	const body = document.getElementsByTagName("body");
	if (window.location.hash === "#/posts") {
		console.log(body);
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
	imageProfile.src = imageUser;
	divProfile.appendChild(imageProfile);

	let userName = usuario.displayName;
	const nameProfile = document.createElement("h2");
	nameProfile.id = "nameProfile";
	nameProfile.innerText = userName;
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

	let viewHtml = "";
	buttonPost.addEventListener("click", () => {
		const titlePost = title.value;
		const descriptionPost = description.value;
		const linkPost = link.value;
		savePost(titlePost, descriptionPost, linkPost);
		title.value = "";
		description.value = "";
		link.value = "";
		console.log(printPrueba());
		});

	return divPosts;
};
// mostrar post en la vista
export const mostrarPost = async () => {
		const divPrintPost = document.createElement("div");
			divPrintPost.id = "divPrintPost";
		 	// divPrintPost.innerHTML = viewHtml;
	divPosts.appendChild(divPrintPost);
	printPrueba((post) => {
		divPrintPost.innerHTML = "";
		post.forEach((e) => {
		const viewHtml = `<div id="containerPost">
        <h1 id="userName">${e.name}</h1>
        <h2 id="titleP">${e.title}</h2>
        <p id="descriptionPost">${e.description}</p>
        <p id="linkP">${e.link}</p>
        <img id="like" src="images/LogoManos.png"/>
        </div>
        `;
			divPrintPost.innerHTML += viewHtml;
			});
		})
	}
	
		

		// printPost().then((pagePost) => {
		// 	console.log(pagePost);
		// 	pagePost.forEach((e) => {
				
		// 
		/*Imprimir Post*/
	

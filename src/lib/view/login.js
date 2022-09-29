import { loginWithEmail, loginWithGoogle } from "../authFirebase.js";

/*Se crea funcion login que renderiza segun #/Login */
export const login = () => {

  /* div que contiene toda la estructura de la vista Login */
  const divLogin = document.createElement('div');
  divLogin.classList.add("loginPage");

  const viewlogin = `
    <div id= "containerLogo">
    <img class="logo" src="images/LogoClubMatch.png" />
    </div>
 `;
  divLogin.innerHTML = viewlogin;

  const divContainer = document.createElement("div");
  divContainer.classList.add("divContainer");
  divLogin.appendChild(divContainer);


  /*imput de email*/
  const emailInput = document.createElement('input');
  emailInput.type = 'email'
  emailInput.classList.add("email");
  emailInput.placeholder = 'Email';
  divContainer.appendChild(emailInput);

  /*imput de password*/
  const passwordInput = document.createElement('input');
  passwordInput.type = "password";
  passwordInput.classList.add("password");
  passwordInput.placeholder = 'Password';
  divContainer.appendChild(passwordInput);


  /*Boton de Iniciar*/
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonLogin');
  buttonLogin.innerText = 'Iniciar Sesión'
  divContainer.appendChild(buttonLogin);

  buttonLogin.addEventListener("click", () => {
    const emailLogin = emailInput.value;
    const passwordLogin = passwordInput.value;
    loginWithEmail(emailLogin, passwordLogin);
  })

  /*--O-- */
  const containerLines = document.createElement("div");
  containerLines.id = "containerlines"
  containerLines.innerHTML = ` 
      <div class="line"></div>
      <div class="space"></div>
      <p id="o">o</p>
      <div class="space"></div>
     <div class="line"></div>
      `
  divContainer.appendChild(containerLines);

  /*Boton para abrir cuenta con google*/
  const buttonGoogle = document.createElement('button');
  buttonGoogle.id = 'signUpGoogle';
  buttonGoogle.innerText = 'Iniciar Sesión con Google'
  buttonGoogle.addEventListener("click", loginWithGoogle);
  divContainer.appendChild(buttonGoogle);

  /*imagen Google*/
  const imgButtonGoggle = document.createElement('img');
  imgButtonGoggle.src = "images/LogoGoogle.png"
  imgButtonGoggle.classList.add('google');
  buttonGoogle.appendChild(imgButtonGoggle)

  /*Parrafo "¿Aun no tienes cuenta?"*/
  const redirectionRegister = document.createElement('p');
  redirectionRegister.classList.add('redirectionRegister');
  redirectionRegister.innerText = '¿Aún no tienes cuenta? '
  divContainer.appendChild(redirectionRegister);
  /*Ruta que redirige a vista Register */
  const hrefRegister = document.createElement('a');
  hrefRegister.classList.add('hrefRegister');
  hrefRegister.innerText = 'Registrate'
  hrefRegister.href = '#/register'
  redirectionRegister.appendChild(hrefRegister);


  return divLogin;
};

import { loginWithGoogle } from "../authFirebase.js";
export const login = () => {


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

  /*Parrafo de olvidaste tu contraseña*/
  const forgetPassword = document.createElement('p');
  forgetPassword.classList.add('forget');
  forgetPassword.innerText = '¿Haz olvidado tú contraseña? Click'
  divContainer.appendChild(forgetPassword);

  const hrefForget = document.createElement('a');
  hrefForget.classList.add('hrefForget');
  hrefForget.innerText = ' Aqui'
  hrefForget.href = '#/'
  forgetPassword.appendChild(hrefForget);

  /*Boton de Iniciar*/
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonLogin');
  divContainer.appendChild(buttonLogin);

  const hrefLogin = document.createElement('a');
  hrefLogin.classList.add('hrefLogin');
  hrefLogin.innerText = 'Iniciar'
  hrefLogin.href = '#/posts'
  buttonLogin.appendChild(hrefLogin);

  /*Parrafo "¿Aun no tienes cuenta?"*/
  const redirectionRegister = document.createElement('p');
  redirectionRegister.classList.add('redirectionRegister');
  redirectionRegister.innerText = '¿Aún no tienes cuenta?'
  divContainer.appendChild(redirectionRegister);

  const hrefRegister = document.createElement('a');
  hrefRegister.classList.add('hrefRegister');
  hrefRegister.innerText = 'Registrate'
  hrefRegister.href = '#/register'
  redirectionRegister.appendChild(hrefRegister);

  /*Boton para abrir cuenta con google*/
  const buttonGoogle = document.createElement('button');
  buttonGoogle.id = 'signUpGoogle';
  buttonGoogle.innerText = 'Acceder con Google'
  buttonGoogle.addEventListener("click", loginWithGoogle);
  divContainer.appendChild(buttonGoogle);

  /*imagen Google*/
  const imgButtonGoggle = document.createElement('img');
  imgButtonGoggle.src = "images/LogoGoogle.png"
  imgButtonGoggle.classList.add('google');
  buttonGoogle.appendChild(imgButtonGoggle)


  return divLogin;
};

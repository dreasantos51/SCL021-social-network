import { registerWithEmail } from "../authFirebase.js";

/*Se crea funcion register que renderiza segun #/Register */
export const register = () => {
  /* div que contiene toda la estructura de la vista Register */
  const divRegister = document.createElement('div');
  divRegister.classList.add("container");

  const viewRegister = `
      <header class="headerRegister">
      <h1 class="ClubMatch">CLUB MATCH</h1>
      </header>
      `;

  divRegister.innerHTML = viewRegister;


  /*Se crea formulario de registro*/

  const registerForm = document.createElement('form');
  registerForm.classList.add('registerForm');
  divRegister.appendChild(registerForm);

  const statement = document.createElement('p');
  statement.classList.add('statement');
  statement.innerText = "Ingresa tus datos para crear una cuenta";
  registerForm.appendChild(statement);

  /*Input Nombre*/
  const nameRegister = document.createElement('input');
  nameRegister.type = "text"
  nameRegister.classList.add("name");
  nameRegister.placeholder = 'Nombre';
  registerForm.appendChild(nameRegister);

  /*Input Edad*/
  const ageRegister = document.createElement('input');
  ageRegister.type = 'number'
  ageRegister.classList.add("age");
  ageRegister.placeholder = 'Edad';
  registerForm.appendChild(ageRegister);

  /* Input País */
  const countryRegister = document.createElement('input');
  countryRegister.type = "text"
  countryRegister.classList.add("country");
  countryRegister.placeholder = 'País';
  registerForm.appendChild(countryRegister);

  /*Input Email*/
  const emailRegister = document.createElement('input');
  emailRegister.type = "email"
  emailRegister.classList.add("email");
  emailRegister.placeholder = 'Email';
  registerForm.appendChild(emailRegister);

  /*Input Password*/
  const passwordRegister = document.createElement('input');
  passwordRegister.type = "password";
  passwordRegister.classList.add("password");
  passwordRegister.placeholder = 'Contraseña';
  registerForm.appendChild(passwordRegister);

  /*Contenedor de botones*/
  const divButtons = document.createElement('div');
  divButtons.classList.add('divButtons');
  registerForm.appendChild(divButtons);

  /*Botón para Iniciar sesión luego de registrarse*/
  const buttonRegister = document.createElement('button');
  buttonRegister.id = 'OK';
  buttonRegister.type = "submit";
  buttonRegister.val = "submit";
  buttonRegister.innerText = 'Iniciar'
  divButtons.appendChild(buttonRegister);

  //evento que escucha cuando se envia la información del formulario, y se guarda dentro de las variables
  registerForm.addEventListener('submit', () => {
    const email = emailRegister.value;
    console.log(email)
    const password = passwordRegister.value;
    console.log(password)
    const displayName = nameRegister.value;
    console.log(displayName)
    //Función que guarda los datos del registro en firebase
    registerWithEmail(email, password, displayName);//se pasan variables guardadas como argumentos

  });


  //Botón para vovler atrás
  const buttonBack = document.createElement('button');
  buttonBack.id = 'back';
  divButtons.appendChild(buttonBack);

  const hrefBack = document.createElement('a');
  hrefBack.classList.add('hrefBack');
  hrefBack.innerText = 'Atras'
  hrefBack.href = '#/login'
  buttonBack.appendChild(hrefBack);


  return divRegister;
};






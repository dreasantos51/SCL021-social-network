export const register = () => {
  const divRegister = document.createElement('div');
  divRegister.classList.add("container");

  const viewRegister = `
      <header>
      <h1 class="ClubMatch">CLUB MATCH</h1>
      </header>
      `;

  divRegister.innerHTML = viewRegister;


  /*crear formulario*/

  const registerForm = document.createElement('form');
  registerForm.classList.add('registerForm');
  divRegister.appendChild(registerForm);

  const statement = document.createElement('p');
  statement.classList.add('statement');
  statement.innerText = "Ingresa tus datos para crear una cuenta";
  registerForm.appendChild(statement);

  /*   <input type="text" class="name" placeholder="Nombre"> */
  const nameRegister = document.createElement('input');
  nameRegister.type = "text"
  nameRegister.classList.add("name");
  nameRegister.placeholder = 'Nombre';
  registerForm.appendChild(nameRegister);

  // <input type="text" class="age" placeholder="Edad">              
  const ageRegister = document.createElement('input');
  ageRegister.type = 'number'
  ageRegister.classList.add("age");
  ageRegister.placeholder = 'Edad';
  registerForm.appendChild(ageRegister);

  /* <input type="text" class="country" placeholder="País"> */
  const countryRegister = document.createElement('input');
  countryRegister.type = "text"
  countryRegister.classList.add("country");
  countryRegister.placeholder = 'País';
  registerForm.appendChild(countryRegister);

  // <input type="email" class="email" placeholder="Email">
  const emailRegister = document.createElement('input');
  emailRegister.type = "email"
  emailRegister.classList.add("email");
  emailRegister.placeholder = 'Email';
  registerForm.appendChild(emailRegister);

  /* <input type="password" class="password" placeholder="Contraseña"> */
  const passwordRegister = document.createElement('input');
  passwordRegister.type = "password";
  passwordRegister.classList.add("password");
  passwordRegister.placeholder = 'Contraseña';
  registerForm.appendChild(passwordRegister);

  /*Contenedor de botones*/
  const divButtons = document.createElement('div');
  divButtons.classList.add('divButtons');
  registerForm.appendChild(divButtons);

  //<button type="button" name="OK" id="OK"><a href="#/login">Registrarse</a></button> */
  const buttonRegister = document.createElement('button');
  buttonRegister.id = 'OK';
  divButtons.appendChild(buttonRegister);

  const submitRegister = document.createElement('a');
  submitRegister.classList.add('submitRegister');
  submitRegister.type = "submit";
  submitRegister.val = "submit";
  submitRegister.innerText = 'Iniciar'
  submitRegister.href = '#/posts'
  buttonRegister.appendChild(submitRegister);


  // button type="button" name="back" id="back"><a href="#/login">Atras</a></button>
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






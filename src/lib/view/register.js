export const register = () => {
  const divRegister = document.createElement('div');

  const viewRegister = `
      <header><p>Club</p>
      <p>Match</p></header>
      `;
   
  divRegister.innerHTML = viewRegister;
  
  /*crear formulario*/

 const registerForm = document.createElement('form');
 registerForm.classList.add('registerForm');
 divRegister.appendChild(registerForm);
    
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

//<button type="button" name="OK" id="OK"><a href="#/login">Registrarse</a></button> */
const buttonRegister= document.createElement('button');
buttonRegister.id= 'OK';
registerForm.appendChild(buttonRegister);

const submitRegister = document.createElement('a');
submitRegister.classList.add('submitRegister');
submitRegister.type = "submit";
submitRegister.val = "submit";
submitRegister.innerText = 'iniciar'
submitRegister.href = '#/posts'
buttonRegister.appendChild(submitRegister); 

 // button type="button" name="back" id="back"><a href="#/login">Atras</a></button>
 
const buttonBack = document.createElement('button');
buttonBack.id= 'back';
registerForm.appendChild(buttonBack);

const hrefBack = document.createElement('a');
hrefBack.classList.add('hrefBack');
hrefBack.innerText = 'Atras'
hrefBack.href = '#/login'
buttonBack.appendChild(hrefBack); 

  return divRegister;
};



 

/* <div>
<input type="text" class="name" placeholder="Nombre">
<input type="text" class="age" placeholder="Edad">
<input type="text" class="country" placeholder="País">
<input type="email" class="email" placeholder="Email">
<input type="password" class="password" placeholder="Contraseña">
<button type="button" name="OK" id="OK"><a href="#/login">Registrarse</a></button>
<button type="button" name="back" id="back"><a href="#/login">Atras</a></button>
</div>`; */





 // button type="button" name="back" id="back"><a href="#/login">Atras</a></button>

 
export const homePoster = () =>

 let home = `<div>
<img class="logo" src="images/LogoClubMatch.png"></img>
<input type="email" name="email" id="email" placeholder="Email" />
<input type="password" name="password" id="password" placeholder="Contraseña" />
<button type="button" name="login" id="login">Iniciar</button>
<p id="parrafo">¿Aún no tienes cuenta?, Resgistrate</p>
<button type="button" name="singUp" id="singUp">Registrarse</button>
<button type="button" name="singUpGoogle" id="singUpGoogle"><img class="google" src="images/google.png" />Acceder con
  google</button>
</div>`;

document.querySelector(".root").innerHTML += home

}
  

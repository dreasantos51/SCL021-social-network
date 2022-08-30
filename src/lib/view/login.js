export const login = () => {
  const viewlogin = /*html*/ `
    <div>
      <img class="logo" src="images/LogoClubMatch.png"/>
      <input type="email" name="email" id="email" placeholder="Email" />
      <input type="password" name="password" id="password" placeholder="Contraseña" />
      <button type="button" name="login" id="login">Iniciar</button>
      <p>Si no tienes cuenta,<a href="#/singin" > Registrate</a></p>
      <button type="button" name="singUpGoogle" id="singUpGoogle"><img class="google" src="images/google.png" />Acceder con
      google</button>
    </div>`;
  return viewlogin;
};

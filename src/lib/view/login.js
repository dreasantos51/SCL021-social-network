export const login = () => {
  const viewlogin = `
  <div class="loginPage">
    <img class="logo" src="images/LogoClubMatch.png" />
    <input type="email" name="email" id="email" placeholder="Email" />
    <input type="password" name="password" id="password" placeholder="Contraseña" />
    <button type="button" name="login" id="login"><a href="#/posts">Iniciar</a></button>
    <p class="singin">¿Aún no tienes cuenta? <a class="hrefSingIn" href="#/singin">Registrate</a></p>
    <button type="button" name="singUpGoogle" id="singUpGoogle"><img class="google" src="images/LogoGoogle.png" />Acceder con google</button>
  </div>`;
  return viewlogin;
};

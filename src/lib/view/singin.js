export const singIn = () => {
  const divSingIn = document.createElement('div');

  const viewsingIn = `
    <div>
        <img class="logoPagTwo" src="images/LogoClubMatch.png"/>
        <input type="text" class="name" placeholder="Nombre">
        <input type="text" class="age" placeholder="Edad">
        <input type="text" class="country" placeholder="País">
        <input type="email" class="email" placeholder="Email">
        <input type="password" class="password" placeholder="Contraseña">
        <button type="button" name="OK" id="OK">Registrarse</button>
     </div>`;
  divSingIn.innerHTML = viewsingIn;

  return divSingIn;
};

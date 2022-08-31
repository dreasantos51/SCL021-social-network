export const singIn = () => {
  const divSingIn = document.createElement('div');

  const viewsingIn = `
    <div>
        <img class="logoPagTwo" src="images/LogoClubMatch.png"></img>
        <input type="name" class="name" placeholder="Nombre">
        <input type="edad" class="age" placeholder="Edad">
        <input type="pais" class="country" placeholder="País">
        <input type="email" class="email" placeholder="Email">
        <input type="password" class="password" placeholder="Contraseña">
        <button type="button" name="OK" id="OK">Listo</button>
    </div>`;
  divSingIn.innerHTML = viewsingIn;

  return divSingIn;
};

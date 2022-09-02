export const register = () => {
  const divRegister = document.createElement('div');

  const viewRegister = `
      <header><p>Club</p>
      <p>Match</p></header>
    <div>
        <input type="text" class="name" placeholder="Nombre">
        <input type="text" class="age" placeholder="Edad">
        <input type="text" class="country" placeholder="País">
        <input type="email" class="email" placeholder="Email">
        <input type="password" class="password" placeholder="Contraseña">
        <button type="button" name="OK" id="OK"><a href="#/login">Registrarse</a></button>
        <button type="button" name="back" id="back"><a href="#/login">Atras</a></button>
     </div>`;
  divRegister.innerHTML = viewRegister;

  return divRegister;
};

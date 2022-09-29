import { login } from './view/login.js'
import { posts } from './view/posts.js'
import { register } from './view/register.js'

/*funcion que crea enrutamientos entre las vistas usando SPA*/
export const showView = (hash) => {
  const containerRoot = document.getElementById('root');
  switch (hash) {
    case '#':
      containerRoot.innerHTML = "";
      containerRoot.appendChild(login());
      break;
    case '#/login':
      containerRoot.innerHTML = "";
      containerRoot.appendChild(login());
      break;
    case '#/register':
      containerRoot.innerHTML = "";
      containerRoot.appendChild(register());
      break;
    case '#/posts':
      containerRoot.innerHTML = "";
      containerRoot.appendChild(posts());
      break;
    default:
      containerRoot.innerHTML = `<h2>No existe</<h2>`
  }
}
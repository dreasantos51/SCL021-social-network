import { login } from './view/login.js'
import { posts } from './view/posts.js'
import { register } from './view/register.js'

export const changeRoute = (hash) => {
  if (hash === '#/register' || hash === ' ') {
    return showView(hash)
  } else if (hash === '#/posts') {
    return showView(hash)
  } else if (hash === '#/login') {
    return showView(hash)
  } else {
    return showView(hash)
  }
}

const showView = (hash) => {
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
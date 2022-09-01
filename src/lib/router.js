import { login } from './view/login.js'
import { posts } from './view/posts.js'
import { singIn } from './view/singin.js'

export const changeRoute = (hash) => {
  if (hash === '#/singin' || hash === ' ') {
    return showView(hash)
  } else if (hash === '#/posts') {
    return showView(hash)
  } else {
    return showView(hash)
  }
}

const showView = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = login();

  switch (hash) {
    case '#/singin':
      containerRoot.innerHTML = "";
      containerRoot.appendChild(singIn());
      break;
    case '#/posts':
      containerRoot.innerHTML = "";
      containerRoot.appendChild(posts());
      break;
    default:
      containerRoot.innerHTML = `<h2>No exisite</<h2>`
  }
}
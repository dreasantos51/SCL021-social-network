import { login } from './view/login.js';
import { singIn } from './view/singin.js';

export const changeRoute = (hash) => {
  if (hash === "#/login") {
    return showView(hash)
  } else if (hash === "#/singin") {
    return showView(hash)
  } else {
    return showView(hash)
  }
};

const showView = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = login();

  switch (hash) {
    case "#/":
      containerRoot.appendChild(login())
      
    break;
    case '#/singin':
    containerRoot.appendChild(singIn())
    break;
  }
};

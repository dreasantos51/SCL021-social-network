// Este es el punto de entrada de tu aplicacion
import { login } from './lib/view/login.js';
import { myFunction } from './lib/index.js';
import { changeRoute } from './lib/router.js';



const init = () => {
    
    window.addEventListener('hashchange', () => {
     myFunction();
     console.log(window.location.hash);   
     changeRoute(window.location.hash);
    })
}
window.addEventListener('load', init)
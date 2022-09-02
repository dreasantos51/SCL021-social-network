import { myFunction } from './lib/index.js';
import { changeRoute } from './lib/router.js';
import { login } from './lib/view/login.js'
import { register } from './lib/view/register.js';



myFunction();
document.getElementById('root').innerHTML = login();

const init = () => {
    window.addEventListener('hashchange', () => {
        console.log(window.location.hash);
        changeRoute(window.location.hash);
    })
}

window.addEventListener('load', init)
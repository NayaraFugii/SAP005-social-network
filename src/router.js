import { Register } from './pages/register/index.js';
import { Login } from './pages/login/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
    const rootDiv = document.getElementById('root');
    const routes = {
        "/": Login,
        "/cadastro": Register

    };

    rootDiv.innerHTML = '';
    rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {


    routeRender();
});





// const renderRouter = () => {
//     root.innerHTML = "";
//     if (!routers[window.location.pathname]) {
//         window.location = '/'
//     } else {
//         root.appendChild(routers[window.location.pathname]());
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     renderRouter();
// })
import { html, render } from './node_modules/lit-html/lit-html.js';
import { navView } from './views/nav.js';
import page from './node_modules/page/page.mjs';

import { welcomeView } from './views/welcome.js';
import { loginView } from './views/login.js';

import { renderWelcome } from './middlewares/welcome.js';
import { renderNav } from './middlewares/nav.js';
import { renderLogin } from './middlewares/login.js';
import { deleteEntry, logout } from './utils.js';
import { renderRegister } from './middlewares/register.js';
import { renderDashboard } from './middlewares/dashboard.js';
import { renderDetails } from './middlewares/details.js';
import { renderCreate } from './middlewares/create.js';
import { renderEdit } from './middlewares/edit.js';
import { donate } from './middlewares/donate.js';

const main = document.querySelector('main');

renderNav();

page('/', renderWelcome);
page('/login', renderLogin);
page('/logout', logout);
page('/register', renderRegister);
page('/dashboard', renderDashboard);
page('/details/:id', renderDetails);
page('/create', renderCreate);
page('/delete/:id', deleteEntry);
page('/edit/:id', renderEdit);
page('/donate/:id', donate);
page.start();


import { post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

export const loginView = () => {
    return html`
    <section id="loginPage">
        <form class="loginForm" @submit=${login}>
            <img src="./images/logo.png" alt="logo" />
            <h2>Login</h2>
    
            <div>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
    
            <div>
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
    
            <button class="btn" type="submit">Login</button>
    
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </form>
    </section>`;
}

async function login(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const email = form.get('email').trim();
    const password = form.get('password').trim();

    if (!(password && email)) {
        alert('No empty fields');
    } else {
        const data = await post('/users/login', { email, password });
        sessionStorage.setItem('auth-token', data.accessToken);
        sessionStorage.setItem('id', data._id);
        page('/');
    }
}
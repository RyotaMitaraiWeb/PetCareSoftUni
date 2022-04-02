import { post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

export const registerView = () => {
    return html`
    <section id="registerPage">
        <form class="registerForm" @submit=${register}>
            <img src="./images/logo.png" alt="logo" />
            <h2>Register</h2>
            <div class="on-dark">
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
    
            <div class="on-dark">
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
    
            <div class="on-dark">
                <label for="repeatPassword">Repeat Password:</label>
                <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
            </div>
    
            <button class="btn" type="submit">Register</button>
    
            <p class="field">
                <span>If you have profile click <a href="/login">here</a></span>
            </p>
        </form>
    </section>`;
}

async function register(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const email = form.get('email').trim();
    const password = form.get('password').trim();
    const repass = form.get('repeatPassword').trim();

    if (repass !== password) {
        alert('Passwords do not match');
    } else if (!(password && repass && email)) {
        alert('No empty fields');
    } else {
        const data = await post('/users/register', { email, password });
        sessionStorage.setItem('auth-token', data.accessToken);
        sessionStorage.setItem('id', data._id);
        page('/');
    }
}
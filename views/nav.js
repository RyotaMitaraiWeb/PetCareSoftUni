import { html, render } from '../node_modules/lit-html/lit-html.js';
import { checkUser } from '../utils.js';

export const navView = () => {
    return html`
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    <!--Only Guest-->
    ${
        checkUser() 
        ? html`<li><a href="/create">Create Postcard</a></li>
        <li><a href="/logout">Logout</a></li>`
        : html`<li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>`
    }`;
}
import { render, html } from "../node_modules/lit-html/lit-html.js";
import { loginView } from "../views/login.js";
import { renderNav } from "./nav.js";

export function renderLogin() {
    renderNav()
    render(loginView(), document.querySelector('main'));
}
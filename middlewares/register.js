import { render, html } from "../node_modules/lit-html/lit-html.js";
import { registerView } from "../views/register.js";
import { renderNav } from "./nav.js";

export function renderRegister() {
    renderNav()
    render(registerView(), document.querySelector('main'));
}
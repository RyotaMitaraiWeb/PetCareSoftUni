import { render, html } from "../node_modules/lit-html/lit-html.js";
import { navView } from "../views/nav.js";

export function renderNav() {
    render(navView(), document.querySelector('.nav'));
}
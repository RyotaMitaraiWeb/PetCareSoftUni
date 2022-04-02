import { render, html } from "../node_modules/lit-html/lit-html.js";
import { createView } from "../views/create.js";
import { renderNav } from "./nav.js";

export async function renderCreate() {
    renderNav();
    render(createView(), document.querySelector('main'));
}


import { render, html } from "../node_modules/lit-html/lit-html.js";
import { editView } from "../views/edit.js";
import { renderNav } from "./nav.js";
import { get } from "../api.js";

export async function renderEdit(ctx) {
    const id = ctx.params.id;
    const data = await get('/data/pets/' + id);

    renderNav();
    render(editView(data), document.querySelector('main'));
}


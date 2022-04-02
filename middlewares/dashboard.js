import { get } from "../api.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import { animalBoardView } from "../views/animalBoard.js";
import { dashboardView } from "../views/dashboard.js";
import { renderNav } from "./nav.js";

export async function renderDashboard() {
    renderNav();
    const data = await get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
    const values = Object.values(data);

    const boards = values.map(animalBoardView);
    render(html`
    ${dashboardView(boards)}
    `, document.querySelector('main'));
}
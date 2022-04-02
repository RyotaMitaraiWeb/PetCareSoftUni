import { get } from "../api.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import { animalBoardView } from "../views/animalBoard.js";
import { dashboardView } from "../views/dashboard.js";
import { welcomeView } from "../views/welcome.js";
import { renderNav } from "./nav.js";

export async function renderWelcome() {
    renderNav();

    render(
    welcomeView()
    
    , document.querySelector('main')); 
}


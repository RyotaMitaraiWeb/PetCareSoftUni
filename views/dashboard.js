import { html, render } from '../node_modules/lit-html/lit-html.js';

export const dashboardView = data => {
    return html`
    <section id="dashboard">
        <h2 class="dashboard-title">Services for every animal</h2>
        <div class="animals-dashboard">
            
            ${data.length > 0 
            ? html`${data}`
            : html`<div>
                <p class="no-pets">No pets in dashboard</p>
            </div>`
            }
        </div>
    </section>`;
}
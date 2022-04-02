import { html, render } from '../node_modules/lit-html/lit-html.js';

export const animalBoardView = data => {
    return html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src=${data.image}>
        </article>
        <h2 class="name">${data.name}</h2>
        <h3 class="breed">${data.breed}</h3>
        <div class="action">
            <a class="btn" href="/details/${data._id}">Details</a>
        </div>
    </div>`;
}
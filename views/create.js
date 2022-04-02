import { post } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';


export const createView = () => {
    return html`
    <section id="createPage">
        <form class="createForm" @submit=${create}>
            <img src="./images/cat-create.jpg">
            <div>
                <h2>Create PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" placeholder="Max">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" placeholder="2 years">
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" placeholder="5kg">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                </div>
                <button class="btn" type="submit">Create Pet</button>
            </div>
        </form>
    </section>`;
}

async function create(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const name = form.get('name').trim();
    const breed = form.get('breed').trim();
    const age = form.get('age').trim();
    const weight = form.get('weight').trim();
    const image = form.get('image').trim();

    if (!(name && breed && age && weight && image)) {
        alert('No empty fields');
    } else {
        const data = await post('/data/pets', { name, breed, age, weight, image });
        page('/');
    }
}
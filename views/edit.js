import { put } from '../api.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

export const editView = data => {
    return html`
    <section id="editPage">
        <form class="editForm" @submit=${edit} id=${data._id}>
            <img src="../images/editpage-dog.jpg">
            <div>
                <h2>Edit PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" value=${data.name}>
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" value=${data.breed}>
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" value=${data.age}>
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" value=${data.weight}>
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" value=${data.image}>
                </div>
                <button class="btn" type="submit">Edit Pet</button>
            </div>
        </form>
    </section>`;
}

async function edit(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const name = form.get('name').trim();
    const breed = form.get('breed').trim();
    const age = form.get('age').trim();
    const weight = form.get('weight').trim();
    const image = form.get('image').trim();

    const id = event.target.id;

    if (!(name && breed && age && weight && image)) {
        alert('No empty fields');
    } else {
        const data = await put('/data/pets/' + id, { name, breed, age, weight, image });
        page('/');
    }
}
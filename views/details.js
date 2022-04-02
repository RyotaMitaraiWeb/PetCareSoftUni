import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from '../utils.js';

export const detailsView = (data, donations, hasDonated) => {
    return html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src=${data.image}>
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${data.name}</h1>
                    <h3>Breed: ${data.breed}</h3>
                    <h4>Age: ${data.age}</h4>
                    <h4>Weight: ${data.weight}</h4>
                    <h4 class="donation">Donation: ${donations * 100}$</h4>
                </div>
                <!-- if there is no registered user, do not display div-->
                ${getUserData('id') === data._ownerId
                ? 
                html`<div class="actionBtn">
                    <!-- Only for registered user and creator of the pets-->
                    <a href="/edit/${data._id}" class="edit">Edit</a>
                    <a href="/delete/${data._id}" class="remove">Delete</a>
                    <!--(Bonus Part) Only for no creator and user-->
                </div>`
                : getUserData('id') && !hasDonated
                    ? html`<div class="actionBtn">
                        <a href="/donate/${data._id}" class="donate">Donate</a>
                    </div>`
                    : null 
                
                }
            </div>
        </div>
    </section>`;
}
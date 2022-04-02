import { get } from "../api.js";
import { render, html } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "../utils.js";
import { detailsView } from "../views/details.js";
import { renderNav } from "./nav.js";

export async function renderDetails(ctx) {
    renderNav();
    const id = ctx.params.id;

    const data = await get('/data/pets/' + id);
    const user = getUserData('id');

    let hasDonated = true;
    if (user) {
        const userDonation = await get(`/data/donation?where=petId%3D%22${id}%22%20and%20_ownerId%3D%22${user}%22&count`);
        
        hasDonated = userDonation > 0;
    }

    const donations = await get(`/data/donation?where=petId%3D%22${id}%22&distinct=_ownerId&count`);
    console.log(donations);

    render(html`
    ${detailsView(data, donations, hasDonated)}
    `, document.querySelector('main'));
}
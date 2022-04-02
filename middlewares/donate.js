import page from "../node_modules/page/page.mjs";
import { post } from "../api.js";

export async function donate(ctx) {
    const petId = ctx.params.id;
    
    await post('/data/donation', { 
        petId: petId
     });

    page('/details/' + petId);
}
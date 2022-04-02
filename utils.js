import { del, get } from "./api.js";
import page from './node_modules/page/page.mjs';

export function clearData() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('auth-token');
}

export function getUserData(key) {
    return sessionStorage.getItem(key);
}

export function checkUser() {
    const token = getUserData('auth-token');

    return token !== null;
}

export async function logout() {
    const url = 'http://localhost:3030/users/logout';

    const res = await fetch(url, {
        headers: {
            'X-Authorization': sessionStorage.getItem('auth-token'),
        }
    });

    if (res.status === 204) {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('auth-token');
        page('/');
    } else {
        alert(res.status + ' ' + res.statusText);
    }
}

export async function deleteEntry(ctx) {
    const id = ctx.params.id;
    const data = await del('/data/pets/' + id);
    page('/')
}
import { clearData } from "./utils.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {},
    }

    const token = sessionStorage.getItem('auth-token');

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    
    try {
        const res = await fetch(host + url, options);

        if (!res.ok) {
            if (res.status === 403) {
                clearData();
            }

            const error = await res.json();
            throw new Error(error.message);
        }

        if (res.status === 204) {
            return res;
        } else {
            if (url !== '/data/donation') {
                return res.json();
            }
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');
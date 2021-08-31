import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'https://localhost:8000/api';
const responseBody = response => response.body;


const tokenPlugin = secured => {
    let token = window.localStorage.getItem('jwtToken')
    return (request) => {
        if (token && secured) {
            request.set('Authorization', `Bearer ${token}`);
        }
    };
};

export const requests ={
    get: (url, secured = false) => superagent.get(`${API_ROOT}${url}`).use(tokenPlugin(secured)).then(responseBody),
    post: (url, body = null, secured = true) => superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin(secured)).then(responseBody),
    upload: (url, file,secured = true) => superagent.post(`${API_ROOT}${url}`).send(file).use(tokenPlugin(secured)).then(responseBody),
    setToken: (newJwtToken) => token => newJwtToken
}
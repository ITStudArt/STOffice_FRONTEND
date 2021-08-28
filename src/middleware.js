import {USER_LOGIN_SUCCESS} from "./actions/constraints";
import {requests} from "./agent";

export const tokenMiddleware = store => next => action =>{
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            //window.sessionStorage.accesssToken = action.token;
            window.localStorage.setItem('jwtToken', action.token);
            window.localStorage.setItem('userId', action.userId);
            requests.setToken(action.token);
            console.log('From middleware: ' + action.token);
            break;
        default:
    }

    next(action);
};
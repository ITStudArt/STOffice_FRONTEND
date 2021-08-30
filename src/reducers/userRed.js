import {
    USER_REQUEST,
    USER_RECEIVED,
    USER_ERROR,
    USER_ADD
} from "../actions/constraints";

export default(state={
    user: null,
    isFetching: false
},action)=>{
    switch(action.type){
        case USER_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case USER_RECEIVED:
            return{
                ...state,
                user: action.data['hydra:member'],
                isFetching: false
            };
        case USER_ERROR:
            return{
                ...state,
                isFetching: false,
                user: null
            };
        default:
            return state;
    }
}
import {
    THERAPIST_ADD,
    THERAPIST_ERROR,
    THERAPIST_RECEIVED,
    THERAPIST_REQUEST, THERAPIST_UNLOAD
} from "../actions/constraints";

export default(state={
    therapist: null,
    isFetching: false
},action)=>{
    switch(action.type){
        case THERAPIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case THERAPIST_RECEIVED:
            return{
                ...state,
                therapist: action.data,
                isFetching: false
            };
        case THERAPIST_ERROR:
            return{
                ...state,
                isFetching: false,
                therapist: null
            };
        case THERAPIST_UNLOAD:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
}
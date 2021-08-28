import {
    THERAPISTS_LIST_ADD,
    THERAPISTS_LIST_ERROR,
    THERAPISTS_LIST_RECEIVED,
    THERAPISTS_LIST_REQUEST
} from "../actions/constraints";

export default(state={
    therapists: null,
    isFetching: false
},action)=>{
    switch(action.type){
        case THERAPISTS_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case THERAPISTS_LIST_RECEIVED:
            return{
                ...state,
                therapists: action.data['hydra:member'],
                isFetching: false
            };
        case THERAPISTS_LIST_ERROR:
            return{
                ...state,
                isFetching: false,
                therapists: null
            };
        case THERAPISTS_LIST_ADD:
            return{
                ...state,
                therapists: state.therapists ? state.therapists.concat(action.data) : state.therapists
            };
        default:
            return state;
    }
}
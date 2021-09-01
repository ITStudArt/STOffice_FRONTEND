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
            state= {
                ...state,
                isFetching: true
            };
            return state;
        case THERAPISTS_LIST_RECEIVED:
            state={
                ...state,
                therapists: action.data['hydra:member'],
                isFetching: false
            };
            return state;
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
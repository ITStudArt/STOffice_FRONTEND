import {
    PATIENTS_LIST_ADD,
    PATIENTS_LIST_ERROR,
    PATIENTS_LIST_RECEIVED,
    PATIENTS_LIST_REQUEST
} from "../actions/action";

export default(state={
    patients: null,
    isFetching: false
},action)=>{
    switch(action.type){
        case PATIENTS_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case PATIENTS_LIST_RECEIVED:
            return{
                ...state,
                patients: action.data['hydra:member'],
                isFetching: false
            };
        case PATIENTS_LIST_ERROR:
            return{
                ...state,
                isFetching: false,
                patients: null
            };
        case PATIENTS_LIST_ADD:
            return{
                ...state,
                patients: state.patients ? state.patients.concat(action.data) : state.patients
            };
        default:
            return state;
    }
}
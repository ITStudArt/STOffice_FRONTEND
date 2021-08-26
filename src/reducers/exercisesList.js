import {
    EXERCISES_LIST_ADD,
    EXERCISES_LIST_ERROR,
    EXERCISES_LIST_RECEIVED,
    EXERCISES_LIST_REQUEST
} from "../actions/action";

export default(state={
    exercises: null,
    isFetching: false
},action)=>{
    switch(action.type){
        case EXERCISES_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case EXERCISES_LIST_RECEIVED:
            return{
                ...state,
                exercises: action.data['hydra:member'],
                isFetching: false
            };
        case EXERCISES_LIST_ERROR:
            return{
                ...state,
                isFetching: false,
                exercises: null
            };
        case EXERCISES_LIST_ADD:
            return{
                ...state,
                exercises: state.exercises ? state.exercises.concat(action.data) : state.exercises
            };
        default:
            return state;
    }
}
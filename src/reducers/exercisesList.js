import {EXERCISES_LIST, EXERCISES_LIST_ADD} from "../actions/action";

export default(state={
    exercises: null
},action)=>{
    switch(action.type){
        case EXERCISES_LIST:
            return {
                ...state,
                exercises: action.data
            }
        case EXERCISES_LIST_ADD:
            return{
                ...state,
                exercises: state.exercises ? state.exercises.concat(action.data) : state.exercises
            }
        default:
            return state;
    }
}
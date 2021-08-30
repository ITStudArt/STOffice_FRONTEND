import {FILE_UPLOAD_REQUEST, FILE_UPLOADED} from "../actions/constraints";

export default (state ={
    isSending: false,
    file: null
},action)=>{
    switch(action.type){
        case FILE_UPLOAD_REQUEST:
            return {
                ...state,
                isSending: true
            };
        case FILE_UPLOADED:
            return{
                ...state,
                isSending: false,
                file: action.file
            };

        default:
            return state;
    }
    }

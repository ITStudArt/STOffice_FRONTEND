import {combineReducers} from "redux";
import exercisesList from "./reducers/exercisesList";
import therapistsList from "./reducers/therapistsList";
import patientsList from "./reducers/patientsList";
import therapist from "./reducers/therapist";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
        exercisesList,
        therapistsList,
        patientsList,
        therapist,
        form: formReducer
        }
);